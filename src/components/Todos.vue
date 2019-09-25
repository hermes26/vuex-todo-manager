<template>
  <div>
      <h3>Todos</h3>
       <div class="legend">
        <span>Double click to mark as complete</span>
        <span>
            <span class="incomplete-box"></span> = Incomplete
        </span>
        <span>
            <span class="complete-box"></span> = Complete
        </span>
    </div>
      <div class="todos">
          <div @dblclick="onDblClick(todo)" v-for="todo in allTodos" v-bind:key="todo.id" 
          class="todo" v-bind:class="{'is-complete':todo.completed}"> 
              <!-- when we loop through something we need to have a unique key -->
              <!-- asign the class name is-completed if todo.completed is true -->
            {{todo.title}}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            <!-- calling the deleteTodo action directly from here. but first need to bring it in, in the methods mapaction -->
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; //mapped getters from vuex to our component
export default {
    name: "Todos",
    computed: mapGetters(['allTodos']), //passing the array of getters we want, using computed, will allow us to use the getter in our component
    // methods: mapActions(['fetchTodos']) if we had only one method
    //multiple methods:
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']), //the fetchTodo is not called yet, it is just matched to the todos component. use lifecycle method created to call
        onDblClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed,
            }
            this.updateTodo(updTodo);
        }
    },
    created(){//lifecycle method
        this.fetchTodos(); //calls the fetchTodos action
    }
}
</script>

<style>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }

    .legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}

</style>
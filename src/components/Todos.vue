<template>
  <div>
      <h3>Todos</h3>
      <div class="todos">
          <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo"> <!-- when we loop through something we need to have a unique key -->
            {{todo.title}}
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
        ...mapActions(['fetchTodos']), //the fetchTodo is not called yet, it is just matched to the todos component. use lifecycle method created to call
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

</style>
import axios from 'axios';

const state = {
    todos: []
};

const getters = {//need the getter to display the state in the todos component
    allTodos: state => state.todos
};

const actions = {//need an action that is going to make a request, get a response , and then call a mutation
    //when you call an action, it takes in a object as parameter
    async fetchTodos( { commit } ){ //destructure, get commit which is used to commit/call a mutation
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data); //1st param is the mutation we want to call, 2nd para is what we want to pass in, which is the todos
    },

    async addTodo( {commit}, title ) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });
        commit('newTodo', response.data);
    }
};

const mutations = {//this is what actually mutates the action to the state
    setTodos: (state, todos) => state.todos = todos, //todos is the response.data passed in the commit action
    newTodo: (state, todo) => state.todos.unshift(todo),
};

export default {
    state,
    getters,
    actions,
    mutations
}
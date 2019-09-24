import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'todo one',
        },
        {
            id: 2,
            title: 'todo two'
        },
    ]
};

const getters = {//need the getter to display the state in the todos component
    allTodos: state => state.todos
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
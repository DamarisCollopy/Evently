import axios from 'axios'

const state = {
    option :[
       'Voleibol de quadra',
       'Voleibol de areia',
       'Futebol',
       'Futebol Americano',
       'Futebol de salão',
       'Basquetebol',
       'Handebol',
       'Rugby',
       'Beisebol',
       'Badminton',
       'Polo Aquático',
       'Críquete',
       'Outros'
    ],
    events: []
}

const mutations = {
    SET_EVENTS(state, events) {
        state.events = events
    }
}

const actions = {
    getEvents({ commit }) {
        axios.get(`${ process.env.API }/events`).then(response => {
            commit('SET_EVENTS', response.data)
        }).catch(err => {
            this.$q.dialog({
            title: 'Error',
            message: 'Could not find events'
        })
      })
    }
}

const getters = {
    option: (state) => {
        return state.option
    },
    events: state => {
        return state.events;
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
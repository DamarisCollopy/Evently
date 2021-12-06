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
    events: {}, 
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
    },

    addEvents({}, payload){
        axios.post(`${ process.env.API }/events`, {
            name: payload.name,
            day:  payload.day,
            starTime:  payload.starTime,
            endTime:  payload.endTime,
            maxParticipants: payload.maxParticipants,
            numbParticipants: payload.numbParticipants,
            neighborhood: payload.neighborhood,
            city: payload.city,
            confirmEvent: payload.confirmEvent,
            event: payload.event,
            userId: payload.userId
          })
        .then(response => {
            console.log('response', response.data)
        }).catch(error => {
          console.log('error:', error)
          this.$q.dialog({
            title: 'Error',
            message: 'Ops, something went wrong, try again'
          })
          this.$q.loading.hide()
        })
    },
   
    myEventsEdit({}, payload){
        const id = payload.id
        axios.put(`${ process.env.API }/events/${id}`, {
            name : payload.name,
            day: payload.day,
            starTime: payload.starTime,
            endTime: payload.endTime,
            maxParticipants: payload.maxParticipants,
            numbParticipants: payload.numbParticipants,
            neighborhood: payload.neighborhood,
            city: payload.city,
            event: payload.event,
        }).then(response => {
            commit('SET_EVENTS', response.data)
        }).catch(err => {
            this.$q.dialog({
            title: 'Error',
            message: 'Could not find events'
        })
      })
    },
    myEventsDelete({}, payload){
        const id = payload.id
        axios.delete(`${ process.env.API }/events/${id}`).then(response => {
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
    events: (state) => {
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
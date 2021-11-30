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
    ]
}

const mutations = {

}

const actions = {

}

const getters = {
    option: (state) => {
        return state.option
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
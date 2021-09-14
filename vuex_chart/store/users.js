export const state = () => ({
  items: [
    { id: 1, name: '高田', from: '愛知', age: 33 },
    { id: 2, name: '横山', from: '愛知', age: 42 },
    { id: 3, name: '愛知', from: '岐阜', age: 10 },
  ],
})

export const mutations = {
  deleteMutation(state, i) {
    state.items.splice(i, 1)
  },
  updateMutation(state, obj) {
    state.items.splice(obj.index, 1, obj.val)
  },
  createMutation(state, obj) {
    state.items.push(obj)
  },
}

export const actions = {
  deleteAction({ commit }, i) {
    commit('deleteMutation', i)
  },
  updateAction({ commit }, obj) {
    commit('updateMutation', obj)
  },
  createAction({ commit }, obj) {
    commit('createMutation', obj)
  },
}

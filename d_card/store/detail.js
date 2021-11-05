import Vue from 'vue'
export const state = () => ({
  det: {},
  d: ['a', 'b', 'c'],
})

export const mutations = {
  addDetail(state, payload) {
    Vue.set(state.det, payload.date, payload.detailMonth)
  },
}

export const actions = {
  addDetailActions(context, payload) {
    context.commit('addDetail', payload)
  },
}

export const state = () => ({
  spendingIncomeShop: {},
})

export const mutations = {
  addMonthly(state, payload) {
    state.spendingIncomeShop[payload.date] = payload.val
  },
}
export const actions = {
  addMonthlyActions(context, payload) {
    context.commit('addMonthly', payload)
  },
}

export const state = () => ({
  list: [],
  counter: 5,
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  addCounter(state, n) {
    state.counter += n
  },
  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}

export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
      created: new Date(),
    })
  },
  remove(state, todo) {
    // 公式ドキュメントではtodoをオブジェクトで受け取っているが、呼び出し元がオブジェクトで渡していないので正しく動作しない。
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}

<template>
  <v-app light>
    <h1>TODOLIST</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">remove</button>
      </li>
      <li>
        <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
      </li>
    </ul>
    <v-btn @click="dcardAdd">dcardAdd</v-btn>
    <div>{{ todos }}</div>
    <div>{{ $store.state.monthly.spendingIncomeShop }}</div>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todo.list
    },
  },
  methods: {
    dcardAdd() {
      this.$store.dispatch(
        'monthly/addMonthlyActions',
        this.$store.state.todo.list[0]
      )
    },
    addTodo(e) {
      this.$store.commit('todo/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todo/toggle',
    }),
    removeTodo(todo) {
      this.$store.commit('todo/remove', todo)
    },
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>

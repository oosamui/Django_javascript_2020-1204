<template>
  <div>
    <v-btn @click="add(1)">1</v-btn>
    <v-btn @click="add(3)">3</v-btn>
    {{ counter2 }}
  </div>
</template>

<script>
export default {
  computed: {
    counter2() {
      return this.$store.state.todo.counter
    },
  },
  methods: {
    add(n) {
      this.$store.commit('todo/addCounter', n)
    },
  },
}
</script>

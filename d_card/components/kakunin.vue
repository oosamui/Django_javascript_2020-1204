<template>
  <div>
    {{ todos }}
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.ayapon.todos.list
    },
  },
}
</script>

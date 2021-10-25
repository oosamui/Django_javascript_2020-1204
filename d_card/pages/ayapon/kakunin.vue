<template>
  <div>
    <p>ayaponの下</p>
    {{ todos }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: [],
    }
  },
  computed: {
    todos() {
      return this.$store.state.ayapon.todos.list
    },
  },
}
</script>

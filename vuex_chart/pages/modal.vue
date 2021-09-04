<template>
  <div>
    <v-btn color="success" @click="modalOpen">open</v-btn>
    <v-dialog v-model="dialog" overlay-color="green" min-width="100">
      <div style="background: white; color: #222222"></div>
      ためになったら広告の中身を見ていってね⭐️
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    modalOpen() {
      this.dialog = !this.dialog
    },
  },
}
</script>

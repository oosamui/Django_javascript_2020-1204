<template>
  <div>
    <v-btn color="success" @click.stop="dialog = true">開く</v-btn>
    <v-dialog v-model="dialog">
      <dialog-card
        :name="name"
        :email="email"
        @clickSubmit="onSubmit"
      ></dialog-card>
    </v-dialog>
    <v-text-field v-model="name" label="Name" disabled></v-text-field>
    <v-text-field v-model="email" label="Email" disabled></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      dialog: false,
    }
  },
  methods: {
    onSubmit(param) {
      this.dialog = false
      this.name = param.nameM
      this.email = param.emailM
    },
  },
}
</script>

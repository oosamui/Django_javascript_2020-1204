<template>
  <v-card>
    <v-card-title>Component Title</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="returnData.name"
              label="Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="returnData.email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="success" @click="submit"> OK </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    email: { type: String, default: '' },
  },
  data() {
    return {
      returnData: {
        nameM: this.name,
        emailM: this.email,
      },
    }
  },
  methods: {
    submit() {
      this.$emit('clickSubmit', this.returnData)
    },
  },
}
</script>

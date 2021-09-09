<template>
  <div>
    <v-card-title>
      <span class="headline">ユーザー編集</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6"
            ><div>ID</div>
            {{ userId }}
          </v-col>
          <v-col cols="6">
            <v-text-field
              :value="userName"
              label="名前"
              @input="userNameInput = $event"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              :value="userAge"
              label="年齢"
              @input="userAgeInput = $event"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="close">閉じる</v-btn>
      <v-btn class="primary" @click="update">更新する</v-btn>
      <v-spacer />
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    usersIndex: { type: Number, default: 0 },
  },

  data() {
    return {
      userNameInput: '',
      userAgeInput: -1,
    }
  },
  computed: {
    userAge() {
      const age = this.$store.state.users.items[this.usersIndex].age
      return age
    },
    userName() {
      const name = this.$store.state.users.items[this.usersIndex].name
      return name
    },
    userId() {
      return this.$store.state.users.items[this.usersIndex].id
    },
    userFrom() {
      return this.$store.state.users.items[this.usersIndex].from
    },
  },
  methods: {
    update() {
      // const that = this
      this.userNameInput =
        this.userNameInput !== '' ? this.userNameInput : this.userName
      this.userAgeInput = Number(this.userAgeInput)
      this.userAgeInput =
        this.userAgeInput !== -1 ? this.userAgeInput : this.userAge
      this.$store.dispatch('users/updateAction', {
        index: this.usersIndex,
        val: {
          id: this.userId,
          name: this.userNameInput,
          age: this.userAgeInput,
          from: this.userFrom,
        },
      })
      this.userAgeInput = -1
      this.userNameInput = ''
      this.$emit('is-dialog', false)
    },
    close() {
      this.$emit('is-dialog', false)
      // this.dialog = false
      // this.user = {}
    },
  },
}
</script>

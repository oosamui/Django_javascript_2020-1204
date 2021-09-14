<template>
  <div style="background: white; color: #222222"
  >
    <v-card-title>
      <span class="headline">ユーザー編集</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6"
            ><div>ID</div>
            {{ usersInfo.u.id }}
          </v-col>
          <v-col cols="6">
            <v-text-field
              :value="usersInfo.u.name"
              label="名前"
              @input="userNameInput = $event"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              :value="usersInfo.u.age"
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
    usersInfo: { type: Object },
  },

  data() {
    return {
      userNameInput: '',
      userAgeInput: -1,
    }
  },

  methods: {
    update() {
      this.userNameInput =
        this.userNameInput !== '' ? this.userNameInput : this.usersInfo.u.name
      this.userAgeInput = Number(this.userAgeInput)
      this.userAgeInput =
        this.userAgeInput !== -1 ? this.userAgeInput : this.usersInfo.u.age
      this.$store.dispatch('users/updateAction', {
        index: this.usersInfo.i,
        val: {
          id: this.usersInfo.u.id,
          name: this.userNameInput,
          age: this.userAgeInput,
          from: this.usersInfo.u.from,
        },
      })
      this.userAgeInput = -1
      this.userNameInput = ''
      this.$emit('is-dialog', false)
    },
    close() {
      this.userAgeInput = -1
      this.userNameInput = ''
      this.$emit('is-dialog', false)
      // this.dialog = false
      // this.user = {}
    },
  },
}
</script>

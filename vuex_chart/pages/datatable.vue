<template>
  <v-app>
    <v-container>
      <v-row>
        <v-btn rounded color="indigo" @click="newUser()">new</v-btn>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-data-table :headers="headers" :items="$store.state.users.items">
            <template #[`header.from`]="{}">
              <v-select
                v-model="prefecture"
                :items="prefectures"
                label="県の選択"
                class="select-input-none"
              ></v-select>
            </template>
            <template #top>
              <v-dialog
                v-model="dialog"
                max-width="500px"
                overlay-opacity="0.9"
              >
                <!-- :users-index="index" -->
                <modal-user
                  :users-info="user"
                  @is-dialog="dialog = $event"
                ></modal-user>
              </v-dialog>
            </template>
            <template #[`item.delete`]="{ item }">
              <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
              <v-icon @click="edit(item)">mdi-pencil</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <date-input />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import dateInput from '../components/dateInput.vue'
export default {
  components: { dateInput },
  data() {
    return {
      headers: [
        { text: 'id', value: 'id' },
        { text: '名前', value: 'name' },
        {
          text: '出身',
          value: 'from',
          filter: (val) => {
            if (!this.prefecture) {
              return true
            } else {
              return val === this.prefecture
            }
          },
        },
        { text: '年齢', value: 'age' },
        { text: '削除', value: 'delete', sortable: false },
      ],

      dialog: false,
      prefectures: [
        { text: '全選択', value: '' },
        { text: '愛知', value: '愛知' },
        { text: '岐阜', value: '岐阜' },
        { text: '三重', value: '三重' },
      ],
      prefecture: '',
      user: {},
      index: 0,
    }
  },
  computed: {},
  methods: {
    deleteItem(item) {
      const i = this.$store.state.users.items.indexOf(item)
      // confirm('これを削除しますか？') && this.items.splice(i, 1)
      this.$store.dispatch('users/deleteAction', i)
    },
    edit(us) {
      this.index = this.$store.state.users.items.indexOf(us)
      this.user = { i: this.index, u: us, id: us.id }
      this.dialog = true
    },
    idLast() {
      const length = this.$store.state.users.items.length
      return this.$store.state.users.items[length - 1].id
    },
    newUser() {
      this.user = {}
      this.user = {
        i: this.$store.state.users.items.length,
        u: { id: this.idLast() + 1, name: '', age: '-1', from: '' },
      }
      this.$store.dispatch('users/createAction', this.user)

      this.dialog = true
    },
  },
}
</script>

<style scoped>
.v-select {
  max-height: 60px;
  max-width: 100px;
  font-size: 11px;
}
.select-input-none >>> .v-select__selections input {
  width: 0;
}
</style>

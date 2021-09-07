<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-data-table :headers="headers" :items="$store.state.users.items">
            <template #[`header.from`]="{}">
              <v-select
                v-model="prefecture"
                :items="prefectures"
                label="県の選択"
              ></v-select>
            </template>
            <template #top>
              <v-dialog v-model="dialog" max-width="500px">
                <modal-user
                  :users-index="index"
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
    </v-container>
  </v-app>
</template>

<script>
export default {
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
  methods: {
    deleteItem(item) {
      const i = this.$store.state.users.items.indexOf(item)
      // confirm('これを削除しますか？') && this.items.splice(i, 1)
      this.$store.dispatch('users/deleteAction', i)
    },
    edit(u) {
      this.index = this.$store.state.users.items.indexOf(u)
      this.dialog = true
    },
  },
}
</script>

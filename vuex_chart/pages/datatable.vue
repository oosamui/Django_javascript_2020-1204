<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-data-table :headers="headers" :items="items">
          <template #[`header.from`]="{}">
            <v-select
              v-model="prefecture"
              :items="prefectures"
              label="県の選択"
            ></v-select>
          </template>
          <template #top>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card-title>
                <span class="headline">ユーザー編集</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6"
                      ><div>ID</div>
                      {{ user.id }}
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="user.name" label="名前" />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="user.age" label="年齢" />
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
      items: [
        { id: 1, name: '高田', from: '愛知', age: 33 },
        { id: 2, name: '横山', from: '愛知', age: 42 },
        { id: 3, name: '愛知', from: '岐阜', age: 10 },
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
    }
  },
  methods: {
    deleteItem(item) {
      const i = this.items.indexOf(item)
      confirm('これを削除しますか？') && this.items.splice(i, 1)
    },
    update() {
      this.items.splice(this.user.id - 1, 1, this.user)
      this.dialog = false
    },
    close() {
      this.dialog = false
      this.user = {}
    },
    edit(user) {
      this.user = Object.assign({}, user)
      this.dialog = true
    },
  },
}
</script>

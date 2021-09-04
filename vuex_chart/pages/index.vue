<template>
  <v-app>
    <v-layout>
      <v-card v-if="users_computed">
        <v-card-title>
          ユーザー一覧
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="users_computed.users"
          :footer-props="{
            'items-per-page-text': '行/ページ:',
            itemsPerPageOptions: [3, 5, 10, -1],
            'show-current-page': true,
          }"
          @click:row="clickRow"
          :search="search"
          sort-by="['name','date']"
          :sort:desc="true"
          class="elevation-1"
        >
        </v-data-table>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      search: '',
      headers: [
        { text: '名前', value: 'name', align: 'start' },
        { text: '入力日', value: 'date' },
      ],
    }
  },
  computed: {
    users_computed() {
      return this.$store.state.us
    },
  },
  methods: {
    clickRow(item) {
      console.log(item.name)
    },
  },
}
</script>

<template>
  <v-app>
    <v-data-table
      :headers="headersComputed"
      :items="$store.state.monthly.spendingIncomeShop"
    >
      <template #[`item.action`]="{ item }">
        <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
        <v-icon @click="detailItem(item)"> mdi-format-list-checkbox </v-icon>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
export default {
  computed: {
    headersComputed() {
      const textData = this.$store.state.monthly.shopsText
      const headers = textData.map((shop) => {
        return { value: shop[0], text: shop[1] }
      })
      return headers
    },
    selectRow(row) {
      return null
    },
  },
  methods: {
    deleteItem(item) {
      const index = this.$store.state.monthly.spendingIncomeShop.indexOf(item)

      if (confirm('ガチで削除しますか')) {
        this.$store.dispatch('monthly/deleteAction', index)
      }
    },
    detailItem(item) {
      console.log(item['年月'])
      this.$router.push({ name: 'detail-date', params: { date: item['年月'] } })
    },
  },
}
</script>

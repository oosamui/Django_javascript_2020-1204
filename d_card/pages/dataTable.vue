<template>
  <v-app>
    <v-data-table
      :headers="headersComputed"
      :items="$store.state.monthly.spendingIncomeShop"
    >
    </v-data-table>
    {{ $store.state.monthly.spendingIncomeShop }}
  </v-app>
</template>

<script>
export default {
  computed: {
    headersComputed() {
      const textData = this.$store.state.monthly.shopsText
      console.log(textData)
      const headers = textData.map((shop) => {
        return { value: shop[0], text: shop[1] }
      })
      return headers
    },
  },
  methods: {
    deleteItem(item) {
      const index = this.items.indexOf(item)
      confirm('ガチで削除しますか') && this.items.splice(index, 1)
    },
  },
}
</script>

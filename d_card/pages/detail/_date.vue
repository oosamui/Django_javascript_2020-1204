<template>
  <v-app>
    <v-data-table :headers="headers" :items="detailComputed"> </v-data-table>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '月日', value: 'date' },
        { text: '店名', value: 'shopName' },
        { text: '金額', value: 'price' },
      ],
    }
  },
  computed: {
    detailComputed() {
      // const month = '2021/09'
      const month = this.$route.params.date
      const former = this.$store.state.detail.det // 受け取った年月の日別データ
      console.log(former)

      const former2 = former[month] // 受け取った年月の日別データ
      // const former = this.$store.state.detail.det[month] // 受け取った年月の日別データ
      console.log(former2)
      const dateShopPrice = !former2
        ? [{ date: '-1', shopName: '西友', price: -11 }]
        : former2.map((val) => {
            return { date: val[1], shopName: val[2], price: val[4] }
          })
      // return [{ date: '08/02', shopName: '西友', price: 100 }]
      return dateShopPrice
    },
  },
}
</script>

<template>
  <div>
    <p>time:{{ data.time.updated }}</p>
    <p>time:{{ date }}</p>
    <p>chartName:{{ data.chartName }}</p>
    <p>USD:{{ data.bpi.USD.rate }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      'https://api.coindesk.com/v1/bpi/currentprice.json'
    )
    const updated = new Date(response.time.updated).toLocaleString()
    return { data: response, date: updated }
  },
}
</script>

<template>
  <div>
    <p>{{ titles }}</p>
  </div>
</template>

<script>
export default {
  asyncData({ $axios }) {
    const url = 'https://api.calil.jp/library?'
    const apikey = '2ffc7d89470b203a55ea009ccb1cfbfa'
    const pref = encodeURIComponent('愛知県')
    // const pref = '&geocode=136.7163027,35.390516&limit=10'
    return $axios
      .get(url + 'appkey=' + apikey + '&pref=' + pref + '&format=json')
      .then((res) => {
        return { titles: res.data }
      })
  },
}
</script>

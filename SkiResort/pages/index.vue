<template>
  <div>
    <no-ssr>
      <!-- 気仙沼大島の緯度・経度 -->
      <l-map :zoom="zoom" :center="center" style="height: 600px">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker
          v-for="(marker, k) of markerData"
          :key="k"
          :lat-lng="marker"
          }
        ></l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // leafletの設定
      center: [38.856355, 141.615593],
      zoom: 13,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      // マーカーを置く場所一覧（観光地）
      markerData: {
        center: { lat: 38.856355, lng: 141.615593 },
        kugunaribeach: { lat: 38.873171, lng: 141.63164 },
        mtkame: { lat: 38.87373, lng: 141.617855 },
        tatsumai: { lat: 38.830445, lng: 141.624526 },
        kodanobeach: { lat: 38.851971, lng: 141.622216 },
        bridge: { lat: 38.878459, lng: 141.606309 },
      },
    }
  },
}
</script>

<style scoped>
#map {
  height: 600px;
  width: 400px;
}
</style>

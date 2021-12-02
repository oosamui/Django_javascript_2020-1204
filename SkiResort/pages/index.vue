<template>
  <div>
    <!-- イザナギブログ -->
    <!-- https://izanagiblog.com/archives/659 -->
    <no-ssr>
      <!-- 気仙沼大島の緯度・経度 -->
      <l-map :zoom="zoom" :center="center" style="height: 600px">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker
          v-for="marker in markerData"
          :key="marker.name"
          :lat-lng="marker.latlng"
        >
          <l-tooltip :content="marker.name"></l-tooltip>
          <l-icon
            :icon-size="[36, 36]"
            :icon-anchor="[18, 36]"
            :icon-url="null"
          >
            <!--<v-icon style="transform: rotate(2deg)" color="white" size="36px"
              >mdi-snowman</v-icon
            >  -->
            <img :src="snowman(marker.operating)" alt="スキー" width="50px" />
          </l-icon>
        </l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // leafletの設定

      center: [36.702216, 137.833887],
      zoom: 6,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      // マーカーを置く場所一覧（観光地）
      markerData: [
        { name: '八方', latlng: [36.702216, 137.833887], operating: '1' },
        {
          name: '木曾福島',
          latlng: [35.940802, 137.667568],
          operating: '2',
        },
        { name: '野沢', latlng: [36.920678, 138.452323], operating: '3' },
        { name: '苗場', latlng: [36.791636, 138.779641], operating: '0' },
        { name: 'キロロ', latlng: [43.067437, 140.989031], operating: '0' },
        { name: 'ルスツ', latlng: [42.73677, 140.910574], operating: '0' },
        { name: '安比高原', latlng: [40.007729, 140.958578], operating: '0' },
        { name: '蔵王温泉', latlng: [38.170528, 140.401735], operating: '0' },
        { name: 'アルツ磐梯', latlng: [37.585781, 140.033616], operating: '0' },
        { name: '車山', latlng: [36.1018, 138.213334], operating: '0' },
        { name: '茶臼山', latlng: [35.220622, 137.654341], operating: '0' },
        { name: 'イエティ', latlng: [35.300021, 138.768364], operating: '0' },
        { name: 'めいほう', latlng: [35.941763, 137.042953], operating: '0' },
      ],
    }
  },
  computed: {
    snowman() {
      return function (n) {
        // const n = '3'
        const picture = '雪だるま' + n + '.png'
        return picture
      }
    },
  },
}
</script>

<style scoped>
#map {
  height: 600px;
  width: 400px;
}
</style>

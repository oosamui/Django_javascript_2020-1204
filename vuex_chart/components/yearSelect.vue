<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-btn color="primary" small @click="young">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn color="primary" small @click="old">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
          <v-data-table
            dense
            :headers="headers"
            :items="yearList[page]"
            hide-default-footer
            :items-per-page="35"
            :footer-props="{
              'items-per-page-options': [35, -1],
            }"
            @click:row="yearSelect"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import y from '@/assets/seirekiWareki.json'
export default {
  props: {
    purposeDateSelect: String,
  },
  data() {
    return {
      yearJson: y,
      yearList: [[], [], [], []],
      headers: [
        { text: '西暦', value: '西暦' },
        { text: '和暦', value: '和暦' },
        { text: '年齢', value: '年齢' },
      ],
      // page: 3,
      page: Number(this.purposeDateSelect),
    }
  },
  mounted() {
    const yToday = new Date().getFullYear()

    // 配列に挿入
    Object.keys(this.yearJson).forEach((y) => {
      // 西暦と和暦取り出し
      const yy = Number(y)
      const yyJa = this.yearJson[y]
      const age = yToday - yy
      let flag = 0 // 年齢を70歳未満、７０から90歳、90歳以上で振り分ける
      if (age >= 0 && age < 35) {
        flag = 0
      } else if (age >= 35 && age < 70) {
        flag = 1
      } else if (age >= 70 && age < 105) {
        flag = 2
      } else {
        flag = 3
      }
      this.yearList[flag].push({
        西暦: yy + '年',
        和暦: yyJa,
        年齢: age.toString() + '歳',
      })
    })
  },
  methods: {
    young() {
      // console.log(this.page)
      this.page = (this.page + 4 - 1) % 4
    },
    old() {
      this.page = (this.page + 4 + 1) % 4
    },
    yearSelect(val) {
      // console.log(val.西暦)
      this.$emit('yearSelectToParent', val.西暦)
    },
  },
}
</script>

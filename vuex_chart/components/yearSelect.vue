<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <input type="file" @change="yearInput" />
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
            @click:row="yearSelect"
            hide-default-footer
            :items-per-page="30"
            :footer-props="{
              'items-per-page-options': [10, 20, 30, 40, -1],
            }"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearList: [[], [], []],
      headers: [
        { text: '西暦', value: '西暦' },
        { text: '和暦', value: '和暦' },
        { text: '年齢', value: '年齢' },
      ],
      page: 1,
    }
  },
  computed: {
    yearListKeys() {
      return Object.keys(this.yearList)
    },
    yearListValues() {
      return Object.values(this.yearList)
    },
  },
  methods: {
    // csvファイル読み込み
    yearInput(e) {
      const yToday = new Date().getFullYear()
      // const y40age = yToday - 40 // 今年40歳になる人が生まれた年
      // eslint-disable-next-line prefer-const
      let vm = this

      // eslint-disable-next-line prefer-const
      let file = e.target.files[0]

      if (!file.type.match('text/csv')) {
        vm.message = 'CSVファイルを選択してください'
        return
      }

      // eslint-disable-next-line prefer-const
      let reader = new FileReader()
      reader.readAsText(file)

      reader.onload = () => {
        vm.positives = []

        // 改行しながらArrayに入力
        // eslint-disable-next-line prefer-const
        let lines = reader.result.split('\n')
        // lines.shift()
        // eslint-disable-next-line prefer-const
        let linesArr = []

        // 配列に挿入
        for (let i = 1; i < lines.length; i++) {
          linesArr[i] = lines[i].split('	') // tab？で分割

          // 西暦と和暦取り出し
          // eslint-disable-next-line no-extra-boolean-cast
          const yy = linesArr[i][0] // 西暦を取り出す
          const yyJa = linesArr[i][1] // 和暦を取り出す
          const y = Number(yy.substring(0, yy.length - 1)) // 「最後の字＝年」以外を取り出す⇒数字
          const age = yToday - y
          if (age >= 40) {
            let flag = 0 // 年齢を70歳未満、７０から90歳、90歳以上で振り分ける
            if (age < 70) {
              flag = 0
            } else if (age >= 70 && age < 100) {
              flag = 1
            } else {
              flag = 2
            }
            this.yearList[flag].push({
              西暦: yy,
              和暦: yyJa,
              年齢: age.toString() + '歳',
            })
          }
        }
      }
      // console.log(this.yearList)
    },
    young() {
      this.page = (this.page + 3 - 1) % 3
    },
    old() {
      this.page = (this.page + 3 + 1) % 3
    },
    yearSelect(val) {
      // console.log(val.西暦)
      this.$emit('yearSelectToParent', val.西暦)
    },
  },
}
</script>

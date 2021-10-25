<template>
  <v-app>
    <input type="file" @change="dcard_analysis" />
    <div>支出{{ spending }}</div>
    <div>店 {{ shopObject }}</div>
    <div>Vuex {{ spendingconveniMonthly }}</div>
    <div @click="add">
      <v-btn color="deep-orange">aaa追加</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      shopObject: {},
      spending: 0,
      spendingConveni: 0,
      vAll: [],
      others: [],
      spendingIncome: [
        [
          '2',
          '2021/07/04',
          'aaaa',
          'JPY',
          '100',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/04',
          'ああああ',
          'JPY',
          '200',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/04',
          '入金(ローソン)',
          'JPY',
          '2000.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/05',
          'ﾌﾟﾘﾍﾟｲﾄﾞ',
          'JPY',
          '650.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/05',
          'ﾌﾟﾘﾍﾟｲﾄﾞ',
          'JPY',
          '-650.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/08',
          'ﾈｯﾄﾌﾘｯｸｽ',
          'JPY',
          '990.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/09',
          '西友　高針店Ｓ',
          'JPY',
          '502.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/13',
          '入金(ローソン)',
          'JPY',
          '20000.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/13',
          '西友　高針店Ｓ',
          'JPY',
          '1328.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/15',
          'ローソン',
          'JPY',
          '501.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/16',
          'ミニストップ一社駅前',
          'JPY',
          '498.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/16',
          '西友　高針店Ｓ',
          'JPY',
          '866.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/17',
          'ローソン',
          'JPY',
          '162.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/17',
          'ＢＳＢ西友高針',
          'JPY',
          '420.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/17',
          '西友　高針店Ｓ',
          'JPY',
          '896.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/19',
          'ミニストップ一社駅前',
          'JPY',
          '498.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/19',
          '西友　高針店Ｓ',
          'JPY',
          '2220.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/20',
          'セブン－イレブン・ジャパン',
          'JPY',
          '499.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/21',
          'ミニストップ一社駅前',
          'JPY',
          '466.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/22',
          'フアミリ―マ―トオワリイチノミヤピーエー',
          'JPY',
          '108.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/22',
          '西友　高針店Ｓ',
          'JPY',
          '421.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/23',
          '西友　高針店Ｓ',
          'JPY',
          '131.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/23',
          '亜熱帯　名東高針店',
          'JPY',
          '1780.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/23',
          '西友　高針店Ｓ',
          'JPY',
          '1665.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/24',
          'ｈｏｎｔｏ',
          'JPY',
          '11.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/24',
          'ｈｏｎｔｏ',
          'JPY',
          '-11.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/24',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/24',
          'ｈｏｎｔｏ',
          'JPY',
          '220.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/24',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/25',
          'ローソン',
          'JPY',
          '151.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/25',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/25',
          '西友　高針店Ｓ',
          'JPY',
          '1849.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/26',
          'ミニストップ一社駅前',
          'JPY',
          '498.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/26',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/27',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/28',
          'ミニストップ一社駅前',
          'JPY',
          '401.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/28',
          '西友　高針店Ｓ',
          'JPY',
          '1224.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/28',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/29',
          'ミニストップ一社駅前',
          'JPY',
          '498.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/29',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/30',
          'ローソン',
          'JPY',
          '501.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/30',
          'ローソン',
          'JPY',
          '185.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/30',
          '西友　高針店Ｓ',
          'JPY',
          '1026.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
        [
          '2',
          '2021/07/31',
          'ｈｏｎｔｏ',
          'JPY',
          '110.00',
          '0.00',
          '0.00',
          '0.00',
          '',
          '',
          '',
          '',
          'MC',
        ],
      ],

      // shops: [], // databaseに移動
      convenienceStore: [
        'ミニストップ',
        'ローソン',
        'セブン－イレブン',
        'デイリーヤマザキ',
        'フアミリ―マ―ト',
      ],
    }
  },
  computed: {
    spendingconveniMonthly() {
      return this.$store.state.monthly.spendingIncomeShop
    },
  },
  methods: {
    add() {
      this.$store.dispatch('monthly/addMonthlyActions', 'aaa')
    },
    shops() {
      const shopValueText = this.$store.state.monthly.shopsText
      const shopValue = shopValueText.map((s) => s[0])
      return shopValue
    },
    vuex_save(monthNow) {
      this.shopObject['年月'] = monthNow
      this.$store.dispatch('monthly/addMonthlyActions', this.shopObject)
    },
    dcard_analysis(e) {
      this.shops().map((s) => (this.shopObject[s] = 0))
      console.log(this.shopObject)
      let total = 0
      this.others = []
      this.spending = 0
      const vAll1 = [] // 支出入の全データ
      // csvから取り出し
      const vm = this
      const file = e.target.files[0]

      if (!file.type.match('text/csv')) {
        vm.message = 'CSVファイルを選択してください'
        return
      }
      const reader = new FileReader()
      reader.readAsText(file, 'shift-jis') // shft-jisの場合
      // reader.readAsText(file) // utf-8の場合

      reader.onload = () => {
        // 改行しながらArrayに入力
        const lines = reader.result.split('\n')
        let val = []

        for (let i = 1; i < lines.length - 1; i++) {
          let flagOthers = true // たまにしか使わない店=「その他」の判定フラグ
          // 読み込み開始
          val = lines[i].split(',')
          const vNow = val.map((shop1) => {
            // vNow:今読み込んでいる支出入データ
            return shop1.slice(1).slice(0, -1)
          })
          vAll1.push(vNow)

          // this.spendingIncome.forEach((val) => {
          total += parseInt(vNow[4])
          // 入金の場合、収入に合計
          if (vNow[2].substr(0, 2) === '入金') {
            this.shopObject['入金'] += parseInt(vNow[4])
            // console.log(this.shopObject['入金'])
            // console.log(parseInt(vNow[4]))
            flagOthers = false
            // 入金出ない⇒支出⇒
          } else {
            this.spending += parseInt(vNow[4])
            // 支出の内訳（まずはコンビニかどうか）
            const existingConveni = this.convenienceStore.some((shop) =>
              vNow[2].includes(shop)
            )

            if (existingConveni) {
              flagOthers = false
              this.shopObject['コンビニ'] += parseInt(vNow[4])
              // 支出の内訳（コンビニ以外の店 西友、hontoなど・・）
            } else {
              this.shops().forEach((shop) => {
                const existingShop = vNow[2].includes(shop)
                if (existingShop) {
                  flagOthers = false
                  this.shopObject[shop] += parseInt(vNow[4])
                }
              })
            }
            if (flagOthers === true) {
              this.shopObject['その他'] += parseInt(vNow[4]) // その他の金額合計
              this.others.push({ shop: vNow[2], price: vNow[4] })
            }
          }
        }
        // vuexに保存

        const AlreadyMonthObject = this.$store.state.monthly.spendingIncomeShop
        const AlreadyMonthKeys = Object.keys(AlreadyMonthObject)
        const monthNow = vAll1[1][1].substr(0, 7)
        // 過去に同じ年月で登録してる「かつ」上書き保存に同意
        if (AlreadyMonthKeys.includes(monthNow)) {
          if (confirm('既に同じ年月で保存されていますが、上書きしますか？')) {
            this.vuex_save(monthNow)
          }
        } else {
          this.vuex_save(monthNow) // 同じ年月の登録は「ない」
        }
      }
      return total
    },
  },
}
</script>

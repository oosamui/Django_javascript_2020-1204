export const state = () => ({
  spendingIncomeShop: [
    {
      年月: '1999/01',
      '西友　高針店': 121280,
      ＢＳＢ西友高針: 4200,
      ｈｏｎｔｏ: 11000,
      コンビニ: 49660,
      ﾈｯﾄﾌﾘｯｸｽ: 9900,
      亜熱帯: 17800,
      丸善: 0,
      あかのれん: 0,
      入金: 220000,
      その他: 0,
    },
  ],
  shopsText: [
    ['年月', '年月'],
    ['西友　高針店', '西友　高針店'],
    ['ＢＳＢ西友高針', 'ブックオフ西友高針'],
    ['ｈｏｎｔｏ', 'ｈｏｎｔｏ'],
    ['ﾈｯﾄﾌﾘｯｸｽ', 'ﾈｯﾄﾌﾘｯｸｽ'],
    ['亜熱帯', '亜熱帯'],
    ['丸善', '丸善'],
    ['あかのれん', 'あかのれん'],
    ['その他', 'その他'],
    ['delete', '削除ボタン'],
    ['入金', '入金'],
    ['コンビニ', 'コンビニ'],
  ],
  shopsValue: [
    ['年月', '年月'],
    ['西友　高針店', '西友　高針店'],
    ['ＢＳＢ西友高針', 'ブックオフ西友高針'],
    ['ｈｏｎｔｏ', 'ｈｏｎｔｏ'],
    ['ﾈｯﾄﾌﾘｯｸｽ', 'ﾈｯﾄﾌﾘｯｸｽ'],
    ['亜熱帯', '亜熱帯'],
    ['丸善', '丸善'],
    ['あかのれん', 'あかのれん'],
    ['その他', 'その他'],
    ['delete', '削除ボタン'],
  ],
})

export const mutations = {
  addMonthly(state, payload) {
    state.spendingIncomeShop.push(payload)
  },
  update(state, payload) {
    state.spendingIncomeShop[0].splice(0, 1)
  },
}
export const actions = {
  addMonthlyActions(context, payload) {
    context.commit('addMonthly', payload)
  },
  updateAction(context, payload) {
    context.commit('update', payload)
  },
}

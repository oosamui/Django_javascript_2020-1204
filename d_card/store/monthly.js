export const state = () => ({
  spendingIncomeShop: [
    {
      年月: '2021/07',
      '西友　高針店': 1,
      ＢＳＢ西友高針: 4,
      ｈｏｎｔｏ: 11,
      コンビニ: 4,
      ﾈｯﾄﾌﾘｯｸｽ: 99,
      亜熱帯: 17,
      丸善: 0,
      あかのれん: 0,
      入金: 2233,
      その他: 0,
    },
  ],
  shopsText: [
    ['年月', '年月'],
    ['西友　高針店', '西友　高針店'],
    ['SEIYU', 'Seiyu'],
    ['ＢＳＢ西友高針', 'ブックオフ西友高針'],
    ['ｈｏｎｔｏ', 'ｈｏｎｔｏ'],
    ['ﾈｯﾄﾌﾘｯｸｽ', 'ﾈｯﾄﾌﾘｯｸｽ'],
    ['亜熱帯', '亜熱帯'],
    ['丸善', '丸善'],
    ['あかのれん', 'あかのれん'],
    ['その他', 'その他'],
    ['action', '削除ボタン'],
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
    state.spendingIncomeShop.splice(payload.i, 1, payload.shopObject)
  },
  delete(state, index) {
    state.spendingIncomeShop.splice(index, 1)
  },
  AlreadyMonthAdd(state, monthAdd) {
    state.AlreadyMonthObject.push(monthAdd)
  },
}
export const actions = {
  addMonthlyActions(context, payload) {
    context.commit('addMonthly', payload)
  },
  updateMonthlyAction(context, payload) {
    context.commit('update', payload)
  },
  deleteAction(context, payload) {
    context.commit('delete', payload)
  },
  AlreadyMonthAddAction(context, monthNow) {
    context.commit('AlreadyMonthAdd', monthNow)
  },
}

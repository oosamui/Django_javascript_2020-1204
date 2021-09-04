export const state = () => ({
  users: [
    {
      id: 1,
      name: 'sato',
      date: '2023-01-01',
      memo: '落語,セパタクロ,トラックバック,相撲,山手線一周,占い',
    },
    {
      id: 2,
      name: 'suzuki',
      date: '2021-01-01',
      memo: '華道,競馬,折り紙,鉄道旅行,ランニング',
    },
    {
      id: 3,
      name: 'takahashi',
      date: '2021-01-03',
      memo: '落語,携帯電話基地局巡り,公営競技,語学,スキップ',
    },
    {
      id: 4,
      name: 'tanaka',
      date: '2021-11-01',
      memo: 'プラモデル,カメラ,カポエイラ,ジャニーズ追っかけ,切手収集',
    },
    {
      id: 5,
      name: 'watanabe',
      date: '2021-02-01',
      memo: 'タイル施工,公営競技,BCL,油絵,サックス',
    },
    {
      id: 6,
      name: 'ito',
      date: '2021-02-01',
      memo: 'お笑い鑑賞,油絵,骨董品収集,パズル,ロッククライミング',
    },
    {
      id: 7,
      name: 'yamamoto',
      date: '2021-02-01',
      memo: 'モデル撮影,書道,ギター,競馬,競輪',
    },
    {
      id: 8,
      name: 'nakamura',
      date: '2022-01-01',
      memo: 'パスタ作り,韓流ドラマ,野鳥観察,工芸,動物園巡り',
    },
    {
      id: 9,
      name: 'kobayashi',
      date: '2022-01-01',
      memo: 'グルメ,ソムリエ,pixiv,音楽鑑賞,太極拳',
    },
    {
      id: 10,
      name: 'kato',
      date: '2022-01-01',
      memo: 'プログラミング,ラップ,食べ歩き,将棋,K1',
    },
  ],
})

export const getters = {
  getUsers(state) {
    return state.users
  },
}

export const mutations = {
  addUser(state, paylaod) {
    state.users.push(paylaod.user)
  },
  updateUser(state, paylaod) {
    state.users.forEach((user, index) => {
      if (user.id === paylaod.user.id) {
        state.users.splice(index, 1, paylaod.user)
      }
    })
  },
  removeUser(state, paylaod) {
    state.users.forEach((user, index) => {
      if (user.id === paylaod.user.id) {
        state.users.splice(index, 1)
      }
    })
  },
}

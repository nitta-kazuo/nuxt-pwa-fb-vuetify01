import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    // state：共通アクセスが可能なデータ。コンポーネントがどの階層にあろうともstoreからデータが取得できる
    state: () => ({
      counter: 0
    }),
    // getters: データの取り出し。stateの全部または一部を取得できる
    getters: {
      getCounter: state => {
        return state.counter
      }
    },
    // mutations: stateのデータを更新できる唯一のI/F。データフローのデバッグはここを見るだけで良いはず
    mutations: {
      increment(state) {
        if (++state.counter > 100) {
          state.counter = 100
        }
      },
      decrement(state) {
        if (--state.counter < 1) {
          state.counter = 0
        }
      },
      setCounter(state, num) {
        state.counter = num
      }
    },
    // actions: mutationsの前処理。非同期なAPIでデータを取得する場合に使う。結果はmutationへcommitするルール
    actions: {
      countUp({ commit }) {
        console.log('countUp()')
        commit('increment')
      },
      countDown({ commit }) {
        console.log('countDown()')
        commit('decrement')
      }
    }
  })
}

export default createStore

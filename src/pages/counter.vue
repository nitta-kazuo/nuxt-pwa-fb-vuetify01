<template>
  <v-layout>
    <v-flex text-xs-center>
    <h1>{{msg}}</h1>
    <div>
      <p class="count">{{$store.getters.getCounter}}</p>
      <h2>カウントアップ/ダウン</h2>
      <v-btn small color="error" @click="$store.commit('decrement')">－</v-btn>
      <v-btn small color="info" @click="$store.commit('increment')">＋</v-btn>
      <br>
      <v-btn round color="Warning" @click="chkDown">マイナス</v-btn>
      <v-btn round color="success" @click="chkUp">プラス</v-btn>
    </div>
    </v-flex>
  </v-layout>
</template>
 
<script>
export default {
  data() {
    return {
      msg: 'Nuxt vuexのサンプル'
    }
  },
  computed: {
    count() {
      // stateの呼び出しは this.$store.state.[JSファイル名].[プロパティ]
      // [JSファイル名]はindex.jsなら省略可。
      return this.$store.state.getCounter
    }
  },
  methods: {
    chkUp (e) {
      // メソッドの呼び出しはthis.$store.commit('[JSファイル名]/[メソッド名]')
      // 「[JSファイル名]/」はindex.jsなら省略可。
      console.log('chkUp()');
      this.$store.dispatch('countUp')
    },
    chkDown (e) {
      console.log('chkDown()');
      this.$store.dispatch('countDown')
    }
  }
}
</script>
 
<style>
.count {
  font-size: 48px;
}
</style>

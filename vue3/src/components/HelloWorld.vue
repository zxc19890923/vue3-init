<template>
  <div class="hello">
    <h2>
      {{state.loginState}}
    </h2>
    <h1 @click="changeVal">{{ msg }}</h1>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { LOGIN } from '../http/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    // 定义响应式变量
    const state = reactive({
      loginState: 1
    })
    // 使用vuex
    const store = useStore()
    // 生命周期函数
    onMounted (() => {
      state.loginState = store.state.loginState
      LOGIN({username: 'zhangxuchao', password: '123456'}).then(res => {
        console.log(res)
      })
    })
    // 定义方法
    const changeVal = () => {
      store.commit('changeLoginState')
      state.loginState = store.state.loginState
    }
    // 导出，view中使用
    return {
      state,
      changeVal
    }
  }
}
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

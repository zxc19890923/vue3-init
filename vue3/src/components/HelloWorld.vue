<template>
  <div class="hello">
    <el-radio v-model="state.register">选择</el-radio>
    <el-button type="primary" @click="changeVal()">开启更新</el-button>
    <h2>
      <span>张旭超</span>{{state.loginState}}
    </h2>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
// 导入vuex
import { useStore } from 'vuex'
// 导入定义的接口
import { LOGIN } from '../http/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    // 定义响应式变量
    const state = reactive({
      loginState: 1,
      register: false
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
h2 {
  color: blue !important;
  span {
    color: green;
  }
}
</style>

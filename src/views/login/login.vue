<template>
  <div id="login">
    <button @click="handlechange">登录</button>
    <div class="login-cont">
      登录
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    handlechange () {
      this.$cookies.set('token', 123)
      this.$router.push({path: '/home'})
      document.title = '首页'
    }
  }
}
</script>

<style lang="less">
  #login {
    display: block;
    height: 100%;
    background: url("../../../src/assets/timg.jpeg") no-repeat center;
    background-size: 100%;
    .login-cont {
      position: absolute;
      top: 20%;
      left: 10%;
    }
  }
</style>

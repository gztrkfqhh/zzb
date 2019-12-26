<template>
  <div>
    <button @click="handlechange">登录</button>
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

<style scoped>

</style>

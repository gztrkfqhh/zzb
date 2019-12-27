<template>
  <div class="_user">
    <el-button @click="handleLinkClick">
      跳转
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'user',
  methods: {
    handleLinkClick () {
      this.$router.push('/user/user/2')
    }
  }
}
</script>

<style scoped>

</style>

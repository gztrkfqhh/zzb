<template>
  <div>
    userId
    <el-button @click="handleClick">
      click
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'userid',
  methods: {
    handleClick () {
      this.$router.push({name: 'username', params: {name: 'zhangh'}})
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    })
  }
}
</script>

<style scoped>

</style>

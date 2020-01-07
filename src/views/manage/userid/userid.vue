<template>
  <div>
    userId
    <el-button @click="handleClick">
      click222
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'userid',
  methods: {
    handleClick () {
      this.$router.push({name: 'ageid', params: {age: '111111'}})
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

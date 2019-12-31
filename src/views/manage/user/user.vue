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
      this.$router.push({name: 'userid', params: {id: 18}})
    }
  },
  mounted () {
    // const data = this.$mock.mock({
    //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    //   'list|1-10': [{
    //     // 属性 id 是一个自增数，起始值为 1，每次增 1
    //     'id|+1': 3
    //   }]
    // })
  }
}
</script>

<style scoped>

</style>

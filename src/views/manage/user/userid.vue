<template>
  <div>
    userId
  </div>
</template>

<script>
export default {
  name: 'userid',
  beforeRouteEnter (to, from, next) {
    console.log(to)
    next(vm => {
    })
  }
}
</script>

<style scoped>

</style>

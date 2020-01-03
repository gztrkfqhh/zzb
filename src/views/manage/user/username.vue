<template>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'username',
  data () {
    return {
      name: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.name = to.params.name
    })
  }
}
</script>

<style scoped>

</style>

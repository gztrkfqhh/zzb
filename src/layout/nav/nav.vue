<template>
  <div class="_nav fl">
    <navList></navList>
  </div>
</template>

<script>
import navList from '../nav/index'
export default {
  name: 'znav',
  data: () => {
    return {
    }
  },
  components: {
    navList
  }
}
</script>

<style lang="less">
  ._nav {
    position: fixed;
    left: 0;
    top: 39px;
    height: 100%;
  }
</style>

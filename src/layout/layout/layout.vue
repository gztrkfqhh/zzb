<template>
  <div id="zza-view" class="clearfix">
    <znav></znav>
    <zheader></zheader>
    <div class="_cont fl">
      <div class="boxcont" :style="homeStyle ? homeStyle : {marginLeft: '195px'}">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import zheader from '@/layout/header/header'
import zfooter from '@/layout/footer/footer'
import znav from '@/layout/nav/nav'
export default {
  name: 'layout',
  computed: {
    ...mapState({
      homeStyle: state => state.header.homeStyle
    })
  },
  components: {
    zheader,
    zfooter,
    znav
  }
}
</script>

<style lang="less">
 #zza-view {
   position: relative;
   height: 100%;
   ._cont {
     width: 100%;
     height: 100%;
     border-top: 1px solid #ccc;
     margin-top: 40px;
     .boxcont{
       height: 100%;
       border-left: 1px solid rgb(204, 204, 204);
     }
   }
 }
</style>

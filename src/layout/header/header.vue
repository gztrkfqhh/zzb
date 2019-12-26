<template>
  <div class="_header fl">
    <span class="logo fl">logo</span>
    <el-button class="fl outdent" @click="handleclick">
      <i :class="BtnclassName? BtnclassName : 'fa fa-outdent'" aria-hidden="true" ></i>
    </el-button>
  </div>
</template>

<script>
import './header.less'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'zheader',
  methods: {
    ...mapActions([
      'getCollapse'
    ]),
    handleclick () {
      this.getCollapse()
    }
  },
  computed: {
    ...mapState({
      BtnclassName: state => state.header.BtnclassName
    })
  }
}
</script>

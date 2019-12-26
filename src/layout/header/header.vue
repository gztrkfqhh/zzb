<template>
  <div class="_header fl">
    <span class="logo fl">
      <font-icon :IconClass="headIcon"></font-icon>
    </span>
    <el-button class="fl outdent" @click="handleclick">
      <i :class="BtnclassName? BtnclassName : 'fa fa-outdent'" aria-hidden="true" ></i>
    </el-button>
    <el-button class="fr outdent out" @click="handleOutclick">
      退出
    </el-button>
  </div>
</template>

<script>
import './header.less'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'zheader',
  data () {
    return {
      headIcon: 'fa fa-free-code-camp'
    }
  },
  methods: {
    ...mapActions([
      'getCollapse'
    ]),
    handleclick () {
      this.getCollapse()
    },
    handleOutclick () {
      this.$cookies.remove('token')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      BtnclassName: state => state.header.BtnclassName
    })
  }
}
</script>

<template>
  <div class="_header fl">
    <span class="logo fl">
      <font-icon :IconClass="headIcon"></font-icon>
    </span>
    <el-button class="fl outdent" @click="handleclick">
      <i :class="BtnclassName? BtnclassName : 'fa fa-outdent'" aria-hidden="true" ></i>
    </el-button>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="fl">
<!--      <el-breadcrumb-item key="/">-->
<!--        首页-->
<!--      </el-breadcrumb-item>-->
      <el-breadcrumb-item v-for="(item) in levelList" :key="item.path">
        {{item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
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
      headIcon: 'fa fa-free-code-camp',
      levelList: []
    }
  },
  watch: {
    '$route' (to) {
      this.levelList = to.matched.filter(item => {
        return item.meta.title
      })
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
      localStorage.removeItem('_routes')
      this.$router.push('/login')
    },
    getBreadcrumb () {
      // $route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
      let matched = this.$route.matched.filter(item => {
        if (item.name !== '') {
          return item.meta.title
        }
      })
      this.levelList = matched
    }
  },
  created () {
    this.getBreadcrumb()
  },
  computed: {
    ...mapState({
      BtnclassName: state => state.header.BtnclassName
    })
  }
}
</script>

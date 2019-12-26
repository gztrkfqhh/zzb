<template>
  <div class="_navindex">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo iscolclass"
      @select="handleSlect"
      :collapse="isCollapse"
      router
    >
      <template v-for="(item, index) in menuLists">
        <template v-if="item.meta">
          <el-submenu :key="index" :index="item.path">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.meta.name}}</span>
            </template>
            <el-menu-item v-for="(child, i) in item.children" :key="i" :index="child.path">
              {{child.name}}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="index" :index="item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import './index.less'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      navList: [],
      navData: []
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.header.isCollapse,
      menuLists: state => state.route.getroutes
    })
  },
  watch: {
    '$route' (to) {
      document.title = to.name
    },
    navList (val) {
      this.navData = val
    }
  },
  methods: {
    ...mapActions([
      'getRoutes'
    ]),
    handleSlect (key, keys) {
      console.log(key)
      console.log(keys)
    }
  },
  mounted () {
    this.getRoutes()
    this.navList = this.menuLists
  }
}
</script>

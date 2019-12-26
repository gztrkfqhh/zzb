<template>
  <div class="_navindex" :class="elMenuRightClass ? elMenuRightClass : 'elmenuright'">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo iscolclass"
      :class="elMenuLeftClass ?  elMenuLeftClass: 'elmenuleft'"
      :collapse="isCollapse"
      router
    >
      <template v-for="(item, index) in menuLists">
        <template v-if="item.meta">
          <el-submenu :key="index" :index="item.path">
            <template slot="title">
              <font-icon :IconClass="item.meta.icon"></font-icon>
              <span>{{item.meta.name}}</span>
            </template>
            <el-menu-item v-for="(child, i) in item.children" :key="i" :index="child.path">
              {{child.name}}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="index" :index="item.path">
            <font-icon :IconClass="item.icon"></font-icon>
            <span slot="title">{{item.name}} </span>
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
      elMenuLeftClass: state => state.header.elMenuLeftClass,
      elMenuRightClass: state => state.header.elMenuRightClass,
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
    ])
  },
  mounted () {
    this.getRoutes()
    this.navList = this.menuLists
  }
}
</script>

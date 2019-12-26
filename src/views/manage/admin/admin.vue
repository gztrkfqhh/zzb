<template>
  <div class="_admin">
    <div class="btns">
      <el-button @click="handleSetAdmin">设置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      adminData: ''
    }
  },
  methods: {
    handleSetAdmin () {
      const AdminData = this.adminData
      let getAdminData = function () {
        return new Promise(function (resolve, reject) {
          const url = AdminData.url
          const Data = AdminData.data
          if (url !== '') {
            if (Data.code === 200) {
              resolve(Data.data)
            } else {
              reject(Error('error'))
            }
          }
        })
      }
      getAdminData().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.adminData = {
      url: '192.168.60.165',
      data: {
        code: 2,
        data: [
          {
            name: 'zh',
            phone: '188'
          },
          {
            name: 'zzz',
            phone: '176'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
  ._admin{
  }
</style>

<template>
  <div>
    <div class="inptest">
      <ul class="uls">
        <li>
          <label :style="{top: userNum}">UserName：</label>
          <i class="useri" :style="{width: userWidth}"></i>
          <input @click="handleclick" type="text">
        </li>
        <li>
          <label>PassWord：</label>
          <i class="passi"></i>
          <input type="text">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      userNum: 0,
      userWidth: 0
    }
  },
  methods: {
    handleclick () {
      let n = 0
      let m = 0
      let userTimer = setInterval(() => {
        n -= 10
        m += 100
        this.userNum = n + 'px'
        this.userWidth = m + '%'
        if (this.userNum === '-10px') {
          clearInterval(userTimer)
        }
      }, 100)
    }
  }
}
</script>

<style lang="less">
.inptest {
  padding: 40px;
  font-family: 'Open Sans';
  .uls {
    width: 200px;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
    >li {
      margin: 10px 0;
      position: relative;
      >input {
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        width: 100%;
      }
      >label {
        position: absolute;
        left: 0;
      }
      >.useri {
        position: absolute;
        bottom: 0;
        left: auto;
        height: 1px;
        background: red;
      }
    }
  }
}
</style>

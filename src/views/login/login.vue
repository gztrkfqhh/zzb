<template>
  <div id="login">
    <div id="bgd">
      <canvas
        id='myCanvas'
        :width='width'
        :height='height'
      >
      </canvas>
    </div>
    <div class="loginI18nbox">
      <el-select class="loginI18n" @change="handleLogiI18nClick" v-model="i18NVal" placeholder="请选择">
        <el-option
          v-for="(item, index) in ['ZH', 'EN']"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
    <div id="loginBox">
      <h4>Zhang H</h4>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item
          label=""
          prop="userName"
          style="margin-top:40px;"
        >
          <el-row>
            <el-col :span='2'>
              <font-icon :IconClass="'fa-user-o'"></font-icon>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                :placeholder='$t("UserName")'
                v-model="loginForm.userName"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item
          label=""
          prop="passWord"
        >
          <el-row>
            <el-col :span='2'>
              <font-icon :IconClass="'fa-key'"></font-icon>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                :placeholder='$t("PassWord")'
                v-model="loginForm.passWord"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="margin-top:55px;">
          <el-button
            type="primary"
            round
            class="submitBtn"
            @click="submitForm('loginForm')"
          >
            {{$t('Login')}}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      i18NVal: this.$cookies.get('loginI18n') ? this.$cookies.get('loginI18n') : 'ZH',
      canvas: null,
      context: null,
      stars: [], // 星星数组
      shadowColorList: [
        '#39f',
        '#ec5707',
        '#b031d4',
        '#22e6c7',
        '#92d819',
        '#14d7f1',
        '#e23c66'
      ], // 阴影颜色列表
      directionList: ['leftTop', 'leftBottom', 'rightTop', 'rightBottom'], // 星星运行方向
      speed: 50, // 星星运行速度
      last_star_created_time: new Date(), // 上次重绘星星时间
      Ball: class Ball {
        constructor (radius) {
          this.x = 0
          this.y = 0
          this.radius = radius
          this.color = ''
          this.shadowColor = ''
          this.direction = ''
        }

        draw (context) {
          let MyGradient = context.createLinearGradient(0, 0, 0, 8)
          context.save()
          context.translate(this.x, this.y)
          context.lineWidth = this.lineWidth
          MyGradient.addColorStop(0, this.color)
          MyGradient.addColorStop(1, this.shadowColor)
          context.fillStyle = MyGradient
          context.beginPath()
          context.arc(0, 0, this.radius, 0, Math.PI * 2, true)
          context.closePath()

          context.shadowColor = this.shadowColor
          context.shadowOffsetX = 0
          context.shadowOffsetY = 0
          context.shadowBlur = 10

          context.fill()
          context.restore()
        }
      }, // 工厂模式定义Ball类
      width: window.innerWidth,
      height: window.innerHeight,
      loginForm: {
        userName: 'zzz',
        passWord: ''
      },
      loginRules: {
        userName: [
          { required: true, message: this.$t('InputUserName'), trigger: 'blur' }
        ],
        passWord: [{ required: true, message: this.$t('InputPassWord'), trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapActions([
      'LoginI18n'
    ]),
    // 提交登录
    submitForm (loginRules) {
      this.$cookies.set('username', this.loginForm.userName)
      this.$refs[loginRules].validate((valid) => {
        if (valid) {
          this.$toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: '登录中'
          })
          let second = 4
          const timer = setInterval(() => {
            second--
            if (second) {
              if (second === 1) {
                this.$toast.success('登录成功')
                this.$router.push({name: 'home'})
              }
            } else {
              clearInterval(timer)
              // 手动清除 Toast
              this.$toast.clear()
            }
          }, 1000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 重复动画
    drawFrame () {
      requestAnimationFrame(this.drawFrame)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.createStar(false)
      this.stars.forEach(this.moveStar)
    },
    // 展示所有的星星
    createStar (params) {
      let now = new Date()
      if (params) {
        // 初始化星星
        for (let i = 0; i < 50; i++) {
          const radius = Math.random() * 3 + 2
          let star = new this.Ball(radius)
          star.x = Math.random() * this.canvas.width + 1
          star.y = Math.random() * this.canvas.height + 1
          star.color = '#ffffff'
          star.shadowColor = this.shadowColorList[Math.floor(Math.random() * this.shadowColorList.length)]
          star.direction = this.directionList[Math.floor(Math.random() * this.directionList.length)]
          this.stars.push(star)
        }
      } else if (!params && now - this.last_star_created_time > 3000) {
        // 每隔3秒重绘修改颜色其中30个球阴影颜色
        for (let i = 0; i < 30; i++) {
          this.stars[i].shadowColor = this.shadowColorList[Math.floor(Math.random() * this.shadowColorList.length)]
        }
        this.last_star_created_time = now
      }
    },
    // 移动
    moveStar (star, index) {
      if (star.y - this.canvas.height > 0) {
        // 触底
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = 'leftTop'
        } else {
          star.direction = 'rightTop'
        }
      } else if (star.y < 2) {
        // 触顶
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = 'rightBottom'
        } else {
          star.direction = 'leftBottom'
        }
      } else if (star.x < 2) {
        // 左边
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = 'rightTop'
        } else {
          star.direction = 'rightBottom'
        }
      } else if (star.x - this.canvas.width > 0) {
        // 右边
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = 'leftBottom'
        } else {
          star.direction = 'leftTop'
        }
      }
      if (star.direction === 'leftTop') {
        star.y -= star.radius / this.speed
        star.x -= star.radius / this.speed
      } else if (star.direction === 'rightBottom') {
        star.y += star.radius / this.speed
        star.x += star.radius / this.speed
      } else if (star.direction === 'leftBottom') {
        star.y += star.radius / this.speed
        star.x -= star.radius / this.speed
      } else if (star.direction === 'rightTop') {
        star.y -= star.radius / this.speed
        star.x += star.radius / this.speed
      }
      star.draw(this.context)
    },
    handleLogiI18nClick (val) {
      this.$i18.locale = val
      this.$cookies.set('loginI18n', val)
      location.reload()
    }
  },
  mounted () {
    this.canvas = document.getElementById('myCanvas')
    this.context = this.canvas.getContext('2d')

    this.createStar(true)
    this.drawFrame()
  }
}
</script>

<style lang='less'>
  #login {
    width: 100vw;
    padding: 0;
    margin: 0;
    height: 100vh;
    font-size: 16px;
    color: #fff;
    font-family: "Source Sans Pro";
    background-size: 100%;
    background: url('../../assets/img/aaa.png') no-repeat #242645;
    background-position: center;
    .loginI18nbox{
      width: 40px;
      cursor: pointer;
      position: absolute;
      right: 40px;
      top: 0;
      overflow: hidden;
      .loginI18n {
        width: 70px;
        input {
          border-radius: 0;
          background: none;
          border: none;
          color: #fff;
        }
      }
    }
    #bgd {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
    #loginBox {
      width: 240px;
      height: 280px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding: 50px 40px 40px 40px;
      box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
      opacity: 1;
      background: linear-gradient(
        230deg,
        rgba(53, 57, 74, 0) 0%,
        rgb(0, 0, 0) 100%
      );
      /deep/ .inps input {
        border: none;
        color: #fff;
        background-color: transparent;
        font-size: 12px;
      }
      .submitBtn {
        background-color: transparent;
        color: #39f;
        width: 200px;
      }
      .iconfont {
        color: #fff;
      }
    }
  }
</style>

<template>
    <div id="login">
        <div class="login" style="visibility: hidden;"></div>
        <div class="login">
            <input type="text" v-model="phoneNum" placeholder="手机号">
            <input type="text" v-model="idCode" placeholder="验证码">
            <input type="button" value="登录" @click="signIn">
            <div @click="sendIDCode">{{text}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      text: '发送验证码',
      default_scondes: 30,
      timer: null,
      phoneNum: '',
      idCode: '',
    };
  },
  computed: {
    isClickAble: function() {
      return this.REGEXP.phoneRegExp.test(this.phoneNum);
    },
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  },
  methods: {
    // TODO: 定时器多次点击变快
    sendIDCode() {
      if (this.isClickAble) {
        this.timer = setInterval(() => {
          if (this.default_scondes === 0) {
            this.text = '发送验证码';
            this.default_scondes = 30; // 重置定时器
            clearInterval(this.timer);
          } else {
            this.countDown();
          }
        }, 1000);
      } else {
        this.$Message.warning({
          content: '请填写正确的手机号码',
          duration: 3,
        });
      }
    },
    countDown() {
      this.default_scondes--;
      this.text = `已发送(${this.default_scondes}s)`;
    },
    signIn() {
      sessionStorage.setItem('username', this.phoneNum);
      let temp_url = decodeURIComponent(this.$router.currentRoute.fullPath); // /login?redirect=/checkout
      let url = '';
      if (temp_url.indexOf('?') !== -1) { // 到支付页面 // 登录成功后，跳转刚刚购买的页面
        url = temp_url.split('=')[1];
      } else { // 直接登录
        url = 'home';
      }
      this.$router.push({
        path: url
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$input_padding_up_down: 3em;
$input_padding_left_right: 1em;
#login {
    background: url('../assets/swim.jpg') no-repeat;
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .login {
        width: 400px;
        background: rgb(145, 168, 182);
        opacity: 0.8;
        padding: $input_padding_up_down $input_padding_left_right $input_padding_up_down $input_padding_left_right;
        border-radius: 4px;
        position: relative;
        input {
            display: block;
            width: 100%;
            height: 34px; // 16 + 8 * 2 + 1 * 2
            font-size: 16px;
            padding: 8px 0 8px 8px;
            background: #fff;
            border: 1px solid lightblue;
            border-radius: 4px;
            outline: none;
            &:nth-child(2) {
                margin-top: 1em;
            }
            &:nth-child(3) {
                margin-top: 2em;
                padding: 0;
                background: $g_default_color;
                border: none;
                color: #fff;
                cursor: pointer;
            }
            &::-webkit-input-placeholder {
                color: #000;
            }
        }
        div {
            position: absolute;
            top: $input_padding_up_down;
            right: $input_padding_left_right;
            color: grey;
            padding: 8px;
            &:hover {
                cursor: default;
            }
        }
    }
}
</style>

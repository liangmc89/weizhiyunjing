<template>
  <div class="login-page">
    <div class="login-box">
      <h5 class="login-title">微云智景大数据运行分析系统</h5>
      <div class="login-form row">
        <div class="form-title col-12">登录账号</div>
        <div class="col-12 q-my-md q-my-xs-xs">
          <q-input dark placeholder='账号' outlined v-model.trim="$v.userName.$model" :error='$v.userName.$error' error-message='请输入账户' clearable>
            <template v-slot:prepend>
              <q-icon name='img:statics/icons/login_icon.png' class="q-mr-lg" size='1rem'></q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-12 ">
          <q-input dark placeholder='密码' outlined v-model.trim='$v.passWord.$model' :error='$v.passWord.$error' error-message='请输入密码' clearable>
            <template v-slot:prepend>
              <q-icon name='img:statics/icons/pass_icon.png' class="q-mr-lg" size='1rem'></q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-12 q-my-md q-my-xs-xs text-right">
          <q-btn label='忘记密码？' flat type='a' dense />
        </div>
        <div class="col-12 q-my-md q-my-xs-xs">
          <q-btn label='登录' class="btn-login" size='lg' @click="login"></q-btn>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      passWord: '',
    }
  },
  validations: {
    userName: {
      required,
    },
    passWord: {
      required
    }
  },
  methods: {
    login () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$router.push({ path: '/platform' })
      }
    }
  }
}

</script>
<style lang="scss">
.login-page {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url(../statics/images/index_bg.jpg) no-repeat 50% 50% / cover;
  .login-title {
    text-align: center;
    color: rgb(156, 184, 240);
    font-size: 34px;
    font-weight: 700;
    margin: 2rem auto;
    letter-spacing: 2px;
  }
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    max-width: 30vw;
    transform: translate3d(-50%, -50%, 0);

    .login-form {
      padding: 2rem 4rem;
      background-color: rgba(13, 23, 71, 0.8);
      .form-title {
        font-size: 1rem;
        margin: 1rem 0;
      }
      .btn-login {
        width: 100%;
        background: rgb(65, 109, 232);
      }
    }
  }
}
.mobile {
  .login-box {
    left: 0;
    transform: translate3d(0%, -50%, 0);
    width: calc(100vw - 2rem);
    max-width: initial;
    margin: 0 1rem;
    .login-form {
      padding: 1rem 1.5rem;
    }
    .login-title {
      font-size: 24px;
    }
  }
}
</style>

<template>
    <div class="main">
        <a-form
                id="formLogin"
                class="user-layout-login"
                ref="formLogin"
                :form="form"
                @submit="handleSubmit">
            <h2>账号密码登录</h2>
            <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误" />
            <a-form-item>
                <a-input size="large" type="text" v-model="form.username" placeholder="请输入账号:"></a-input>
            </a-form-item>
            <a-form-item>
                <a-input size="large" type="text" v-model="form.password" placeholder="请输入密码:"></a-input>
            </a-form-item>
            <a-form-item style="margin-top:24px">
                <a-button size="large" type="primary" htmlType="submit" class="login-button">确定</a-button>
            </a-form-item>
        </a-form>

    </div>
</template>

<script>

  export default {
    data () {
      return {
        isLoginError: false,
        form: {
          username: '',
          password: ''
        },
      }
    },
    methods: {
      handleSubmit () {
        alert('登录成功!')
      }
    }
  }
</script>

<style >

    .login-button {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
    }

</style>

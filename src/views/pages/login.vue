<template>
    <div class="bg">
        <div class="main">
            <h1>RCP-OP权限管理系统</h1>
            <a-form
                    id="formLogin"
                    class="user-layout-login"
                    ref="formLogin"
                    labelAlign="left"
                    :form="form"
                    @submit="handleSubmit">
                <a-form-item>
                    <h2 style="text-align: center">用户名密码登录</h2>
                </a-form-item>
                <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="用户名或密码错误" />
                <a-form-item label="用户名">
                    <a-input size="large" type="text" v-model="form.username" placeholder="请输入用户名:"></a-input>
                </a-form-item>
                <a-form-item label="密码">
                    <a-input size="large" type="text" v-model="form.password" placeholder="请输入密码:"></a-input>
                </a-form-item>
                <a-form-item style="padding-top:24px;padding-left: 50px">
                    <a-button size="large" type="primary" htmlType="submit" class="login-button">确定</a-button>
                </a-form-item>
            </a-form>
        </div>
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

    .bg {
        background-size: cover;
        background-image: url(~@/assets/img/bg_login.jpg);
    }

    .main {
        padding-top: 10%;
        padding-left: 40%;
        background-color: white;
    }

    .login-button {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
    }

</style>

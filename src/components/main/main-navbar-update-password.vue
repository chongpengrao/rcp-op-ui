<template>
    <a-modal v-model:visible="visible" title="修改密码" >
        <a-form ref="dataForm">
            <a-form-item label="用户名">
                <a-input readonly>{{ $store.state().User.state.name }}</a-input>
            </a-form-item>
            <a-form-item label="原密码">
                <a-input v-model="dataForm.password" type="password" autocomplete="off"></a-input>
            </a-form-item>
            <a-form-item label="新密码">
                <a-input v-model="dataForm.newPassword" type="password" autocomplete="off"></a-input>
            </a-form-item>
            <a-form-item label="确认密码">
                <a-input v-model="dataForm.confirmPassword" type="password" autocomplete="off"></a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" html-type="submit" @click="dataFormSubmitHandle">确定</a-button>
                <a-button style="margin-left: 10px" @click="visible = false">取消</a-button>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  data() {
    return {
      visible : false,
      dataForm: {
        password: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    init () {
      this.visible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].resetFields()
      })
    },
    // debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
    dataFormSubmitHandle: debounce(function () {
      this.dataForm.validateFields((err, values) => {
        // 验证表单没错误
        if (!err) {
          console.log('form values', values)
          //TODO
        }
      })
    },1000,{ 'leading': true, 'trailing': false })
  }
}
</script>
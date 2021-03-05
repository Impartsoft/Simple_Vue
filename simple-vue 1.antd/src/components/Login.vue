<template>
    <div class="login-container">
        <a-form
        layout="horizontal"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
    >
        <a-form-item>
        <a-input v-model:value="formState.user" placeholder="Username">
            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
        </a-form-item>
        <a-form-item>
        <a-input v-model:value="formState.password" type="password" placeholder="Password">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
        </a-form-item>
        <a-form-item>
        <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.user === '' || formState.password === ''"
        >
            Log in
        </a-button>
        </a-form-item>
        </a-form>
    </div>
</template>
<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Login',

  setup() {
    const formState = reactive({
      user: '',
      password: '',
    });

    const handleFinish = values => {
      console.log(values, formState);
    };

    const handleFinishFailed = errors => {
      console.log(errors);
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },

  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>

<style>
.login-container{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:auto;
    height: 600px;
    width: 500px;
}
</style>
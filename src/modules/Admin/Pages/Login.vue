<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Username">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {

    }
  }
}
</script>

<style lang="scss">
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

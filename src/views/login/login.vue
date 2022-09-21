<template>
  <div class="login">
    <img src="http://vue.mengxuegu.com/img/login.b665435f.jpg" alt="" />
    <span class="form">
      <el-form :model="form" ref="form" label-width="60px">
        <el-form-item
          label="账号"
          prop="account"
          :rules="[
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 7, message: '请输入3~7位字符', trigger: 'blur' },
          ]"
        >
          <el-input
            type="text"
            v-model.number="form.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ]"
        >
          <el-input
            type="password"
            v-model.number="form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </span>
  </div>
</template>

<script>
import { PostLogin } from "../../api/login";
import { userInfo } from "../../api/user";
export default {
  //数据
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  //创建前
  created() {},
  //方法
  methods: {
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        this.login();
      });
    },
    async login() {
      try {
        // 调用登录接口
        const response = await PostLogin(this.form);
        // 将token存储到vuex
        this.$store.dispatch("DisSetToken", response.token);
        // 调用用户信息接口
        const userinfo = await userInfo();
        // 将用户信息存储到vuex
        this.$store.dispatch("DisSetUserInfo", userinfo);
        // 跳转到首页
        this.$router.push("/");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  //子组件注册
  components: {},
  //计算
  computed: {},
  //监听
  watch: {},
};
</script>

<style lang='scss'>
.login {
  > img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .form {
    width: 500px;
    height: 300px;
    display: block;
    background-color: rgba(255, 255, 255, 0.699);
    position: absolute;
    top: 50%;
    margin-top: -150px;
    left: 50%;
    margin-left: -250px;
    box-sizing: border-box;
    padding: 30px;
  }
}
</style>

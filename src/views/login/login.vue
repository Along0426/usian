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

    // 登录方法
    async login() {
      // 调用vuex中的登录
      const token = await this.$store.dispatch("DisSetToken", this.form);
      // 没有token信息的话停止
      if (!token) return;
      // 调用vuex中的用户信息
      const userInfo = await this.$store.dispatch("DisSetUserInfo");
      // 如果没有用户信息的话停止
      if (!userInfo) return;
      // 消息弹框
      this.$message.success(`欢迎您，${userInfo.name}`);
      // 跳转至首页
      this.$router.push("/");
    },

    /*
    async login() {
      try {
        // 调用登录接口
        const response = await PostLogin(this.form);
        // 将token存储到vuex
        this.$store.dispatch("DisSetToken", response.token);
        // 调用用户信息接口
        const userinfo = await userInfo();
        console.log(userinfo);
        // 将用户信息存储到vuex
        this.$store.dispatch("DisSetUserInfo", userinfo);
        // 跳转到首页
        this.$router.push("/");
        // 消息提示
        this.$message.success(`欢迎您，${userinfo.name}`);
      } catch (e) {
        console.log(e.message);
      }
    },
    */
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

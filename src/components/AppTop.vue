<template>
  <div class="apptop">
    <img src="http://www.usian.cn/jyimg/logo1.052111ed.png" alt="" />
    <font>积云后台管理系统</font>
    <el-dropdown @command="userEvent">
      <span>
        {{ $store.getters.userinfo.name || "" }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="changePass">
          修改密码
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold" command="logout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  //数据
  data() {
    return {
      name: "",
    };
  },
  //创建前
  created() {},
  //方法
  methods: {
    // 用户下拉菜单点击事件
    userEvent(command) {
      // 判断
      switch (command) {
        // 如果返回信息为 changePass
        case "changePass":
          // 调用修改密码方法
          this.changePass();
          break;
        // 如果是 logout
        case "logout":
          // 调用退出登录方法
          this.logout();
          break;

        default:
          break;
      }
    },
    // 修改密码
    changePass() {
      this.$message("该功能正在开发中");
    },
    // 退出登录
    async logout() {
      try {
        // 调用vuex 中的退出登录
        const response = await this.$store.dispatch("ClearTokenAndUserinfo");
        // 定时器
        setTimeout(() => {
          // 跳转至登录页面
          this.$router.push("/login");
        }, 300);
        // 消息弹框
        this.$message.success("退出成功");
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
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.apptop {
  width: 100%;
  height: 50px;
  background-color: #2d3a4b;
  box-sizing: border-box;
  padding: 0 30px;
  > img {
    width: 20px;
    height: 20px;
    margin: 15px;
  }
  > font {
    height: 50px;
    color: #fff;
    line-height: 50px;
    display: inline-block;
    overflow: hidden;
  }
  .el-dropdown {
    float: right;
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
}
</style>

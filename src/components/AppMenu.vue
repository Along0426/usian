<template>
  <div class="appmenu">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/member">
        <i class="el-icon-user-solid"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-s-goods"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/staff">
        <i class="el-icon-user"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  //数据
  data() {
    return {};
  },
  //创建前
  created() {
    console.log(this.$route.path);
  },
  //方法
  methods: {},
  //子组件注册
  components: {},
  //计算
  computed: {},
  //监听
  watch: {},
};
</script>

<style lang='scss'>
.appmenu {
  width: 230px;
  height: calc(100% - 50px);
  float: left;
  background-color: #545c64;
  float: left;
}
</style>

<template>
  <div class="AppContent">
    <crumbs></crumbs>
    <router-view></router-view>
  </div>
</template>

<script>
import crumbs from "./crumbs.vue";
export default {
  //数据
  data() {
    return {};
  },
  //创建前
  created() {},
  //方法
  methods: {},
  //子组件注册
  components: {
    crumbs,
  },
  //计算
  computed: {},
  //监听
  watch: {},
};
</script>

<style lang='scss'>
.AppContent {
  width: calc(100% - 230px);
  height: calc(100% - 50px);
  box-sizing: border-box;
  padding: 10px;
  float: left;
}
</style>

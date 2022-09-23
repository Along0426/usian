<template>
  <div class="crumbs" v-if="username != '首页'">
    <p>{{ username }}</p>
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
    console.log(this.$route);
  },
  //方法
  methods: {},
  //子组件注册
  components: {},
  //计算
  computed: {
    username() {
      return this.$route.meta?.title;
    },
  },
  //监听
  watch: {},
};
</script>

<style lang='scss'>
.crumbs {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  padding: 20px;
  p {
    border-left: 3px solid #00f;
    box-sizing: border-box;
    padding-left: 10px;
  }
}
</style>

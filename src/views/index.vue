<template>
  <div class="index">
    <app-top></app-top>
    <app-menu></app-menu>
    <app-content></app-content>
  </div>
</template>

<script>
import AppTop from "../components/AppTop.vue";
import AppMenu from "../components/AppMenu.vue";
import AppContent from "../components/AppContent.vue";
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
    AppTop,
    AppMenu,
    AppContent,
  },
  //计算
  computed: {},
  //监听
  watch: {
    $route: {
      handler() {
        let info = localStorage.getItem("userinfo");
        if (info == null) {
          this.$store.dispatch("DisSetUserInfo");
        }
      },
    },
  },
};
</script>

<style lang='scss'>
.index {
  height: 100%;
}
</style>

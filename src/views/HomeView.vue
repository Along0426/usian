<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import request from "../utils/request";
import textApi from "../api/text";
export default {
  name: "HomeView",
  data() {
    return {
      page: 1,
      size: 20,
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    textApi
      .Getlist(this.page, this.size)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  },
};
</script>

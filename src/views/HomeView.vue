<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  created() {
    axios({ url: "http://localhost:3000/", method: "GET" })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  },
};
</script>

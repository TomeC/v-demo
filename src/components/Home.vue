<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="getConfig">用户</el-button>
  </div>
</template>

<script>
import { getLoginConfig } from "@/api/loginApi";
import axios from "axios";

export default {
  data() {
    return {
      msg: "to App",
    };
  },
  methods: {
    getConfig() {
      this.$axios({
        methods: "get",
        url: "/api/user",
        data: {},
      })
        .then((res) => {})
        .catch((err) => {});
        
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

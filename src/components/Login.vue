<template>
  <div>
    <h1>login</h1>
    <el-input v-model="userName" placeholder="账号">
      <template slot="prepend">账号：</template>
    </el-input>
    <el-input v-model="password" placeholder="密码">
      <template slot="prepend">密码：</template>
    </el-input>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.userName, this.password);
      this.$axios({
        method: "post",
        url: "/api/login",
        data: this.$qs.stringify({
          userName: this.userName,
          password: this.password,
        }),
      })
        .then((res) => {
          console.log(res);
          if (res.data.code == 0) {
            var data = res.data.data;
            this.$store.commit("changeToken", data.token);
            this.$router.push("/home");
            this.$message({
              message: "登录成功",
              type: "success",
            });
          } else {
            this.$message.error("登录失败");
          }
        })
        .catch((e) => {
          console.log(e.message);
          this.$message.error("登录失败");
        });
    },
  },
};
</script>

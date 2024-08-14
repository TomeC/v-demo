<template>
  <div>
    <div class="page-top">
      <div class="page-content">
        <h2>计划任务列表</h2>
      </div>
    </div>
    <div class="main">
      <h3 class="big-title">添加任务：</h3>
      <el-input
        v-model="todo"
        placeholder="输入任务项"
        @click="addTodo"
      ></el-input>
      <ul class="task-count" v-show="true">
        <li>{{ noCheckLength }}个任务未完成</li>
        <li class="action">
          <a href="#">全部任务</a>
          <a href="#">未完成任务</a>
          <a href="#">已完成任务</a>
        </li>
      </ul>
      <h3 class="big-title">任务列表:</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noCheckLength: "0",
    };
  },
  methods: {},
};
</script>
<style scoped>
.page-top {
  width: 100%;
  height: 40px;
  background-color: rgb(114, 177, 156);
}
.page-content {
  width: 50%;
  margin: 0px auto;
}
.page-content h2 {
  line-height: 40px;
  font-size: 18px;
  color: #fff;
}
.main {
  width: 50%;
  margin: 0px auto;
  box-sizing: border-box;
}
.big-title {
  color: #222;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  color: #000;
  text-decoration: none;
}
.task-count {
  display: flex;
  margin: 10px 0;
}
.task-count li {
  padding-left: 10px;
  flex: 1;
  color: #ddab39;
}
</style>
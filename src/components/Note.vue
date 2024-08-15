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
          <a href="#" class="active">全部任务</a>
          <a href="#">未完成任务</a>
          <a href="#">已完成任务</a>
        </li>
      </ul>
      <h3 class="big-title">任务列表:</h3>
      <div class="tasks">
        <span class="no-task-tip" v-show="true">还没添加任务</span>
        <ul class="todo-list">
          <li class="todo" :class="{ completed: true, editing: true }">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>lable</label>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </div>
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
.task-count li:nth-child(1) {
  padding: 5px 0 0 10px;
}
.action {
  text-align: center;
  display: flex;
}
.action a {
  margin: 0px 10px;
  flex: 1;
  padding: 5px 0;
  color: brown;
}
.action a:nth-child(3) {
  margin-right: 0px;
}
.active {
  border: 1px solid rgba(175, 47, 47, 0.2);
}
.tasks {
  background: aliceblue;
}
.no-task-tip {
  padding: 10px 0 10px 0;
  display: block;
  border-bottom: 1px solid rgb(217, 50, 20);
  color: gold;
}
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.todo-list li {
  position: relative;
  font-size: 16px;
  border-bottom: 1px solid #ddab39;
}
.todo-list li:hover {
  background-color: aqua;
}
.todo-list li.editing {
  /*todo*/
  border-bottom: none;
  padding: 0;
}
.todo-list .edit {
  display: block;
  width: 500px;
  padding: 13px 17px 12px 17px;
  margin: 0 0 0 13px;
}
.todo-list .view {
  display: block;
}
.todo-list li .toggle {
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 5px;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
}
.toggle {
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 5px;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
}
</style>
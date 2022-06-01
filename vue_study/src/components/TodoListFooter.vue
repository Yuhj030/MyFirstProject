<!--
 * @Descripttion: 
 * @version: 
 * @Author: yuhj
 * @Date: 2022-05-26 15:21:03
-->
<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <input type="checkbox" v-model="isAllChecked" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListFooter',
  props: ['todos'],
  computed: {
    doneTotal() {
      // let doneArr = this.todos.filter((todoObj) => todoObj.done == true);
      // return doneArr.length;

      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    isAllChecked: {
      get() {
        return this.doneTotal == this.todos.length;
      },
      set(value) {
        // this.checkedAllTodos(value);
        this.$$emit('checkedAllTodos', value);
      },
    },
  },
  methods: {
    // 通知App组件清除所有已完成任务
    clearDone() {
      // this.clearAllDone();
      this.$emit('clearAllDone');
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

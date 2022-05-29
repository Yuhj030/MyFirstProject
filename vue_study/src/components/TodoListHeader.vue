<!--
 * @Descripttion: 
 * @version: 
 * @Author: yuhj
 * @Date: 2022-05-26 15:19:18
-->
<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  name: 'TodoListHeader',
  props: ['addTodoObj'],
  methods: {
    add(e) {
      // 判断输入框为空值，取消添加
      if (!e.target.value) return;
      // 创建新的todo对象
      const todoObj = {
        id: nanoid(),
        title: e.target.value,
        done: false,
      };
      // 给父组件传递数据
      this.addTodoObj(todoObj);
      // 重置输入框内容
      e.target.value = '';
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

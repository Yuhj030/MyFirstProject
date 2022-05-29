<!--
 * @Descripttion: 
 * @version: 
 * @Author: yuhj
 * @Date: 2022-05-26 15:19:56
-->
<template>
  <ul class="todo-main">
    <todo-list-item
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todoObj="todoObj"
      :handleCheck="handleCheck"
      :deleteTodoObj="deleteTodoObj"
    />
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  name: 'TodoListMain',
  props: ['todos', 'handleCheck', 'deleteTodoObj'],
  components: { TodoListItem },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

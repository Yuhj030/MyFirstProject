<!--
 * @Descripttion: 
 * @version: 
 * @Author: yuhj
 * @Date: 2022-05-26 15:19:56
-->
<template>
  <ul class="todo-main">
    <transition-group appear>
      <todo-list-item
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todoObj="todoObj"
      />
    </transition-group>
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  name: 'TodoListMain',
  props: ['todos'],
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
@keyframes comeAndGo {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}

.v-enter-active {
  animation: comeAndGo 0.5s;
}
.v-leave-active {
  animation: comeAndGo 0.5s reverse;
}
</style>

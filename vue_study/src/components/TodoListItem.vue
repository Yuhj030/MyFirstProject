<!--
 * @Descripttion: 
 * @version: 
 * @Author: yuhj
 * @Date: 2022-05-26 15:20:35
-->
<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @change="checkTodoObj(todoObj.id)"
      />
      <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todoObj'],
  methods: {
    // 通知App组件改变对应的todoObj勾选状态
    checkTodoObj(id) {
      // this.handleCheck(id);
      this.$bus.$emit('handleCheck', id);
    },
    // 通知App组件删除对应的todoObj
    handleDelete(id) {
      // this.deleteTodoObj(id);
      this.$bus.$emit('deleteTodoObj', id);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover .btn {
  display: block;
}
</style>

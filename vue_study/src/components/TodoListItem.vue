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
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input
        type="text"
        :value="todoObj.title"
        v-show="todoObj.isEdit"
        @blur="handleBlur(todoObj, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">
      删除
    </button>
    <button
      v-show="!todoObj.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todoObj)"
    >
      编辑
    </button>
    <!-- <button class="btn btn-danger" @click="handleTest">测试</button> -->
  </li>
</template>

<script>
import pubsub from 'pubsub-js';
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
      // this.$bus.$emit('deleteTodoObj', id);
      pubsub.publish('deleteTodoObj', id);
    },
    // 进入编辑模式，隐藏标题和编辑按钮，显示输入框
    handleEdit(todoObj) {
      // 判断该todoObj是否有isEdit属性，有的话直接修改，没有的话追加一个
      if (Object.hasOwnProperty.call(todoObj, 'isEdit')) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, 'isEdit', true);
      }
      // 等Vue把模板解析完后让输入框获取焦点
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 输入框失去焦点,退出编辑模式，并提交更改
    handleBlur(todoObj, e) {
      if (!e.target.value.trim()) {
        todoObj.isEdit = false;
        return alert('输入不能为空!');
      }
      this.$bus.$emit('updateTodoObj', todoObj, e.target.value);
      todoObj.isEdit = false;
    },
    handleTest() {
      pubsub.publish('demo', 666);
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
input[type='text'] {
  margin-left: 5px;
}
</style>

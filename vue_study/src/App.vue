<!--
 * @Descripttion: 
 * @version: 
 * @Author: yuhj
 * @Date: 2022-05-26 13:48:56
-->
<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-list-header @addTodoObj="addTodoObj" />
        <todo-list-main :todos="todos" />
        <todo-list-footer
          :todos="todos"
          @checkedAllTodos="checkedAllTodos"
          @clearAllDone="clearAllDone"
        />
      </div>
    </div>
    <!-- 动画测试组件 -->
    <!-- <animation-test /> -->
  </div>
</template>

<script>
import TodoListHeader from './components/TodoListHeader.vue';
import TodoListMain from './components/TodoListMain.vue';
import TodoListFooter from './components/TodoListFooter.vue';
import AnimationTest from './components/AnimationTest.vue';
import pubsub from 'pubsub-js';

export default {
  name: 'App',
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    };
  },
  components: {
    TodoListHeader,
    TodoListMain,
    TodoListFooter,
    AnimationTest,
  },
  methods: {
    // 添加一个todoObj
    addTodoObj(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 改变todoObj的勾选状态
    handleCheck(id) {
      // 找到操作的todoObj，改变其勾选状态
      this.todos.forEach((todoObj) => {
        if (todoObj.id == id) {
          todoObj.done = !todoObj.done;
        }
      });
    },
    // 删除一个todoObj
    deleteTodoObj(_, id) {
      if (confirm('确定删除吗？')) {
        // 过滤掉要删除的元素，重新赋值
        this.todos = this.todos.filter((todoObj) => todoObj.id != id);
      }
    },
    // 全选or取消全选
    checkedAllTodos(done) {
      // 拿到TodoListFooter组件的全选or取消全选的boolean值给所有todoObj的done赋值
      this.todos.forEach((todoObj) => {
        todoObj.done = done;
      });
    },
    // 清除已完成任务
    clearAllDone() {
      if (confirm('是否删除所有已完成的选项')) {
        this.todos = this.todos.filter((todoObj) => {
          return !todoObj.done;
        });
      }
      // filter返回的结果是符合条件的内容，也就是默认为true，所以取反找到false的元素
    },
    // 更新todoObj的标题
    updateTodoObj(todoObj, newTitle) {
      this.todos.forEach((todo) => {
        if (todoObj.id == todo.id) {
          todo.title = newTitle;
          return;
        }
      });
    },
    demo(mesName, data) {
      console.log('订阅的消息名称:', mesName, '数据:', data);
    },
  },
  mounted() {
    this.$bus.$on('handleCheck', this.handleCheck);
    this.$bus.$on('updateTodoObj', this.updateTodoObj);
    // this.$bus.$on('deleteTodoObj', this.deleteTodoObj);
    this.subId = pubsub.subscribe('deleteTodoObj', this.deleteTodoObj);
  },
  beforeDestroy() {
    this.$bus.$off(['handleCheck', 'updateTodoObj']);
    // this.$bus.$off('deleteTodoObj');
    pubsub.unsubscribe(this.subId);
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  margin-left: 5px;
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid skyblue;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

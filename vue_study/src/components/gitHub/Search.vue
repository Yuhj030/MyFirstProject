<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yuhj
 * @Date: 2022-08-16 10:05:50
-->
<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
          @keyup.enter="getUserInfos"
        />&nbsp;
        <button @click="getUserInfos">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  // 组件名称
  name: 'Search',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      keyWord: '',
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    getUserInfos() {
      this.$bus.$emit('getUserList', {
        isFirst: false,
        isLoading: true,
        errMsg: '',
        userList: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (res) => {
          console.log('请求成功', res.data);
          this.$bus.$emit('getUserList', {
            isLoading: false,
            errMsg: '',
            userList: res.data.items,
          });
        },
        (err) => {
          console.log('请求失败', err.message);
          this.$bus.$emit('getUserList', {
            isLoading: false,
            errMsg: err.message,
            userList: [],
          });
        }
      );
    },
  },
};
</script>

<style scoped></style>

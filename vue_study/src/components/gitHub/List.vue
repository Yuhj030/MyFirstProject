<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yuhj
 * @Date: 2022-08-16 10:06:05
-->
<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      v-show="info.userList.length"
      class="card"
      v-for="item in info.userList"
      :key="item.login"
    >
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
    <!-- 空数据展示 -->
    <h2 v-show="!info.isFirst && !info.userList.length && !info.isLoading">
      暂无数据！
    </h2>
    <!-- 展示欢迎词 -->
    <h2 v-show="info.isFirst">Welcome to use!</h2>
    <!-- 展示加载 -->
    <h2 v-show="info.isLoading">Loading!</h2>
    <!-- 展示错误信息 -->
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'List',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: '',
        userList: [],
      },
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  mounted() {
    this.$bus.$on('getUserList', (infoObj) => {
      this.info = { ...this.info, ...infoObj };
    });
  },
  beforeDestroy() {
    this.$bus.$off('getUserList');
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yuhj
 * @Date: 2022-08-15 08:16:19
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h2 v-show="isShow">Animation test</h2>
    </transition>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: '',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      isShow: true,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
};
</script>

<style scoped>
@keyframes comeAndGo {
  from {
    transform: translateX(-100%);
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

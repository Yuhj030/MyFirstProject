<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yuhj
 * @Date: 2022-08-16 08:34:40
-->
<template>
  <div>
    <button @click="getStusInfo">获取学生信息</button> <br />
    <button @click="getCarsInfo">获取车辆信息</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  // 组件名称
  name: '',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    getStusInfo() {
      axios.get('http://localhost:8080/students').then(
        (res) => {
          console.log('请求成功', res.data);
        },
        (err) => {
          console.log('请求失败', err.message);
        }
      );
    },
    getCarsInfo() {
      axios.get('http://localhost:8080/demo/cars').then(
        (res) => {
          console.log('请求成功', res.data);
        },
        (err) => {
          console.log('请求失败', err.message);
        }
      );
    },
  },
};
</script>

<style scoped></style>

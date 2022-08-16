<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yuhj
 * @Date: 2022-08-16 10:06:05
-->
<template>
  <div class="row">
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F9150e4e5gy1g3or00xh6sj20k00k0mxk.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663208679&t=fedb8f52790c970102f81b007378a3ba"
          style="width: 100px"
        />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F9150e4e5gy1g3or00xh6sj20k00k0mxk.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663208679&t=fedb8f52790c970102f81b007378a3ba"
          style="width: 100px"
        />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F9150e4e5gy1g3or00xh6sj20k00k0mxk.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663208679&t=fedb8f52790c970102f81b007378a3ba"
          style="width: 100px"
        />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F9150e4e5gy1g3or00xh6sj20k00k0mxk.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663208679&t=fedb8f52790c970102f81b007378a3ba"
          style="width: 100px"
        />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F9150e4e5gy1g3or00xh6sj20k00k0mxk.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663208679&t=fedb8f52790c970102f81b007378a3ba"
          style="width: 100px"
        />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
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
    return {};
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

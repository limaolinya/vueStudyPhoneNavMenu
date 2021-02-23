<template>
  <div class="item1">
    <router-link to="/item11">我是首页</router-link>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
    <p>我是首页</p>
  </div>
</template>

<script>
export default {
  name: "item1"
}
</script>

<style scoped>

/*去掉router-link下面的横线*/
a {
  text-decoration: none;
}

.item1 {
  position: absolute;
  top: 5%;
  z-index: 10;
  height: 87vh;
  width: 100%;
  overflow: scroll;
}
</style>
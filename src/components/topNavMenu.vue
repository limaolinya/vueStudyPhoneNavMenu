<template>
  <div class="topNavMenu">
    <div class="icon">
      <i class="el-icon-arrow-left" v-if="isShow" @click="goBack()"></i>
    </div>
    <div class="title">
      <span v-for="(item,index) in title" :key="index" v-show="index === index1">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNavMenu",
  props: ["title","index1"],
  data () {
    return {
      isShow: false
    }
  },
  //通过监听路由，判断是否在首页面，若没在，则把返回按钮给显示出来
  watch: {
    $route(now) {
      if(now.path === "/item1"|| now.path === "/item2" || now.path === "/item3") {
        this.isShow = false;
      }else {
        this.isShow = true;
      }
    }
  },
  methods: {
    //返回到上一个页面
    goBack() {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>

<style scoped>

.topNavMenu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5vh;
  background-color: lightblue;
  z-index: 99;
  display: flex;
  justify-content: left;
  align-items: center;
}

.topNavMenu .icon {
  margin: 0 41% 0 10px;
}

.topNavMenu .title {
  margin-right: 40%;
}

</style>
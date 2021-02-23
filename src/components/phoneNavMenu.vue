<template>
  <div>
    <top-nav-menu :title="titles" :index1="indexs"></top-nav-menu>
    <item1 v-if="indexs <=0"></item1>
    <router-view class="view" v-if="indexs >=1"></router-view>
    <div class="tabBar">
      <router-link to="/item1">
<!--        路由似乎会让click失效-->
        <div class="item" :class="{ isShow: array[0] }" @click="photo(0)">
          <div class="el-icon-s-home icon"></div>
          <div class="font">{{ titles[0] }}</div>
        </div>
      </router-link>
      <router-link to="/item2">
        <!--        路由似乎会让click失效-->
        <div class="item" :class="{ isShow: array[1]}" @click="photo(1)">
          <div class="el-icon-s-shop icon"></div>
          <div class="font">{{ titles[1] }}</div>
        </div>
      </router-link>
      <router-link to="/item3">
        <!--        路由似乎会让click失效-->
        <div class="item" :class="{ isShow: array[2]}" @click="photo(2)">
          <div class="el-icon-user-solid icon"></div>
          <div class="font">{{ titles[2] }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Item1 from "@/components/item1";
export default {
  name: "phoneNavMenu",
  components: {Item1},
  data() {
    return {
      array: [true, false, false],
      titles: ["首页", "商店", "我的"],
      indexs: 0
    };
  },
  methods: {
    photo(index) {
      //让array中的所有变为false
      this.array = this.array.map(function () {
        return false;
      });
      //再把被点击的这个为true，变色
      this.array[index] = true;
      this.indexs = index;
      // console.log(this.indexs);
    }
  }
};
</script>

<style scoped>
/*去掉router-link下面的横线*/
a {
  text-decoration: none;
}

.tabBar {
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: lightblue;
  border-top: 1px solid rgba(0,0,0,0.5);
  z-index: 99;
}

.tabBar .isShow {
  color: #1e90ff;
}

.tabBar .item .icon {
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.tabBar .item .font {
  font-size: 0.8rem;
}
</style>

<template>
  <div id="app">
    <el-container direction="horizontal" class="container">
      <el-aside class="aside">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goToPage1">跳转到page1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <div class="context">
        <el-header>

        </el-header>

        <el-main class="context-main">
          <router-view></router-view>
        </el-main>

        <el-footer>
          
        </el-footer>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage1() {
      this.$router.push('/page1')
    }
  },
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.context {
  flex: 1
}
.context-main {
  height: calc(100% - 120px);
}
.aside {
  height: 100%;
  /* background: #409EFF; */
}
</style>

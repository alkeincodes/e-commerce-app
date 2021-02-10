<template>
  <div class="admin-sidebar">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu
      :default-active="activeRoute"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Navigator One</span>
        </template>
        <el-menu-item-group>
          <span slot="title">Group One</span>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">item four</span>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item index="/admin" @click="$router.push({ name: 'Admin' })">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/admin/products" @click="$router.push({ name: 'AdminProducts' })">
        <i class="el-icon-s-goods"></i>
        <span slot="title">Products</span>
      </el-menu-item>
      <el-menu-item index="/admin/orders" @click="$router.push({ name: 'AdminOrders' })">
        <i class="el-icon-goods"></i>
        <span slot="title">Orders</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AdminSidebar',
  data () {
    return {
      isCollapse: false,
      activeRoute: null
    }
  },
  watch: {
    $route: {
      handler (val) {
        console.log('route: ', val)
        this.activeRoute = val.path
        console.log('activeRoute: ', this.activeRoute)
      },
      immediate: true
    }
  }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
  }
</style>

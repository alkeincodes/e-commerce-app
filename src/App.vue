<template>
  <div id="app">
    <div :class="`${user ? user.utype : 'user'}-container`">
      <admin-header v-if="authenticated && user.utype === 'admin'" />
      <admin-sidebar v-if="authenticated && user.utype === 'admin'" />
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/modules/Admin/common/Header'
import AdminSidebar from '@/modules/Admin/common/Sidebar'

export default {
  name: 'App',
  components: {
    AdminHeader,
    AdminSidebar
  },
  computed: {
    user () {
      return this.$store.getters['auth/user']
    },
    authenticated () {
      return this.$store.getters['auth/authenticated']
    }
  }
}
</script>

<style lang="scss">
  @import '@/sass/app.scss';
</style>

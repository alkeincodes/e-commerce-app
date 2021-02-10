<template>
  <header class="admin-header">
    <div class="admin-header__left">
      <h2>E-Commerce</h2>
    </div>
    <div class="admin-header__right">
      <h5>{{ user.name }}</h5>
      <el-button type="danger" size="mini" @click="logout">Logout</el-button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AdminHeader',
  computed: {
    user () {
      return this.$store.getters['auth/user']
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
    }
  }
}
</script>

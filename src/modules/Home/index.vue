<template>
  <div>
    <h1>Home Page</h1>
    <h4>Name: {{ user.name }}</h4>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
    }
  }
}
</script>

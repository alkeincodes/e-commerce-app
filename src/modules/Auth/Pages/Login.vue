<template>
  <div>
    <input type="text" placeholder="email" v-model="email"> <br>
    <input type="password" placeholder="password" v-model="password"> <br>
    <button @click="login">Sign in</button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters['auth/isLoggedIn']
    }
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login', { email: this.email, password: this.password })
    }
  }
}
</script>

<template>
  <div class="app-header">
    <div class="app-header__left">
      <img src="@/assets/logo.png">
      <strong>V I Y Line</strong>
    </div>
    <div class="app-header__right">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="#">Blog</router-link>
        <router-link to="#">Contact</router-link>
        <template v-if="!$store.getters['auth/authenticated']">
          <router-link to="/login">Login</router-link>
        </template>
        <template v-else>
          <router-link to="/logout">Logout</router-link>
        </template>
        <div class="cart-items">
          <icon-cart />
          <div class="cart-items__counter" v-if="cartItems.length">{{ cartItems.length }}</div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    cartItems () {
      return this.$store.getters['auth/cartItems']
    }
  }
}
</script>

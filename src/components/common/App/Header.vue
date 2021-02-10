<template>
  <div class="app-header">
    <div class="app-header__left">
      <img src="@/assets/logo.png">
      <strong>V I Y Line</strong>
    </div>
    <div class="app-header__right">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="#">Shop</router-link>
        <router-link to="#">Blog</router-link>
        <router-link to="#">Contact</router-link>
        <router-link to="/login">Login</router-link>
        <div class="cart-items">
          <icon-cart />
          <div class="cart-items__counter">4</div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

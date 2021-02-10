<template>
  <div class="app-container">
    <app-header />
    <div class="card hero-banner">
      <div class="hero-banner__left">
        <div class="banner-description">
          <h1>Best Selling Tints</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <h2>P110.00</h2>
        </div>
        <button class="btn-buy">BUY NOW</button>
      </div>
      <div class="hero-banner__right">
        <img src="@/assets/hero.png" alt="">
      </div>
    </div>
    <h2 class="page-title">All Products</h2>
    <div class="product-list">
      <product-card v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/App/Header'
import ProductCard from '@/components/common/ProductCard'

export default {
  name: 'Login',
  components: {
    AppHeader,
    ProductCard
  }
}
</script>

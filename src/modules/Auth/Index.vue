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
        <button class="site-btn btn-buy">BUY NOW</button>
      </div>
      <div class="hero-banner__right">
        <img src="@/assets/hero.png" alt="">
      </div>
    </div>
    <h2 class="page-title">All Products</h2>
    <div class="product-list">
      <product-card
        v-for="item in allProducts"
        :key="item.id"
        :data="item"
      />
    </div>
    <cart-items-drawer />
  </div>
</template>

<script>
import AppHeader from '@/components/common/App/Header'
import ProductCard from '@/components/common/ProductCard'
import CartItemsDrawer from '@/modules/Auth/components/CartItemsDrawer'

export default {
  name: 'Login',
  components: {
    AppHeader,
    ProductCard,
    CartItemsDrawer
  },
  data () {
    return {
      allProducts: []
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.axios.get('/api/products').then(({ data }) => {
        this.allProducts = data
      })
    }
  }
  // beforeRouteLeave (to, from, next) {
  //   console.log('before leave')
  //   localStorage.removeItem('cartItems')

  //   setTimeout(() => {

  //     next()
  //   }, 200)
  // }
}
</script>

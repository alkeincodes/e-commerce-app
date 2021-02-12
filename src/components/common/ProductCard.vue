<template>
  <div>
    <div class="product-card" @click="showProduct = !showProduct">
      <div class="product-card__img" :style="`background-image: url('${axios.defaults.baseURL}/product_images/${data.image}')`"></div>
      <div class="product-card__details">
        <h5 class="product-title">{{ data.name }}</h5>
        <div class="product-prices">
          <span class="price">{{ finalPrice(data.price, data.off_sale) }}</span>
          <span class="off" v-if="data.off_sale">P{{ data.price.toFixed(2) }}</span>
        </div>
        <div class="product-footer">
          <el-rate
            v-model="rate"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} reviews">
          </el-rate>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="showProduct">
      <div class="product-show">
        <div class="product-show__left">
          <img :src="`${axios.defaults.baseURL}/product_images/${data.image}`" :alt="data.name">
        </div>
        <div class="product-show__right">
          <div class="order-details">
            <h2>{{ data.name }}</h2>
            <p>{{ data.description }}</p>
          </div>

          <div class="order-actions">
            <span class="price">{{ finalPrice(data.price, data.off_sale) }}</span>
            <span class="off" v-if="data.off_sale">P{{ data.price.toFixed(2) }}</span>
            <div class="cta">
              <button class="site-btn buy-now">BUY NOW</button>
              <button class="site-btn add-cart" @click="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { finalPrice } from '@/utils/helpers'

export default {
  name: 'ProductCard',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      rate: 5,
      showProduct: false
    }
  },
  methods: {
    finalPrice,
    addToCart () {
      this.$store.commit('auth/SET_CART', this.data)
      this.showProduct = false
    }
  }
}
</script>

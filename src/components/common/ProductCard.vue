<template>
  <div class="product-card">
    <div class="product-card__img" style="background-image: url('/img/hero.5b7a3b6e.png')"></div>
    <div class="product-card__details">
      <h5 class="product-title">VIY Line™ x Team Payaman Water Based Tints V2 - VIY</h5>
      <span class="product-price">P110.00</span>
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
</template>

<script>
export default {
  name: 'ProductCard',
  data () {
    return {
      rate: 5
    }
  }
}
</script>

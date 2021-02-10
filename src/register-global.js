import Vue from 'vue'

// Import all icons

const iconsContext = require.context('./components/icons/', true, /\.(js|vue)$/i)
iconsContext.keys().map(key => {
  const name = key.match(/\w+/)[0].match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
  return Vue.component(name, iconsContext(key).default)
})

import axios from '@/api/axios'
import router from '@/router'

const namespaced = true

const state = {
  authenticated: false,
  user: null
}

const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  },
  SET_AUTHENTICATED (state, value) {
    state.authenticated = value
  }
}

const actions = {
  login ({ state, dispatch }, params) {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/login', {
        email: params.email,
        password: params.password
      }).then(async () => {
        await dispatch('authenticate')

        console.log('user type: ', state.user.utype)

        if (state.user.utype === 'admin') {
          console.log('to admin')
          router.push('/admin')
        } else {
          console.log('to user')
          router.push('/home')
        }
      })
    })
  },
  logout ({ dispatch }) {
    axios.post('/logout').then(async () => {
      await dispatch('authenticate')
      router.push('/')
    })
  },
  async authenticate ({ commit }) {
    return axios.get('/api/user').then(({ data }) => {
      commit('SET_AUTHENTICATED', true)
      commit('SET_USER', data)
    }).catch((err) => {
      console.log(err.response.data)
      commit('SET_AUTHENTICATED', false)
      commit('SET_USER', null)
    })
  }
}

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  authenticated: (state) => state.authenticated,
  user: (state) => state.user
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}

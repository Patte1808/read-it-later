import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newLink: {title: '', url: '', notes: ''},
    links: []
  },
  mutations: {
    UPDATE_LINK_TITLE (state, title) {
      state.newLink.title = title
    },
    UPDATE_LINK_URL (state, url) {
      state.newLink.url = url
    },
    UPDATE_LINK_NOTES (state, notes) {
      state.newLink.notes = notes
    },
    SAVE_LINK (state) {
      state.links.push(state.newLink)
      state.newLink = {title: '', url: '', notes: ''}
    }
  },
  actions: {
    updateLinkTitle ({commit}, title) {
      commit('UPDATE_LINK_TITLE', title)
    },
    updateLinkUrl ({commit}, url) {
      commit('UPDATE_LINK_URL', url)
    },
    updateLinkNotes ({commit}, notes) {
      commit('UPDATE_LINK_NOTES', notes)
    },
    saveLink ({commit}) {
      commit('SAVE_LINK')
    }
  },
  getters: {
    newLink: state => state.newLink,
    links: state => state.links
  }
})

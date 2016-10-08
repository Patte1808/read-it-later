import Vue from 'vue'
import Vuex from 'vuex'
import linkService from './services/linkService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newLink: {id: null, title: '', url: '', notes: ''},
    links: []
  },
  mutations: {
    FETCH_LINKS (state, links) {
      state.links = links
    },
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
      if (state.newLink.id === null) {
        state.newLink.id = state.links.length - 1
        state.links.push(state.newLink)
      }

      linkService.postLink(state.newLink)
      state.newLink = {id: null, title: '', url: '', notes: ''}
    },
    DELETE_LINK (state, id) {
      console.log(id)
      state.links = state.links.filter((obj) => {
        return parseInt(obj.id) !== parseInt(id)
      })
    },
    EDIT_LINK (state, id) {
      state.newLink = state.links[id]
    }
  },
  actions: {
    fetchLinks ({commit}) {
      return linkService.fetchAll()
        .then((response) => commit('FETCH_LINKS', response))
        .catch((error) => commit('FETCH_LINKS', error))
    },
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
    },
    deleteLink ({commit}, id) {
      return linkService.deleteLink(id)
              .then((response) => commit('DELETE_LINK', response.id))
              .catch((error) => commit('DELETE_LINK', error))
    },
    editLink ({commit}, id) {
      commit('EDIT_LINK', id)
    }
  },
  getters: {
    newLink: state => state.newLink,
    links: state => state.links
  }
})

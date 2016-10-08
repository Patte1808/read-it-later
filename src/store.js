import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newLink: {id: null, title: '', url: '', notes: ''},
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
      if (state.newLink.id === null) {
        state.newLink.id = state.links.length - 1
        state.links.push(state.newLink)
      } else {
        state.links[state.newLink.id] = state.newLink
      }

      state.newLink = {id: null, title: '', url: '', notes: ''}
    },
    DELETE_LINK (state, id) {
      state.links.splice(id, 1)
    },
    EDIT_LINK (state, id) {
      state.newLink = state.links[id]
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
    },
    deleteLink ({commit}, id) {
      commit('DELETE_LINK', id)
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

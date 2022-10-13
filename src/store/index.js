import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      { id: 1, Nickname: "Aleksandr" },
      { id: 22, Nickname: "Igor" },
      { id: 33, Nickname: "Maryiana" },
      { id: 41, Nickname: "Nika" },
      { id: 523, Nickname: "Veronika" },
    ],
  },
  mutations: {
    DELETE_USER(state, id) {
      state.users = state.users.filter((item) => item.id !== id);
    },
  },
  actions: {
    delHandler({ commit }, id) {
      commit("DELETE_USER", id);
    },
  },
});

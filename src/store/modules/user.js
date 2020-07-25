export const SET_USERS = "SET_USERS";

const state = {
  users: [],
};

const mutations = {
  [SET_USERS](state, payload) {
    state.users = payload;
  },
};

const actions = {};

const getters = {
  users: (state) => state.users,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

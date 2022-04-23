import Packages from '@/api/packages';

const getDefaultState = () => ({
  packages: [],
  total: null,
});

export default {
  namespaced: true,

  state: () => (getDefaultState()),
  getters: {
    packagesData: (state) => state.packages.map((item) => item.package),
  },
  actions: {
    async fetchPackagesSearchList({ commit }, data) {
      let packages;
      try {
        packages = await Packages.apiPackagesSearchList(data);
        commit('setPackagesSearchList', packages.data.results);
        commit('setPackagesSearchTotal', packages.data.total);
      } catch (e) {
        console.log(e);
      }
    },
    resetPackagesState({ commit }) {
      commit('resetPackagesState');
    },
  },
  mutations: {
    setPackagesSearchList(state, value = []) {
      state.packages = value;
    },
    setPackagesSearchTotal(state, value = null) {
      state.total = value;
    },
    resetPackagesState(state) {
      Object.assign(state, getDefaultState());
    },
  },
};

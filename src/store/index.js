import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        my_name: "Amagboro Terry Oghenerukewe",
        nickname: `.rukkie(<span>codes</span>)`,
        routs: [
            { name: ".rukkie()", to: "/" },
            { name: ".work()", to: "/work" },
            { name: ".about()", to: "/about" },
            { name: ".contact()", to: "/contact" },
        ],
        current_path: "",
    },
    getters: {
        routs: (state) => state.routs,
    },
    mutations: {
        active_route: state => {
            state.current_path = window.location.pathname;
            return state
        }
    },
    actions: {},
    modules: {},
});
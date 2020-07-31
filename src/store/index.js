import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// Ensures that the Vuex state is saved between page reloads and refreshes
const vuexLocal = new VuexPersistence ({
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        loading: false, // Used by the UI to determine whether we should run the CSS Loader
        sending: false,
        error: null, // Used to store information about errors that occur.
        user: [],
        reconnect: false,
        activeroom: null,
        rooms: [],
        users: [],
        messages: [],
        userTyping: null
    },
    mutations,
    actions,
    getters: {
        hasError: state => !!state.error
    },
    plugins: [vuexLocal.plugin],
    strict: debug
});
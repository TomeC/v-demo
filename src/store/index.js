import vuex from 'vuex';
import Vue from 'vue';
Vue.use(vuex);

export default new vuex.Store({
    state: {
        Authorization: sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : ''
    },
    mutations: {
        changeToken(state, token) {
            state.Authorization = token;
            sessionStorage.setItem('Authorization', token);
        }
    },
    getters: {
        getToken(state) {
            return state.Authorization
        }
    },
    actions: {

    }
})

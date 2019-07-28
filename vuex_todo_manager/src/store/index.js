import VueX from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

//Load VueX
Vue.use(VueX);

//Create store

export default new VueX.Store({
    modules: {
        todos
    }
})
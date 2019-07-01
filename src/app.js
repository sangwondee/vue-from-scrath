import Vue from 'vue';
// import Accordion from './components/Accordion.vue';
// import List from './components/List.vue';

window.axios = require('axios')

new Vue({
    el: '#app',

    components: {
        // Accordion,
        // List,
    },

    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data)
            .catch(error => this.posts = [
                { title: 'Title not Found.' }
            ]);
    },

    data : {
        posts: null,
        // items : [
        //     { id:1, title: 'Title 1', description: 'Description for tab 1.' },
        //     { id:2, title: 'Title 2', description: 'Description for tab 2.' },
        //     { id:3, title: 'Title 3', description: 'Description for tab 3.' },
        // ]
    }
});
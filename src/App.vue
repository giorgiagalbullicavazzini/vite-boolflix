<script>
import axios from 'axios';
import { store } from './store';

export default {
    data() {
        return {
            store
        }
    },
    created() {
        axios.get(store.config.movie_api, {
            params: {
                api_key: store.config.api_key,
                query: store.config.query
            }
        })
        .then((response) => {
            console.log(response.data);
        })
    }
}
</script>

<template>
</template>
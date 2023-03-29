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
        axios.get(store.config.movieApi, {
            params: {
                api_key: store.config.apiKey,
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
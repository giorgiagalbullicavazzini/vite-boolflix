<script>
import axios from 'axios';
import { store } from './store';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        searchMovie() {
            axios.get(store.config.movieApi, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.query
                }
            })
            .then((response) => {
                store.foundMovies = response.data.results;
                console.log(store.foundMovies);
            })
        }
    }
}
</script>

<template>
    <div class="container m-5">
        <form @submit.prevent="searchMovie">
            <input v-model="store.query" type="search" name="search-movie" id="search-movie">
            <button>Search</button>
        </form>
    </div>

    <div class="container m-5">
        <ul v-for="foundMovie in store.foundMovies">
            <li><span>Titolo:</span> {{ foundMovie.title }}</li>
            <li><span>Titolo Originale:</span> {{ foundMovie.original_title }}</li>
            <li><span>Lingua Originale:</span> {{ foundMovie.original_language }}</li>
            <li><span>Voto:</span> {{ foundMovie.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: 700;
}
</style>
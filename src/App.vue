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
            axios.get(this.store.config.movieApi, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchText
                }
            })
                .then((response) => {
                    this.store.foundMovies = response.data.results;
                })
        },
        getFlag(item) {
            if (item.original_language === 'xx') {
                return '../src/assets/images/xx.png';
            } else {
                return `../node_modules/language-icons/icons/${item.original_language}.svg`;
            }
        }
    }
}
</script>

<template>
    <div class="container m-5">
        <form @submit.prevent="searchMovie">
            <input v-model="this.store.searchText" type="search" name="search-movie" id="search-movie">
            <button>Search</button>
        </form>
    </div>

    <div class="container m-5">
        <ul v-for="foundMovie in this.store.foundMovies">
            <li><span>Titolo:</span> {{ foundMovie.title }}</li>
            <li><span>Titolo Originale:</span> {{ foundMovie.original_title }}</li>
            <li><span>Lingua Originale:</span> <img :src="getFlag(foundMovie)" :alt="foundMovie.original_language"
                    onerror="this.onerror=null;this.src='../src/assets/images/question.png';" /> </li>
            <li><span>Voto:</span> {{ foundMovie.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: 700;
}
</style>
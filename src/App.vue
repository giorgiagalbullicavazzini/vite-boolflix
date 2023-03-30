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
        search() {
            axios.get(this.store.config.movieApi, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchText
                }
            })
                .then((response) => {
                    this.store.foundMovies = response.data.results;
                });

            axios.get(this.store.config.tvApi, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchText
                }
            })
                .then((response) => {
                    this.store.foundSeries = response.data.results;
                });
        },
        getFlag(item) {
            if (item.original_language === 'xx') {
                return '../src/assets/images/xx.png';
            } else {
                return `../node_modules/language-icons/icons/${item.original_language}.svg`;
            }
        },
        getVote(vote) {
            const starValue = this.store.config.maxVote / this.store.config.maxStarNumber;
            const finalVote = Math.ceil(vote / starValue);
            return finalVote;
        }
    }
}
</script>

<template>
    <div class="container m-5">
        <form @submit.prevent="search">
            <input v-model="this.store.searchText" type="search" name="search-movie" id="search-movie">
            <button>Search</button>
        </form>
    </div>

    <div class="container m-5">
        <ul v-for="foundMovie in this.store.foundMovies">
            <li>
                <div>
                    <img :src="`${this.store.config.imgDb}${foundMovie.poster_path}`" :alt="foundMovie.original_title"
                        onerror="this.onerror=null;this.src='../src/assets/images/question.png';" />
                </div>
            </li>
            <li><span>Titolo:</span> {{ foundMovie.title }}</li>
            <li><span>Titolo Originale:</span> {{ foundMovie.original_title }}</li>
            <li><span>Lingua Originale:</span> <img :src="getFlag(foundMovie)" :alt="foundMovie.original_language"
                    onerror="this.onerror=null;this.src='../src/assets/images/question.png';" /> </li>
            <li><span>Voto:</span> {{ getVote(foundMovie.vote_average) }}</li>
            <li></li>

            <!-- <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                <li><font-awesome-icon icon="fa-regular fa-star" /></li> -->
        </ul>
    </div>

    <div class="container m-5">
        <ul v-for="foundTv in this.store.foundSeries">
            <li>
                <div>
                    <img :src="`${this.store.config.imgDb}${foundTv.poster_path}`" :alt="foundTv.original_title"
                        onerror="this.onerror=null;this.src='../src/assets/images/question.png';" />
                </div>
            </li>
            <li><span>Titolo:</span> {{ foundTv.name }}</li>
            <li><span>Titolo Originale:</span> {{ foundTv.original_name }}</li>
            <li><span>Lingua Originale:</span> <img :src="getFlag(foundTv)" :alt="foundTv.original_language"
                    onerror="this.onerror=null;this.src='../src/assets/images/question.png';" /> </li>
            <li><span>Voto:</span> {{ getVote(foundTv.vote_average) }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: 700;
}
</style>
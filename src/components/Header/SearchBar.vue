<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    data() {
        return {
            name: 'SearchBar',
            store
        }
    },
    methods: {
        apiCall(api) {
            return axios.get(this.store.config.apiDb + api, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchText
                }
            })
        },
        search() {
            this.apiCall(this.store.config.researchOptions.movieApi)
                .then((response) => {
                    this.store.foundMovies = response.data.results;
                    console.log(this.store.foundMovies);
                });

            this.apiCall(this.store.config.researchOptions.tvApi)
                .then((response) => {
                    this.store.foundSeries = response.data.results;
                    console.log(this.store.foundSeries);
                });

            this.store.searchText = '';
        }
    }
}
</script>

<template>
    <form @submit.prevent="search">
        <div class="searchbar input-group">
            <label for="searchbar" class="input-group-text">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </label>
            <input v-model="this.store.searchText" type="search" id="searchbar" class="form-control"
                placeholder="Cerca un film o una serie TV">
        </div>
    </form>
</template>

<style lang="scss" scoped>
form {
    width: 30%;
}
</style>
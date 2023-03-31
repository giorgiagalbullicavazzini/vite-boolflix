<script>
import Card from './Card.vue';
import { store } from '../../store';

export default {
    components: {
        Card
    },
    data() {
        return {
            name: 'CardContainer',
            store
        }
    }
}
</script>

<template>
    <div class="container rounded py-3">
        <h2 class="ms-4">Titolo</h2>
        <div class="cards d-flex">
            <Card class="mx-3" v-for="foundMovie in this.store.foundMovies"
                :poster="`${this.store.config.imgDb}${foundMovie.poster_path}`"
                :title="foundMovie.title"
                :original-title="foundMovie.original_title"
                :original-language="foundMovie.original_language"
                :vote="foundMovie.vote_average" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

.container {
    background-color: variables.$card-container;

    h2 {
        color: variables.$title;
    }

    .cards {
        overflow-x: auto;
        overflow-y: hidden;
    }
}
</style>
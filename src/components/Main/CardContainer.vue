<script>
// Import all components
import Card from './Card.vue';
import { store } from '../../store';

export default {
    name: 'CardContainer',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    computed: {
        // Generate a single array with the search results
        getResults() {
            const searchResults = [...store.foundMovies, ...store.foundSeries];
            // Results get sorted by popularity
            return searchResults.sort((a, b) => b.popularity - a.popularity);
        }
    },
    methods: {
        horizontalScroll(event) {
            event.currentTarget.scrollLeft += event.deltaY;
        }
    }
}
</script>

<template>
    <div class="resultsContainer rounded m-auto py-3">
        <h2 class="ms-4 fw-semibold">Titolo</h2>

        <!-- Card Container -->
        <div class="cards d-flex" @wheel.preventDefault="horizontalScroll($event)">
            <Card class="mx-3" v-for="foundResult in getResults"
                :poster="this.store.config.imgDb"
                :result="foundResult" />
        </div>
        <!-- // Card Container -->
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

.resultsContainer {
    background-color: variables.$card-container;
    width: 90%;

    h2 {
        color: variables.$text;
    }

    .cards {
        overflow: hidden;
    }
}
</style>
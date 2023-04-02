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
            return searchResults;
        }
    }
}
</script>

<template>
    <div class="container rounded py-3">
        <h2 class="ms-4">Titolo</h2>

        <!-- Card Container -->
        <div class="cards d-flex">
            <Card class="mx-3" v-for="foundResult in getResults"
                :poster="this.store.config.imgDb"
                :result="foundResult" />
        </div>
        <!-- // Card Container -->
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
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
    },
    methods: {
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container rounded py-3 px-4">
        <h2>Titolo</h2>
        <div class="cards d-flex justify-content-between overflow-x-auto">
            <Card v-for="foundMovie in this.store.foundMovies"
                :poster="getImagePath(`${this.store.config.imgDb}${foundMovie.poster_path}`)"
                :title="foundMovie.title" />
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
}
</style>
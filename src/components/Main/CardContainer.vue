<script>
import Card from './Card.vue';

export default {
    components: {
        Card
    },
    data() {
        return {
            name: 'CardContainer'
        }
    }
}
</script>

<template>
    <div class="container rounded py-3 px-4">
        <h2>Titolo</h2>
        <Card />
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
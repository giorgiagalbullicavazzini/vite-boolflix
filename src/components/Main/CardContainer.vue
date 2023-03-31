<script>
export default {
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
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

.container {
    background-color: variables.$card-container;
    height: 45%;

    h2 {
        color: variables.$title;
    }
}
</style>
<script>
import CardContainer from './CardContainer.vue';

export default {
    components: {
        CardContainer
    },
    data() {
        return {
            name: 'AppMain'
        }
    }
}
</script>

<template>
    <main class="d-flex flex-column justify-content-evenly py-5">
        <CardContainer />
        <CardContainer />
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

main {
    background-color: variables.$main;
    height: calc(100vh - variables.$header-height);
}
</style>
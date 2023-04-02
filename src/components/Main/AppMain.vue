<script>
// Import all components
import CardContainer from './CardContainer.vue';

export default {
    name: 'AppMain',
    components: {
        CardContainer
    }
}
</script>

<template>
    <main class="py-5">
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
<script>
import Logo from './Logo.vue';
import SearchBar from './SearchBar.vue';

export default {
    components: {
        Logo,
        SearchBar
    },
    data() {
        return {
            name: 'AppHeader'
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <Logo />
            <SearchBar />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

    header {
        background-color: variables.$header;
        height: variables.$header-height;
    }
</style>
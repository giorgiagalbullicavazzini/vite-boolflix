<script>
export default {
    data() {
        return {
            name: 'Logo'
        }
    }
}
</script>

<template>
    <div class="logo">
        <a href="#">
            <img src="/img/galflix-library.png" alt="Galflix Logo">
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

.logo {
    width: variables.$header-height;
}
</style>
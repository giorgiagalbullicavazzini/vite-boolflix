<script>
export default {
    data() {
        return {
            name: 'Card'
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="info p-2">
            <div class="star-votes text-end">Stelline</div>
            <div class="other-info">
                <div class="title">Titolo</div>
                <div class="original-title">Titolo Originale</div>
                <div class="language">Lingua</div>
                <div class="description">Descrizione</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

.card {
    background-color: lightblue;
    width: 342px;

    .other-info {
        background-color: pink;
    }
}
</style>
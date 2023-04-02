<script>
export default {
    name: 'StarVote',
    props: {
        finalVote: Number,
        maxStarNumber: Number
    }
}
</script>

<template>
    <div class="star-votes">
        <font-awesome-icon role="button" v-for="vote in maxStarNumber" :icon="(vote <= finalVote) ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

.star-votes {
    background-color: variables.$overlay;
    color: variables.$stars;
}
</style>
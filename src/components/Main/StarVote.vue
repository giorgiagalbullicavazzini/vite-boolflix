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
    <div class="star-votes text-end">
        <font-awesome-icon v-for="vote in maxStarNumber" :icon="(vote <= finalVote) ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
    </div>
</template>
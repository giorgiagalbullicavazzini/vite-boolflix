<script>
export default {
    data() {
        return {
            name: 'Card'
        }
    },
    props: {
        poster: String,
        title: String,
        vote: String,
        originalTitle: String,
        language: String,
        description: String
    }
}
</script>

<template>
    <div class="result-card">
        <div class="poster">
            <img :src="poster" :alt="title"
            onerror="this.onerror=null;this.src='../src/assets/images/question.png';" />
        </div>
        <!-- <div class="info p-2">
            <div class="star-votes text-end">{{ vote }}</div>
            <div class="other-info">
                <div class="title">{{ title }}</div>
                <div class="original-title">{{ originalTitle }}</div>
                <div class="language">{{ language }}</div>
                <div class="description">{{ description }}</div>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';
    .poster {
        width: variables.$poster-width;
    }

    .other-info {
        background-color: pink;
    }
</style>
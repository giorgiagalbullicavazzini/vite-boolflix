<script>
export default {
    data() {
        return {
            name: 'Card',
            config: {
                maxVote: 10,
                maxStarNumber: 5
            }
        }
    },
    props: {
        poster: String,
        title: String,
        vote: Number,
        originalTitle: String,
        originalLanguage: String,
        description: String
    },
    computed: {
        getImagePath() {
            return new URL(this.poster, import.meta.url).href;
        },
        getFlag() {
            if (this.originalLanguage === 'xx') {
                return '../src/assets/images/xx.png';
            } else {
                return `../node_modules/language-icons/icons/${this.originalLanguage}.svg`;
            }
        },
        getVote() {
            const starValue = this.config.maxVote / this.config.maxStarNumber;
            const finalVote = Math.ceil(this.vote / starValue);
            return (finalVote);
        }
    }
}
</script>

<template>
    <div class="result-card position-relative">
        <div class="poster">
            <img :src="getImagePath" :alt="title" onerror="this.onerror=null;this.src='../src/assets/images/question.png'" />
        </div>
        <div class="info p-2 position-absolute">
            <div class="star-votes text-end">
                <font-awesome-icon icon="fa-solid fa-star"
                    v-for="finalVote in getVote" />
                <font-awesome-icon icon="fa-regular fa-star"
                    v-for="emptyStars in (this.config.maxStarNumber - getVote)" />
            </div>
            <div class="other-info">
                <div class="title">{{ title }}</div>
                <div class="original-title">{{ originalTitle }}</div>
                <div class="original-language">
                    <img :src="getFlag" :alt="originalLanguage"
                        onerror="this.onerror=null;this.src='../src/assets/images/question.png'" />
                </div>
                <div class="description">{{ description }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables';

.poster {
    width: variables.$poster-width;
}

.info {
    background-color: lightblue;
    height: 32.0625rem;
    opacity: 0;
    top: 0;
    right: 0;
    width: variables.$poster-width;

    &:hover {
        opacity: 1;
    }
}
</style>
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
        // Get a dynamic image path
        getImagePath() {
            return new URL(this.poster, import.meta.url).href;
        },
        // Original language becomes a flag
        getFlag() {
            if (this.originalLanguage === 'xx') {
                return '../src/assets/images/xx.png';
            } else {
                return `../node_modules/language-icons/icons/${this.originalLanguage}.svg`;
            }
        },
        // Average vote becomes a star value
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
        <!-- Poster -->
        <div class="poster">
            <img :src="getImagePath" :alt="title" onerror="this.onerror=null;this.src='../src/assets/images/question.png'" />
        </div>
        <!-- // Poster -->

        <!-- Info -->
        <div class="info p-2 position-absolute">
            <!-- Star Votes -->
            <div class="star-votes text-end">
                <font-awesome-icon icon="fa-solid fa-star"
                    v-for="finalVote in getVote" />
                <font-awesome-icon icon="fa-regular fa-star"
                    v-for="emptyStars in (this.config.maxStarNumber - getVote)" />
            </div>
            <!-- // Star Votes -->

            <div class="other-info">
                <!-- Titles -->
                <div class="title">{{ title }}</div>
                <div class="original-title">{{ originalTitle }}</div>
                <!-- // Titles -->

                <!-- Language -->
                <div class="original-language">
                    <img :src="getFlag" :alt="originalLanguage"
                        onerror="this.onerror=null;this.src='../src/assets/images/question.png'" />
                </div>
                <!-- // Language -->

                <!-- Description -->
                <div class="description">{{ description }}</div>
                <!-- // Description -->
            </div>
        </div>
        <!-- // Info -->
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
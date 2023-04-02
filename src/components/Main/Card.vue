<script>
// Import all components
import StarVote from './StarVote.vue';

export default {
    name: 'Card',
    components: {
        StarVote
    },
    data() {
        return {
            config: {
                maxVote: 10,
                maxStarNumber: 5
            }
        }
    },
    props: {
        poster: String,
        result: Object
    },
    computed: {
        // Get a dynamic image path
        getImagePath() {
            return new URL(this.poster + this.result.poster_path, import.meta.url).href;
        },
        // Original language becomes a flag
        getFlag() {
            if (this.result.original_language === 'xx') {
                return '../src/assets/images/xx.png';
            } else {
                return `../node_modules/language-icons/icons/${this.result.original_language}.svg`;
            }
        },
        // Average vote becomes a star value
        getVote() {
            const starValue = this.config.maxVote / this.config.maxStarNumber;
            const finalVote = Math.ceil(this.result.vote_average / starValue);
            return finalVote;
        }
    }
}
</script>

<template>
    <div class="result-card position-relative">
        <!-- Poster -->
        <div class="poster">
            <img :src="getImagePath" :alt="result.title || result.name"
                onerror="this.onerror=null;this.src='../src/assets/images/question.png'" />
        </div>
        <!-- // Poster -->

        <!-- Info -->
        <div class="info position-absolute start-0 bottom-0">
            <!-- Star Votes -->
            <StarVote :finalVote="getVote" :maxStarNumber="this.config.maxStarNumber"
                class="mx-1 p-2 position-absolute top-0 end-0 rounded-bottom" />
            <!-- // Star Votes -->

            <div class="other-info mx-1 p-2 position-absolute start-0 bottom-0 rounded-top">
                <!-- Title -->
                <h3 class="title fw-semibold">{{ result.title || result.name }}</h3>
                <!-- // Title -->

                <!-- Original Language -->
                <div class="label fw-bold">Titolo originale:</div>
                <div class="original-language d-flex align-items-center justify-content-between">
                    <div class="original-title">{{ result.original_title || result.original_name }}</div>
                    <div class="language">
                        <img :src="getFlag" :alt="result.original_language"
                            onerror="this.onerror=null;this.src='../src/assets/images/question.png'" />
                    </div>
                </div>
                <!-- // Original Language -->

                <!-- Description -->
                <div class="label fw-bold">Sinossi:</div>
                <div class="description">{{ result.overview }}</div>
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
    color: variables.$text;
    height: variables.$poster-height;
    opacity: 0;
    transition: opacity 2s;
    width: variables.$poster-width;

    &:hover {
        opacity: 1;
    }

    &:not(:hover) {
        opacity: 0;
    }

    .other-info {
        background-color: variables.$overlay;
        height: 80%;

        .language {
            width: 1.25rem;
        }
    }
}
</style>
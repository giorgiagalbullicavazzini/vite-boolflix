<script>
// import { store } from './store';

// Import all components
import AppHeader from './components/Header/AppHeader.vue';

export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            // store
        }
    },
    methods: {
        // getFlag(item) {
        //     if (item.original_language === 'xx') {
        //         return '../src/assets/images/xx.png';
        //     } else {
        //         return `../node_modules/language-icons/icons/${item.original_language}.svg`;
        //     }
        // },
        // getVote(vote) {
        //     const starValue = this.store.config.maxVote / this.store.config.maxStarNumber;
        //     const finalVote = Math.ceil(vote / starValue);
        //     return (finalVote);
        // }
    }
}
</script>

<template>
    <AppHeader />

    <!-- ////////////////////////////////////////////////////////// -->

    <!-- <div class="container m-5">
        <ul v-for="foundMovie in this.store.foundMovies">
            <li>
                <div>
                    <img :src="`${this.store.config.imgDb}${foundMovie.poster_path}`" :alt="foundMovie.original_title"
                        onerror="this.onerror=null;this.src='../src/assets/images/question.png';" />
                </div>
            </li>
            <li><span>Titolo:</span> {{ foundMovie.title }}</li>
            <li><span>Titolo Originale:</span> {{ foundMovie.original_title }}</li>
            <li><span>Lingua Originale:</span> <img :src="getFlag(foundMovie)" :alt="foundMovie.original_language"
                    onerror="this.onerror=null;this.src='../src/assets/images/question.png';" /> </li>
            <li>
                <span>Voto: </span>
                <span>
                    <font-awesome-icon v-for="finalVote in getVote(foundMovie.vote_average)" icon="fa-solid fa-star" />
                    <font-awesome-icon
                        v-for="emptyStars in (this.store.config.maxStarNumber - getVote(foundMovie.vote_average))"
                        icon="fa-regular fa-star" />
                </span>
            </li>
        </ul>
    </div>

    <div class="container m-5">
        <ul v-for="foundTv in this.store.foundSeries">
            <li>
                <div>
                    <img :src="`${this.store.config.imgDb}${foundTv.poster_path}`" :alt="foundTv.original_title"
                        onerror="this.onerror=null;this.src='../src/assets/images/question.png';" />
                </div>
            </li>
            <li><span>Titolo:</span> {{ foundTv.name }}</li>
            <li><span>Titolo Originale:</span> {{ foundTv.original_name }}</li>
            <li><span>Lingua Originale:</span> <img :src="getFlag(foundTv)" :alt="foundTv.original_language"
                    onerror="this.onerror=null;this.src='../src/assets/images/question.png';" /> </li>
            <li>
                <span>Voto: </span>
                <span>
                    <font-awesome-icon v-for="finalVote in getVote(foundTv.vote_average)" icon="fa-solid fa-star" />
                    <font-awesome-icon
                        v-for="emptyStars in (this.store.config.maxStarNumber - getVote(foundTv.vote_average))"
                        icon="fa-regular fa-star" />
                </span>
            </li>
        </ul>
    </div> -->
</template>

<style lang="scss" scoped>
// span {
//     font-weight: 700;
// }
</style>
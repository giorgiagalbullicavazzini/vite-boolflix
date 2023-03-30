import { reactive } from "vue";

export const store = reactive({
    config: {
        movieApi: 'https://api.themoviedb.org/3/search/movie',
        tvApi: 'https://api.themoviedb.org/3/search/tv',
        apiKey: '08607fe5cb737351c4b7b7dfaae78099',
        imgDb: 'https://image.tmdb.org/t/p/w342',
        defaultLang: 'it-IT',
        maxVote: 10,
        maxStarNumber: 5
    },
    searchText: '',
    foundMovies: [],
    foundSeries: []
})
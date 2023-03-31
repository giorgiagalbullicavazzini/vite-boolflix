import { reactive } from "vue";

export const store = reactive({
    config: {
        apiDb: 'https://api.themoviedb.org/3/',
        researchOptions: {
            movieApi: 'search/movie',
            tvApi: 'search/tv',
        },
        apiKey: '08607fe5cb737351c4b7b7dfaae78099',
        imgDb: 'https://image.tmdb.org/t/p/w342',
        defaultLang: 'it-IT'
    },
    searchText: '',
    foundMovies: [],
    foundSeries: []
})
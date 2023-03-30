import { reactive } from "vue";

export const store = reactive({
    config: {
        movieApi: 'https://api.themoviedb.org/3/search/movie',
        tvApi: 'https://api.themoviedb.org/3/search/tv',
        apiKey: '08607fe5cb737351c4b7b7dfaae78099',
        defaultLang: 'it-IT'
    },
    searchText: '',
    foundMovies: [],
    foundSeries: []
})
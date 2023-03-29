import { reactive } from "vue";

export const store = reactive({
    config: {
        movie_api: 'https://api.themoviedb.org/3/search/movie',
        api_key: '08607fe5cb737351c4b7b7dfaae78099',
        query: 'last'
    }
})
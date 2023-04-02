<script>
// import { store } from './store';

// Import all components
import AppHeader from './components/Header/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';

export default {
    name: 'BoolFlix',
    components: {
        AppHeader,
        AppMain
    }
}
</script>

<template>
    <AppHeader />
    <AppMain />
</template>
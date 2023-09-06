<script setup>
import { computed, onMounted} from "vue";
import store from "../store";
import AnimeList from "./AnimeList.vue";


onMounted(() =>{
    const url = 'top/anime';
    store.dispatch('topAnime', url);
});
const topAnimeResults =  computed(() => store.state.topAnime);

</script>

<template>
    <AnimeList :animeResult="topAnimeResults"/>
</template>


<style lang="scss" scoped>

</style>
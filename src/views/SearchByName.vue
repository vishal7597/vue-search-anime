<script setup>
import { ref, computed } from 'vue';
import AnimeList from '../components/AnimeList.vue';
import store from '../store';

const keyword = ref('');
function searchAnime() {
    if (keyword.value) {
        const urlParams = `anime?q=${keyword.value}`;
        store.dispatch('searchAnime', urlParams)
    }
}
const animeResult = computed(() => store.state.searchedAnime);
</script>

<template>
    <div class="flex p-8 justify-center">
        <input v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search For Anime" @change="searchAnime">
    </div>
    <AnimeList :animeResult="animeResult"/>
</template>

<style lang="scss" scoped>

</style>
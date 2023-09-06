<script setup>
import { computed, watch } from 'vue';
import { useRoute} from 'vue-router';
import AnimeList from '../components/AnimeList.vue';
import store from '../store';

const animeResult = computed(() => store.state.animeByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const route = useRoute();

watch(route, () => {
    const urlParams = `anime?letter=${route.params.letter}`;
    store.dispatch('animeByLetter', urlParams);
})

</script>

<template>
    <div class="flex justify-center gap-2 mt-2">
        <RouterLink :to="{name:'byLetter', params: {letter}}" v-for="letter of letters.split('')">
            {{ letter }}
        </RouterLink>
    </div>
    <AnimeList :animeResult="animeResult"/>
</template>

<style lang="scss" scoped>

</style>
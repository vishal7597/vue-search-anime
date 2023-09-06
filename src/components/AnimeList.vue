<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    animeResult: {
        type: Object,
    }
})

const showEpisodeList = function(animeData) {
    return animeData.episodes === null || animeData.episodes > 1;
}
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="anime in animeResult" :key="anime.mal_id" class="bg-white shadow">
            <img :src="anime?.images?.jpg?.image_url" :alt="anime?.title" class="rounded-t-x1 h-50 object-cover">
            <div class="p-3">
                <h3 class="font-bold py-3">{{ anime?.title }}</h3>
                <div>
                    
                    <a v-if="anime?.trailer?.youtube_id" :href="anime?.trailer.url" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600">Youtube Link</a>
                    <RouterLink v-if="showEpisodeList(anime)" :to="{name:'episodes', params: {animeId:anime?.mal_id}, query:{page:'1'}}">View Episode List</RouterLink>
                </div>
                <p class="py-3">{{ anime?.synopsis }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import store from '../store';

const route = useRoute(),
animeId = route.params.animeId,
episodes = computed(() => store.state.episodes),
pagination = computed(() => store.state.pagination),
currentPage = computed(() => {
    return route.query.page;
});

onMounted(() => {
    getEpisodes(animeId);
});

function getEpisodes(id, page = 1) {
    let urlParams = `anime/${id}/episodes?page=${page}`;
    store.dispatch('getEpisodes', urlParams);
}

function getFormattedDate(datestamp) {
    return new Date(datestamp).toISOString().split('T')[0];
}

const pageList = computed(() => {
    let pages = [];
    for (let i = 1; i <= pagination.value.last_visible_page; i++) {
        pages.push(i);
    }
    return pages;
})
</script>

<template>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th class="px-6 py-3">Episode No.</th>
                <th class="px-6 py-3">Episode Title</th>
                <th class="px-6 py-3">Aired</th>
                <th class="px-6 py-3">Filler</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="episode in episodes" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">{{ episode.mal_id }}</td>
                <td class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><a :href="episode.url">{{ episode.title }}</a></td>
                <td class="px-6 py-4">{{ getFormattedDate(episode.aired) }}</td>
                <td class="px-6 py-4">{{ episode.filler ? 'Yes' : 'No' }}</td>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example" class="flex justify-center">
        <ul class="inline-flex -space-x-px text-sm" v-for="page in pageList">
            <li>
                <RouterLink :to="{name:'episodes', params:{animeId}, query:{page}}"
                @click="getEpisodes(animeId, page)"
                :class="{'current-page': page == currentPage}"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {{page}}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>

</style>
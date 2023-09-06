<script setup>

import { computed, ref } from 'vue';
import CharacterList from '../components/CharacterList.vue';
import TopCharacters from '../components/TopCharacters.vue';
import store from '../store';

const keyword = ref('');
const characterResult = computed(() => store.state.searchedCharacters);
function searchCharacters() {
    const urlWithParams = `characters?q=${keyword.value}`;
    store.dispatch('searchCharacters', urlWithParams);
}
</script>
<template>
    <div class="flex p-8 justify-center">
        <input v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search For Characters" @change="searchCharacters">
    </div>
    <CharacterList :characterResult="characterResult"/>
    <TopCharacters v-if="!characterResult.length"/>
</template>


<style lang="scss" scoped>

</style>
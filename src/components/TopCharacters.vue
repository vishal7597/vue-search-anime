<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import CharacterList from './CharacterList.vue';

onMounted(() => {
    const url = 'top/characters';
    store.dispatch('topCharacters', url);
})
const characterResult = computed(() => store.state.topCharacters);
</script>

<template>
    <CharacterList :characterResult="characterResult"/>
</template>

<style lang="scss" scoped>

</style>
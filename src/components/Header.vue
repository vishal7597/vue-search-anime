<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
     <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <RouterLink
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5 text-purple-500 font-bold"
        >
        Home
        </RouterLink>
        <div class="flex items-center gap-1">
        <RouterLink
            :to="{name: 'byName'}"
            class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-500 hover:text-white"
        >
            Search Anime
        </RouterLink>
        <RouterLink
            :to="{name: 'byLetter'}"
            class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-500 hover:text-white"
        >
            By Letter
        </RouterLink>
        <RouterLink
            :to="{name: 'characters'}"
            class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-500 hover:text-white"
        >
            Characters
        </RouterLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>
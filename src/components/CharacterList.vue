<script setup>
defineProps({
    characterResult: {
        type: Object,
    }
})

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="character in characterResult" :key="character.mal_id" class="bg-white shadow">
            <img :src="character?.images?.jpg?.image_url" :alt="character?.title" class="rounded-t-x1 h-50 object-cover">
            <div class="p-3">
                <h3 class="font-bold py-3">{{ character?.name }}</h3>
                <div>
                    <a v-if="character?.url" :href="character?.url" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600">More Info</a>
                </div>
                <p class="py-3">{{ character?.about }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
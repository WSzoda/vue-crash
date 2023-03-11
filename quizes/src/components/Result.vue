<script setup>
    import { RouterLink } from 'vue-router';
    const { correctQuestions, howManyQuestions } = defineProps(['correctQuestions', 'howManyQuestions'])
</script>

<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>{{ correctQuestions }}/{{ howManyQuestions }}</h1>
        <router-link  to="/">Go Back</router-link>
    </div>
</template>

<style scoped>
    .results{
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 25px;
    }

    h1 {
        font-size: 80px;
    }
</style>
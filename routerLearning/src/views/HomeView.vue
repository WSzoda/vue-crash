<script setup>
    import cars from "../data/cars.json"
    import { RouterLink } from "vue-router"
</script>

<template>
    <div>
        <h1>Home</h1>
        <div class="cars">
            <RouterLink :to="`/car/${car.id}`" v-for="car in cars" :key="car.id">
                {{ car.name }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .cars {
        display: flex;
    }

    .cars a {
        text-decoration: none;
        color: black;
        width: 100%;
        margin: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.541);
    }
</style>
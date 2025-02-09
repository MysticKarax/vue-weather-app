<script setup>
    import { useWeatherStore } from '@/stores/weather';
    import CardsForecast from './CardsForecast.vue';
    const weatherStore = useWeatherStore();
</script>

<template>
    <section>
        <h3>5-Day Forecast:</h3>
        <div class="cards-forecast-container">
            <template v-for="day in weatherStore.getStateForecast.forecast" :key="weatherStore.getStateForecast.forecast">
                <CardsForecast :day="day" />
            </template>
        </div>
    </section>
</template>

<style scoped>
    .cards-forecast-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
        margin-bottom: 1rem;
    }
</style>

<script setup>
    import { useWeatherStore } from '@/stores/weather';
    import { aEmojiWeather } from '@/stores/weather';
    const weatherStore = useWeatherStore();
</script>

<template>
    <section class="card-current-weather">
        <h2 class="card-current-weather-title" v-if="!weatherStore.getStateCity.city">Search your city to begin</h2>
        <h2 class="card-current-weather-title" v-else-if="weatherStore.getStateCity.city">
            {{ weatherStore.getStateCity.city }}
            (
            <span id="main-weather-date">{{ weatherStore.getStateCurrentWeather.date }}</span>
            )
            <span class="emoji-weather">{{ aEmojiWeather.find((object) => weatherStore.getStateCurrentWeather.emoji === object.name)?.emoji }}</span>
        </h2>

        <p>
            <span class="weather-forecast temp">{{ weatherStore.getStateCurrentWeather.temp }}</span>
        </p>
        <p>
            <span class="weather-forecast wind">{{ weatherStore.getStateCurrentWeather.wind }}</span>
        </p>
        <p>
            <span class="weather-forecast humidity">{{ weatherStore.getStateCurrentWeather.humidity }}</span>
        </p>
    </section>
</template>

<style scoped>
    .card-current-weather {
        border: 1px solid black;
        padding-left: 0.5rem;
    }

    .card-current-weather-title {
        font-weight: 800;
        font-size: 1.8rem;
    }
</style>

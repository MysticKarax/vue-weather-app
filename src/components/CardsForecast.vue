<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        day: {
            type: Object,
            required: true,
        },
    });
</script>

<template>
    <div class="card-forecast-weather">
        <h4>{{ day.date.slice(0, 10) }}</h4>
        <p>{{ day.emoji }}</p>
        <p>
            Temp:
            <span class="weather-forecast temp">{{ day.temp }}</span>
            &deg;F
        </p>
        <p>
            Wind:
            <span class="weather-forecast wind">{{ day.wind }}</span>
            MPH
        </p>
        <p>
            Humidity:
            <span class="weather-forecast humidity">{{ day.humidity }}</span>
            %
        </p>
    </div>
</template>

<style scoped>
    .card-forecast-weather {
        color: white;
        background-color: #3b475a;
        padding: 0.5rem;
        font-weight: 300;
        font-size: 1rem;
        min-width: 204px;
    }
</style>

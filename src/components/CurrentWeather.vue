<script setup>
    import { onMounted } from 'vue';
    import { useWeatherStore } from '@/stores/weather';
    import { aEmojiWeather } from '@/stores/weather';

    const weatherStore = useWeatherStore();

    // Verifica si city está disponible para luego llamar a getCurrentWeather
    // const fetchCurrentWeather = () => {
    //     if (weatherStore.city) weatherStore.getCurrentWeather(weatherStore.city);
    // };

    onMounted(() => {
        const H_CURRENT_WEATHER_DATE = document.querySelector('#main-weather-date');
        const H_CURRENT_EMOJI_WEATHER = document.querySelector('.emoji-weather');
        const H_CURRENT_TEMP_LABEL = document.querySelector('.temp');
        const H_CURRENT_WIND_LABEL = document.querySelector('.wind');
        const H_CURRENT_HUMIDITY_LABEL = document.querySelector('.humidity');

        // console.log(H_CURRENT_WEATHER_DATE);
        // console.log(H_CURRENT_EMOJI_WEATHER);
        // console.log(H_CURRENT_TEMP_LABEL);
        // console.log(H_CURRENT_WIND_LABEL);
        // console.log(H_CURRENT_HUMIDITY_LABEL);
        // console.log(aEmojiWeather);

        // Llama a fetchCurrentWeather cuando el componente este montado
        // fetchCurrentWeather();
        // weatherStore.getCurrentWeather(weatherStore.city);
        // console.log(weatherStore.getStateInfo);
    });

    // watch(
    //     // Propiedad a ser observada esperando cambios
    //     () => weatherStore.city,
    //     // Lo que quiero que pase cuando suceda un cambio en esa propiedad
    //     () => fetchCurrentWeather(),
    // );
</script>

<template>
    <section class="card-current-weather">
        <h2 class="card-current-weather-title" v-if="!weatherStore.getStateInfo.city">Search your city to begin</h2>
        <h2 class="card-current-weather-title" v-else-if="weatherStore.getStateInfo.city">
            {{ weatherStore.getStateInfo.city }}
            (
            <span id="main-weather-date">{{ weatherStore.getStateInfo.date }}</span>
            )
            <span class="emoji-weather">{{ aEmojiWeather.find((object) => weatherStore.getStateInfo.emoji === object.name)?.emoji }}</span>
        </h2>

        <p>
            <span class="weather-forecast temp">{{ weatherStore.getStateInfo.temp }}</span>
        </p>
        <p>
            <span class="weather-forecast wind">{{ weatherStore.getStateInfo.wind }}</span>
        </p>
        <p>
            <span class="weather-forecast humidity">{{ weatherStore.getStateInfo.humidity }}</span>
        </p>
    </section>

    <!-- <section class="card-current-weather">
          <h2 class="card-current-weather-title">
            <span id="city-name"></span>
            <span class="label-date" id="current-weather-date"></span>
            <span id="current-emoji-weather"></span>
          </h2>
          <p>
            <span
              id="current-weather-temp"
              class="weather-forecast temp"
            ></span>
          </p>
          <p>
            <span
              id="current-weather-wind"
              class="weather-forecast wind"
            ></span>
          </p>
          <p>
            <span
              id="current-weather-humidity"
              class="weather-forecast humidity"
            ></span>
          </p>
        </section> -->
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

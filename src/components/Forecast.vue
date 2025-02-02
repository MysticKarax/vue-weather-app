<script setup>
    import { useWeatherStore } from '@/stores/weather';
    import CardsForecast from './CardsForecast.vue';
    const weatherStore = useWeatherStore();
    // console.log(`log al state desde Forecast:`);
    // weatherStore.logState()

    // weatherStore.forecastWeather.forEach(day => {
    //   console.log(day.date)
    //   console.log(day.emoji)
    //   console.log(day.humidity)
    //   console.log(day.temp)
    //   console.log(day.wind)
    // })

    // Verifica si cityID está disponible para luego llamar a getForecast
    // const fetchForecast = () => {
    //     if (weatherStore.cityID) weatherStore.getForecast(weatherStore.cityID);
    // };

    // Llama a fetchForecast cuando el componente se monte
    // onMounted(() => {
    //     fetchForecast();
    // });

    // // Observa cambios en cityID y llama a fetchForecast cuando cambie
    // watch(
    //     // Propiedad a observar esperando cambios
    //     () => weatherStore.cityID,
    //     // Lo que va a pasar cuando suceda un cambio en esa propiedad
    //     () => fetchForecast(),
    // );
</script>

<template>
    <section>
        <h3>5-Day Forecast:</h3>

        <div class="cards-forecast-container">
            <template v-for="day in weatherStore.getStateInfo.forecastWeather" :key="weatherStore.getStateInfo.forecastWeather">
                <CardsForecast :day="day" />
            </template>
        </div>
    </section>

    <!-- <section>
  <h3>5-Day Forecast:</h3>
  <div class="cards-forecast-container">
            <div class="card-forecast-weather">
              <h4>{{ weatherStore.forecastWeather[0].date }}</h4>
              <p>{{ weatherStore.forecastWeather[0].emoji }}</p>
              <p>
                Temp: <span class="weather-forecast temp">{{ weatherStore.forecastWeather[0].temp }}</span>&deg;F
              </p>
              <p>Wind: <span class="weather-forecast wind">{{ weatherStore.forecastWeather[0].wind }} </span>MPH</p>
              <p>
                Humidity: <span class="weather-forecast humidity">{{ weatherStore.forecastWeather[0].humidity }}</span>%
              </p>
            </div>
            <div class="card-forecast-weather">
              <h4>{{ weatherStore.forecastWeather[1].date }}</h4>
              <p>{{ weatherStore.forecastWeather[1].emoji }}</p>
              <p>
                Temp: <span class="weather-forecast temp">{{ weatherStore.forecastWeather[1].temp }}</span>&deg;F
              </p>
              <p>Wind: <span class="weather-forecast wind">{{ weatherStore.forecastWeather[1].wind }} </span>MPH</p>
              <p>
                Humidity: <span class="weather-forecast humidity">{{ weatherStore.forecastWeather[1].humidity }}</span>%
              </p>
            </div>
            <div class="card-forecast-weather">
              <h4>{{ weatherStore.forecastWeather[2].date }}</h4>
              <p>{{ weatherStore.forecastWeather[2].emoji }}</p>
              <p>
                Temp: <span class="weather-forecast temp">{{ weatherStore.forecastWeather[2].temp }}</span>&deg;F
              </p>
              <p>Wind: <span class="weather-forecast wind">{{ weatherStore.forecastWeather[2].wind }} </span>MPH</p>
              <p>
                Humidity: <span class="weather-forecast humidity">{{ weatherStore.forecastWeather[2].humidity }}</span>%
              </p>
            </div>
            <div class="card-forecast-weather">
              <h4>{{ weatherStore.forecastWeather[3].date }}</h4>
              <p>{{ weatherStore.forecastWeather[3].emoji }}</p>
              <p>
                Temp: <span class="weather-forecast temp">{{ weatherStore.forecastWeather[3].temp }}</span>&deg;F
              </p>
              <p>Wind: <span class="weather-forecast wind">{{ weatherStore.forecastWeather[3].wind }} </span>MPH</p>
              <p>
                Humidity: <span class="weather-forecast humidity">{{ weatherStore.forecastWeather[3].humidity }}</span>%
              </p>
            </div>
            <div class="card-forecast-weather">
              <h4>{{ weatherStore.forecastWeather[4].date }}</h4>
              <p>{{ weatherStore.forecastWeather[4].emoji }}</p>
              <p>
                Temp: <span class="weather-forecast temp">{{ weatherStore.forecastWeather[4].temp }}</span>&deg;F
              </p>
              <p>Wind: <span class="weather-forecast wind">{{ weatherStore.forecastWeather[4].wind }} </span>MPH</p>
              <p>
                Humidity: <span class="weather-forecast humidity">{{ weatherStore.forecastWeather[4].humidity }}</span>%
              </p>
            </div>
          </div>
          
        </section> -->
</template>

<style scoped>
    .cards-forecast-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
        margin-bottom: 1rem;
    }
</style>

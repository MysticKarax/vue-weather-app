<script setup>
    import { onMounted, ref } from 'vue';
    import { useWeatherStore } from '@/stores/weather';

    const weatherStore = useWeatherStore();
    const H_BTN_SEARCHED_CITIES = ref(null);
    const inputCity = ref('');

    onMounted(() => {
        H_BTN_SEARCHED_CITIES.value = document.querySelector('#common-cities');
        H_BTN_SEARCHED_CITIES.value.addEventListener('click', function (e) {
            const H_BTN_CLICKED = e.target.closest('.test');
            if (!H_BTN_CLICKED) return;

            console.log(`clicked on:`, H_BTN_CLICKED);
            console.log(H_BTN_CLICKED.textContent);
            searchCity(H_BTN_CLICKED.textContent);
        });
        // console.log(weatherStore.getStateInfo.searchedCitiesHistory);
        // weatherStore.getStateInfo.searchedCitiesHistory.forEach((city) => console.log(city));
    });

    async function searchCity(city) {
        const cityName = typeof city === 'object' ? city.value : city;

        // console.log('City received: ', cityName);

        if (!cityName) return alert('Please Search a Valid City');

        await weatherStore.getCurrentWeather(city);

        createCitiesHistory();
        inputCity.value = '';
    }

    function createCitiesHistory() {
        const currentCity = weatherStore.getStateInfo.city;
        const history = weatherStore.getStateInfo.searchedCitiesHistory;

        // Si la ciudad ya existe en el historial, moverla al inicio
        if (history.includes(currentCity)) {
            const updatedHistory = [currentCity, ...history.filter((city) => city !== currentCity)];
            weatherStore.updateSearchedCitiesHistory(updatedHistory.slice(0, 10)); // Solo 10 ciudades
        } else {
            // Si la ciudad no existe, agregarla al inicio
            const updatedHistory = [currentCity, ...history];
            weatherStore.updateSearchedCitiesHistory(updatedHistory.slice(0, 10)); // Solo 10 ciudades
        }
    }
</script>

<template>
    <aside>
        <!-- CUANDO EL BOTON HAGA SUBMIT, PREVIENE EL COMPORTAMIENTO POR DEFECTO Y EJECUTA LA FUNCION SEARCH CITY -->
        <form @submit.prevent="searchCity(inputCity)">
            <label class="label-title" for="city-input">Search for a City:</label>
            <input class="input-cities" type="text" placeholder="San Diego" v-model="inputCity" />
            <button type="submit" id="btn-search">Search</button>
            <hr />
        </form>
        <section id="common-cities">
            <button class="test" v-for="city in weatherStore.getStateInfo.searchedCitiesHistory">{{ city }}</button>
        </section>
    </aside>
</template>

<style scoped>
    form,
    #common-cities {
        display: grid;
        place-content: center;
        row-gap: 0.5rem;
    }

    hr {
        width: 100%;
    }

    .label-title {
        font-size: 1.6rem;
        font-weight: bolder;
    }

    .input-cities {
        padding: 0.7rem 0.4rem;
        border-radius: 7px;
        border: 1px solid black;
    }

    #btn-search {
        background-color: #638fe8;
        color: white;
        transition: background 50ms, transform 50ms;
    }

    #btn-search:hover {
        cursor: pointer;
        background-color: #4575d5;
        transition: background 50ms, transform 50ms;
    }

    #btn-search:active {
        background-color: #2856b1;
        transition: background 50ms;
    }
</style>

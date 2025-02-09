import config from '../config.js';
import { defineStore } from 'pinia';

const apiKey = config.apiKey;

export const aEmojiWeather = [
    {
        name: 'Clear',
        emoji: '☀️',
    },
    {
        name: 'Clouds',
        emoji: '⛅',
    },
    {
        name: 'Rain',
        emoji: '☔',
    },
];

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        currentWeather: {
            date: new Date().toLocaleDateString(),
            emoji: '',
            temp: '',
            wind: '',
            humidity: '',
        },
        city: '',
        forecastWeather: [],
        searchedCitiesHistory: ['Manzanillo', 'Huston', 'Guadalajara', 'Sydney', 'Austin', 'Laredo', 'Torreon', 'Saltillo', 'Los Angeles', 'Mexico City'],
    }),
    // SACAR INFORMACION DEL ESTADO PARA QUE OTROS COMPONENTES PUEDAN USARLA
    // SOLO LECTURA Y FILTRO
    getters: {
        getStateCurrentWeather(state) {
            return {
                date: state.currentWeather.date,
                emoji: state.currentWeather.emoji,
                temp: state.currentWeather.temp,
                wind: state.currentWeather.wind,
                humidity: state.currentWeather.humidity,
            };
        },
        getStateCity(state) {
            return {
                city: state.city,
            };
        },
        getStateForecast(state) {
            return {
                forecast: state.forecastWeather,
            };
        },
        getStateSearchedCitiesHistory(state) {
            return {
                searchedCitiesHistory: state.searchedCitiesHistory,
            };
        },
    },

    actions: {
        updateStateCurrentWeather(city, oCurrentWeather) {
            this.city = city;
            this.currentWeather.emoji = oCurrentWeather.emoji;
            this.currentWeather.temp = `Temp: ${oCurrentWeather.temp}°F`;
            this.currentWeather.wind = `Wind: ${oCurrentWeather.wind} MPH`;
            this.currentWeather.humidity = `Humidity: ${oCurrentWeather.humidity}%`;
        },

        async getCurrentWeather(city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
            try {
                const response = await fetch(url);
                if (response.status === 404) {
                    alert('City Not Found. Please Try Another One');
                    return false;
                }
                const data = await response.json();

                const oCurrentWeather = {
                    emoji: data.weather[0].main,
                    temp: data.main.temp,
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                };

                this.updateStateCurrentWeather(data.name, oCurrentWeather);
                this.getForecast(data.id);
                return true;
            } catch (error) {
                console.error(`An error has occurred: ${error}`);
                return false;
            }
        },

        async getForecast(cityID) {
            const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${apiKey}&units=imperial`;

            try {
                const responseForecast = await fetch(forecastURL);

                if (responseForecast.status === 404) return alert('City Not Found. Please Try Another One');

                const dataForecast = await responseForecast.json();

                const aForecastPredict = dataForecast.list
                    .filter(
                        (object) =>
                            object.dt_txt // Recorre todos los objetos y solo traeme de vuelta
                                // solo los objetos que contengan la proiedad dt_txt

                                .includes('12:00:00'), // Ahora traeme solo los objetos cuyo hora de sus propiedades dt_txt
                        // sean las 12 de la tarde
                    )
                    .slice(0, 5) // Ahora creame un array con solo los primeros 5 resultados que te encuentres
                    // En este caso no es necesario porque solo hay 5 dias en total pero no esta demas el filtro
                    .map((list) => {
                        const sFoundEmoji = aEmojiWeather.find((object) => list.weather[0].main === object.name);
                        const oForecast = {
                            date: list.dt_txt,
                            emoji: sFoundEmoji ? sFoundEmoji.emoji : '❓',
                            temp: list.main.temp,
                            wind: list.wind.speed,
                            humidity: list.main.humidity,
                        };
                        return oForecast;
                    });
                this.forecastWeather = aForecastPredict;
            } catch (error) {
                console.log(`An error has occurred: ${error}`);
            }
        },
        updateSearchedCitiesHistory(newHistory) {
            this.searchedCitiesHistory = newHistory;
        },
    },
});

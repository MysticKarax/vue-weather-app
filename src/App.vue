<script setup>
import CurrentWeather from './components/CurrentWeather.vue';
import Forecast from './components/Forecast.vue';
import SearchCity from './components/SearchCity.vue';
import Header from './components/Header.vue';

</script>

<template>  
  <Header/>
  <div class="container-grid">
    <SearchCity/>
    <main>
      <CurrentWeather/>
      <Forecast/>
    </main>
  </div>
</template>

<style scoped>

/* FIXME: EL CODIGO PARA ACOMODAR EL LAYOUT DE LA APP NO FUNCIONA AQUI, PERO SI
EN MAIN.CSS */

</style>

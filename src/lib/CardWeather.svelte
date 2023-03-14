<script lang="ts">
    import { onMount } from "svelte";
    import { getWeatherData } from "../api/WeatherApi";
    import type interfaceWeather from "../interfaces/interfaceWeather";

    let weatherData: interfaceWeather;

    onMount(async () => {
        weatherData = await getWeatherData();
    });
</script>

{#if weatherData}
    <div class="container">
        <h1
            class="text-4xl font-semibold {weatherData.current.is_day
                ? ''
                : 'text-white'}"
        >
            Hola, hay
        </h1>
        <h2
            class="text-6xl font-bold mt-4 {weatherData.current.is_day
                ? ''
                : 'text-white'}"
        >
            {weatherData.current.temp_c}°C
        </h2>
        <h3
            class="text-2xl mt-4 font-semibold {weatherData.current.is_day
                ? ''
                : 'text-white'}"
        >
            en {weatherData.location.name}, {weatherData.location.region}
        </h3>

        <div class="flex-inline mt-4">
            <img
                class="w-50 h-50"
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
            />
            <p
                class="text-lg font-semibold {weatherData.current.is_day
                    ? ''
                    : 'text-white'}"
            >
                {weatherData.current.condition.text}
            </p>
        </div>
    </div>
{/if}

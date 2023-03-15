<script lang="ts">
    import CardWeather from "./lib/CardWeather.svelte";
    import FeelsLike from "./lib/FeelsLike.svelte";
    import Weather from "./lib/Weather.svelte";
    import Profile from "./lib/Profile.svelte";
    import { onMount } from "svelte";
    import { getWeatherData } from "./api/WeatherApi";
    import type interfaceWeather from "./interfaces/interfaceWeather";

    let weatherData: interfaceWeather;
    let is_day: number;

    onMount(async () => {
        weatherData = await getWeatherData();
        is_day = weatherData.current.is_day;
    });
</script>

<main class="p-5 2xl:p-10 bg-cover {!weatherData ? 'bg-day' : 'bg-night'}">
    <div class="flex justify-between">
        <div class="info">
            <CardWeather />
        </div>
        <div class="iconDay">
            <Weather />
        </div>
    </div>
    <div class="feelslike mt-16">
        <FeelsLike />
    </div>
    <div class="createdBy mt-10">
        <Profile githubUsername="zusldev" />
    </div>
</main>

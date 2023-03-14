<script lang="ts">
    import Sun from "./Sun.svelte";
    import Moon from "./Moon.svelte";
    import { onMount } from "svelte";
    import { getWeatherData } from "../api/WeatherApi";
    import type interfaceWeather from "../interfaces/interfaceWeather";

    let weatherData: interfaceWeather;

    onMount(async () => {
        weatherData = await getWeatherData();
    });
</script>

{#if weatherData}
    {#if weatherData.current.is_day}
        <Sun />
    {:else}
        <Moon />
    {/if}
{/if}

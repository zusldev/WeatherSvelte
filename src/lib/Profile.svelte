<!-- Profile.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { getWeatherData } from "../api/WeatherApi";
    import type interfaceWeather from "../interfaces/interfaceWeather";

    let weatherData: interfaceWeather;

    export let githubUsername;
    onMount(async () => {
        weatherData = await getWeatherData();
    });
</script>

{#if weatherData}
    <div
        id="profile"
        class="rounded-lg flex items-center justify-center text-center overflow-hidden shadow-lg bg-white p-3 {weatherData
            .current.is_day
            ? 'bg-opacity-60 bg-day'
            : 'opacity-90'} "
    >
        <img
            class="w-24 h-24 rounded-full"
            src={`https://github.com/${githubUsername}.png`}
            alt={`${githubUsername}'s profile picture`}
        />

        <div class="px-4">
            <h2 class="font-bold text-xl mb-2">@{githubUsername}</h2>
            <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                class="text-blue-500 hover:underline"
                >github.com/{githubUsername}</a
            >
        </div>
    </div>
{/if}

<style>
    @media (min-width: 855px) {
        #profile {
            width: 100%;
            max-width: 855px;
            margin: 0 auto;
            justify-content: center;
        }
    }
</style>

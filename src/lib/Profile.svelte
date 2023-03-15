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
        class="rounded-lg flex items-center justify-center text-center overflow-hidden bg-white p-3 {weatherData
            .current.is_day
            ? 'bg-opacity-60 bg-day'
            : 'bg-opacity-70'} "
    >
        <img
            class="w-24 h-24 rounded-full"
            src={`https://github.com/${githubUsername}.png`}
            alt={`${githubUsername}'s profile picture`}
        />

        <div class="px-4">
            
            <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                class="hover:underline font-bold text-xl mb-2"
                >@zusldev</a
            >
        </div>
    </div>
{/if}

<style>
    @media (min-width: 835px) {
        #profile {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            justify-content: center;
        }
    }
</style>

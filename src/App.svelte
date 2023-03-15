<script>
    import CardWeather from "./lib/CardWeather.svelte";
    import FeelsLike from "./lib/FeelsLike.svelte";
    import Weather from "./lib/Weather.svelte";
    import Profile from "./lib/Profile.svelte";
</script>

<html lang="">
    <body class="bg-black/90">
        <main class="p-5 2xl:p-10">
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
    </body>
</html>

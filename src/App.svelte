<script>
    import CardWeather from "./lib/CardWeather.svelte";
    import FeelsLike from "./lib/FeelsLike.svelte";
    import Weather from "./lib/Weather.svelte";
    import Profile from "./lib/Profile.svelte";
    console.log("Hola mundo");
    const now = new Date(); // Obtener la hora local actual del usuario
    const hour = now.getHours(); 

    if (hour >= 6 && hour < 18) {
        document.body.style.backgroundColor = "#7ed7fe"; // Cambia el color del fondo a blanco si es de día
    } else {
        document.body.style.backgroundColor = "#19313b"; // Cambia el color del fondo a negro si es de noche
    }
</script>

<html lang="">
    <body>
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

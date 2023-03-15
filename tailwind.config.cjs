const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
        backgroundImage: {
            day: "url('https://s.w-x.co/WeatherImages_Web/WeatherImage_Fair-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70')",
            night: "url('https://s.w-x.co/WeatherImages_Web/WeatherImage_PartlyCloudy-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70')",
        },
    },

    plugins: [],
};

module.exports = config;

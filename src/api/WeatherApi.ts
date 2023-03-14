import type interfaceWeather from "../interfaces/interfaceWeather";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "0568d9c208msh3db9787ae8c1c62p1f36a5jsn6a57de197090",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
};
const city: string = "Navojoa";

export function getWeatherData(): Promise<interfaceWeather> {
    return fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
        options
    )
        .then((res) => res.json())
        .then((data: interfaceWeather) => {
            console.log("CONEXION LISTA");
            console.log(data);
            return data;
        });
}

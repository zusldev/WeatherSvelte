export default interface WeatherData {
    current: {
        temp_c: number;
        wind_kph: number;
        is_day: number;
        feelslike_c: number;
        humidity: number;
        pressure_mb: number;
        vis_km: number;
        wind_dir: string;
        uv : number;
        condition: {
            text: string;
            icon: string;
        };
    };
    location: {
        name: string;
        region: string;
    };
}

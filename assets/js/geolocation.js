import { getData } from "./request.js";
import { resetWeatherContent } from "./helper.js";

export const getUserLocation = () => {

    const options = {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0
    };

    const error = (err) => {
        console.log(`${err.code}: ${err.message}`);
    };

    const success = async (pos) => {
        const crd = pos.coords;

        const responce = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=9dbac6ca63fa48848730cbf6e74fc56a`
        );
        const result = await responce.json();
        
        const weather = await getData(result.features[0].properties.city).catch(console.log);

        resetWeatherContent(weather.name, weather);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

};
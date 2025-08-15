
//Logic App

//El siguiente codigo es comentado en español

const apiKey = "c3105ea9c2428776d64e25189046d190"; //apikey, generado(unica)
const apiURl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";// url(manejador)

const searchBox = document.querySelector('.search input');//Obtiene o selecciona input de la clase search
const sendBtn = document.querySelector('.search button'); //Obtiene o selecciona button de la clase search
const weather_icon = document.querySelector('.weather-icon'); //Obtiene o selecciona el icono de la clase weather-icon (para controlar segun los parametos del clima)



//Funcion asicontrona para hacer fetch a nuestra api
async function checkWeather(city) {

    //response(captura el resultado de nuestra api haciendo un fetch a la misma url)
    const response = await fetch(`${apiURl} ${city} &appid=${apiKey}`);

    // controlador principal(maneja el error 404 si una ciudad no se encontro)
    if (response.status == 404) {
        document.querySelector('.alert').style.display = 'block'//seleccionamos la clase alert para dar mensaje(inicia en block para aparecer si la ciudad ingresada es incorrecta)
        document.querySelector('.weather').style.display = 'none'//oculta los details al marcar error

    //else si nuestro status fue correcto la app se ejecuta haciendo fetch 
    } else {

        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.alert').style.display = 'none'

        //data captura toda la informacion de nuestro response al hacer fetch, en un json
        let data = await response.json();

        //console.log(data)

        //accedemos a las clases de los details weather para alterar los resultados por defecto y remplazarlo por el tipo de atributo correcto(name, temp, humidity, speed)
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${data.main.temp}°C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;


        //logica de diseño - si en data.weather[0].main, como resultado nos da segun el tipo de cielo, asignamos segun su icono o imagen
        if (data.weather[0].main === 'Clouds') {
            weather_icon.src = 'images/clouds.png';

        } else if (data.weather[0].main === 'Clear') {
            weather_icon.src = 'images/clear.png';

        } else if (data.weather[0].main === 'Rain') {
            weather_icon.src = 'images/rain.png';

        } else if (data.weather[0].main === 'Drizzle') {
            weather_icon.src = 'images/drizzle.png';
        }

    }

}

//evento principal al hacer click en boton - nos permite ejecutar nuestra funcion asincrona
sendBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


console.log("Fin App");

// Fonction appelée lors du click du bouton
window.onload=function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
 
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
function actualiser() {
  const cityname = document.getElementById('city-input').value;
  alert(cityname);
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(cityname);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
function threedays() {
  const cityname = document.getElementById('city-input').value;
  
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(cityname);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
    const data = response.data;
 
      // On récupère l'information principal du lendemain
      const main = data.list[1].weather[0].main;
      const description_meteo = data.list[1].weather[0].description;
      
      const temp = (Math.round((data.list[1].temp.day) -273));
      
      const icon = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      // Modifier le DOM
      document.getElementById('today-forecast-main2').innerHTML = main;
      document.getElementById('today-forecast-more-info2').innerHTML = description_meteo;
      document.getElementById('icon-weather-container2').innerHTML = icon;
      document.getElementById('today-forecast-temp2').innerHTML = `${temp}°C`;
     
     //surlendemain
     const main2 = data.list[2].weather[0].main;
      
       const description_meteo2 = data.list[2].weather[0].description;
      
      const temp2 = (Math.round((data.list[2].temp.day) -273));
     // const temp = data.list[0].temp[0].day;
     // alert(temp);
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);
      // Modifier le DOM
      document.getElementById('today-forecast-main3').innerHTML = main2;
      document.getElementById('today-forecast-more-info3').innerHTML = description_meteo2;
      document.getElementById('icon-weather-container3').innerHTML = icon2;
      document.getElementById('today-forecast-temp3').innerHTML = `${temp2}°C`;

      //toujours plus loin 
     const main3 = data.list[3].weather[0].main;
      
       const description_meteo3 = data.list[3].weather[0].description;
      
      const temp3 = (Math.round((data.list[3].temp.day) -273));
     // const temp = data.list[0].temp[0].day;
     // alert(temp);
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);
      // Modifier le DOM
      document.getElementById('today-forecast-main4').innerHTML = main3;
      document.getElementById('today-forecast-more-info4').innerHTML = description_meteo3;
      document.getElementById('icon-weather-container4').innerHTML = icon3;
      document.getElementById('today-forecast-temp4').innerHTML = `${temp3}°C`;
 }) 
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    }
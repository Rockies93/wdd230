const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e518782e81957a2dcf5d4fb87ea26f8d&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //Weather Conditions Box
    document.getElementById('current-temp').textContent = `${jsObject.main.temp} \u00B0F`;
    document.getElementById('high').textContent = `${jsObject.main.temp_max} \u00B0F`;
    document.getElementById('humidity').textContent = `${jsObject.main.humidity} \u0025`;
    document.getElementById('windSpeed').textContent = `${jsObject.wind.speed} MPH`;

    //windspeed calculations 
    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;

    if (t <= 50 && s >= 4.8) {
        let chill = 35.74 + 0.6215*t - 35.75*(s**0.16)+ 0.4275*t*(s**0.16);
        chill = chill.toFixed(2);
        document.getElementById('windChill').textContent = chill + '\u00B0';
    }
    else {
        document.getElementById('windChill').textContent = "N/A";
    }
  });

  
  
const apiURLforecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e518782e81957a2dcf5d4fb87ea26f8d&units=imperial";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
  
    let i = 0;
    while ( i < 40) {
        let checkingTime = jsObject.list[i].dt_txt;
        if (checkingTime.includes('18:00:00')) {
            let bigSection = document.querySelector('div.forecast');
            let card = document.createElement('div');
            card.setAttribute('class', 'daily-forecast');
            bigSection.appendChild(card);

            //add day name
            let dayHeader = document.createElement('h4');
            let date = new Date(checkingTime);
            dayHeader.textContent = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date);
            card.appendChild(dayHeader);

            //add image
            let imagesrc =  'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            let desc = jsObject.list[i].weather[0].description; 
            let icon = document.createElement('img');
            icon.src = imagesrc;
            icon.alt = desc;
            card.appendChild(icon);

            //add forecast
            let forecast = document.createElement('span');
            forecast.textContent = `${jsObject.list[i].main.temp} \u00B0F`;
            card.appendChild(forecast);

        
            i++;
        }
        else {
            i++;
        }
    }
});
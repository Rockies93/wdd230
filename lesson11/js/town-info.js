const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);

        const towns = jsonObject['towns'];
        let i = 0; 
        while (i < towns.length) {
            if (i== 0 || i == 2 || i == 6) {
               let bigSection = document.querySelector('div.town-highlight'); 
               let card = document.createElement('div');
               card.setAttribute('class', 'town-card');
               bigSection.appendChild(card);

               let townText = document.createElement('div');
               townText.setAttribute('class','town-text');
               card.appendChild(townText);

               let h2 =  document.createElement('h2');
               h2.textContent = towns[i].name;
               townText.appendChild(h2);

               let h3 = document.createElement('h3');
               h3.textContent = towns[i].motto;
               townText.appendChild(h3);

               let list = document.createElement('ul');
               townText.appendChild(list);

               let year = document.createElement('li');
               year.textContent = `Founded in ${towns[i].yearFounded}`;
               list.appendChild(year);

               let population = document.createElement('li');
               population.textContent = `Population: ${towns[i].currentPopulation}`;
               list.appendChild(population);

               let rain = document.createElement('li');
               rain.textContent = `Average Rainfall: ${towns[i].averageRainfall} in`;
               list.appendChild(rain);
               
               let image =  document.createElement('img');
               image.src = `images/${towns[i].photo}`;
               image.alt = `Landscape picture of ${towns[i].name}`;
               card.appendChild(image);
               
               i++;
            }
            else {
               i++;
            }
        }
    })
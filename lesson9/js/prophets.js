const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
    

const prophets = jsonObject['prophets'];
for (let i = 0; i < prophets.length; i++) {
    let card = document.createElement('section');
    
    //heading
    let h2 = document.createElement('h2');
    h2.textContent = ` ${prophets[i].name} ${prophets[i].lastname}`
    card.appendChild(h2);
    document.querySelector('div.cards').appendChild(card);

    //images 
    let images = document.createElement('img');
    images.src = prophets[i].imageurl;
    images.alt = `${prophets[i].name} ${prophets[i].lastname}`
    card.appendChild(images);

    let list = document.createElement('ul');
    card.appendChild(list);

    //birthday
    let birthday = document.createElement('li');
    birthday.textContent = `Date of Birth: ${prophets[i].birthdate}`;
    list.appendChild(birthday);

    //birthplace
    let birthplace = document.createElement('li');
    birthplace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
    list.appendChild(birthplace);
}

});
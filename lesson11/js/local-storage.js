
let dateVisited = localStorage.getItem('date1');
let dateToday = new Date();
let difference = dateToday - dateVisited;
if (dateVisited != null) {
    document.getElementById('last-visited').textContent = Math.round(difference);
}
else {
    document.getElementById('last-visited').textContent = 0;
}
localStorage.setItem(dateVisited, dateToday);



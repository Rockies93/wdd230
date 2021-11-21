let hambutton = document.querySelector('.hamburger');
let mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//Print out date
let d = new Date()
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").textContent = d.toLocaleDateString('en-UK',options);



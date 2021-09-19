//copyright date
let d = new Date()
let year= d.getFullYear();
document.getElementById("currentDate").textContent = year;

//Last updated date
let string = document.lastModified
document.getElementById("lastModified").textContent = string
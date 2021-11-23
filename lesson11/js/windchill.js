/*let temphi = ;
let templo = ;*/

let t =  parseFloat(document.getElementById(''));
let s = 17;

if (t <= 50 && s >= 4.8) {
    let chill = 35.74 + 0.6215*t - 35.75*(s**0.16)+ 0.4275*t*(s**0.16);
    chill = chill.toFixed(2);
    document.getElementById('windChill').textContent = chill + '\u00B0';
}
else {
    document.getElementById('windChill').textContent = "N/A";
}
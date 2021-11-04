const friday = document.querySelector('.breakfast')

let gettingTheDate = new Date();
let  dayOfTheWeek = gettingTheDate.getDay();
if (dayOfTheWeek == 5) {
    friday.classList.toggle('breakfast-gone');
}



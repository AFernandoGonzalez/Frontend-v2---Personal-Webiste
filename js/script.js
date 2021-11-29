//Navbar

const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})


// Footer Current Year
var date = new Date(); 
var year = date.getFullYear();
document.getElementById('currentYear').innerHTML = year;
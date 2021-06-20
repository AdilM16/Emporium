
let logo = Array.from(document.querySelectorAll('#logo'));
let logo2 = Array.from(document.querySelectorAll('#imgDispNone'))
let darkMode = document.querySelector('#darkMode');
let navbarColor = document.querySelector('nav');
darkMode.addEventListener('click', ()=> {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    navbarColor.style.backgroundColor = '#333'
    logo.forEach(element => {
        element.setAttribute('src',('./public/img/logoBlanc.png'))    
    });
    logo2.forEach(element => {
        element.setAttribute('src',('./public/img/logoBlanc.png'))
    });
});

let lightMode = document.querySelector('#lightMode');

lightMode.addEventListener('click', ()=>{
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    navbarColor.style.backgroundColor = 'white'
    logo.forEach(element => {
        element.setAttribute('src',('./public/img/logo.png'))
    });
    logo2.forEach(element => {
        element.setAttribute('src',('./public/img/logo.png'))
    });
});

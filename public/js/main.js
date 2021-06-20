window.onscroll = ()=>{maFonction()};
let nav = document.querySelector('nav');
let sticky = nav.offsetTop;


let myLogo = document.querySelector('#imgDispNone');

maFonction= () => {
    if(window.pageYOffset >= sticky){
        nav.classList.add('sticky');
        myLogo.classList.remove('imgDispBlock')
    }else {
        nav.classList.remove('sticky');
        myLogo.classList.add('imgDispBlock')
    }
}

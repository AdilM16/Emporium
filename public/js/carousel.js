let slideIndex = 1;

currentSlide=(x)=> {
    showSlides(slideIndex = x);
}
showSlides=(x)=> {
    let i;
    let mySlider = document.getElementsByClassName("imgItem");
    let myBtn = document.getElementsByClassName("myButtons");
    if (x > mySlider.length) { slideIndex = 1 }
    if (x < 1) { slideIndex = mySlider.length }
    for (i = 0; i < myBtn.length; i++) {
        myBtn[i].className = myBtn[i].className.replace(" active", "");
    }
    for (i = 0; i < mySlider.length; i++) {
        mySlider[i].style.display = "none";
    }
    mySlider[slideIndex - 1].style.display = "block";
    myBtn[slideIndex - 1].className += " active";
}
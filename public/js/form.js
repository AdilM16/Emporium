let myCo = document.querySelector(".btnConex");
let myDivCo = document.querySelector("#co")
let maDiv = Array.from(document.querySelectorAll(".monHeader"));
let clear = document.querySelector("#clear")
let save = document.querySelector("#signUp")
let signUp = document.querySelector("#mySignUp")
let signIn = document.querySelector("#signIn")

clear.addEventListener("click", () => {
    myDivCo.style.display ="none";
    maDiv.forEach(element => {
        element.style.filter = "blur()"
    });
})

myCo.addEventListener("click", () => {
    myDivCo.style.display = "block";
    maDiv.forEach(element => {
        element.style.filter = "blur(10px)"
    });
})


save.addEventListener("click", () =>{
    signUp.style.display = "flex";
})

signIn.addEventListener("click", () =>{
    signUp.style.display = "none";
})
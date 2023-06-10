const button = document.getElementById("theme-btn");
const bodyMessage = document.getElementById("body-message");
const body = document.getElementById("body");


button.addEventListener("click", ()=>{
    bodyMessage.classList.toggle("dark");

    body.classList.toggle("dark");
});
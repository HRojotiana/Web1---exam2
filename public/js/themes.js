const button = document.getElementById("theme-btn");
const bodyMessage = document.getElementById("body-message");
const body = document.getElementById("body");
const chatFormContainer = document.querySelector('.chat-form-container');
const chatSideBar= document.querySelector(".chat-sidebar");
const chatHeader = document.querySelector(".chat-header");
const msg = document.getElementById("msg");
const h1 = document.querySelector(".h1");

button.addEventListener("click", ()=>{
    darkMode(bodyMessage,"dark");
    darkMode(body,"dark");
    darkMode(chatFormContainer,"input-color");
    darkMode(chatSideBar,"input-color");
    darkMode(chatHeader,"input-color");
    darkMode(msg,"input-color");
    darkMode(msg,"dark-color");
    darkMode(chatSideBar,"dark-color");
    darkMode(h1,"dark-color");
});

function darkMode(e,cl) {
    e.classList.toggle(cl);
}

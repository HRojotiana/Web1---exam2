const indexButton = document.getElementById("theme-btn-index");
const h1 = document.querySelector(".h1");
const glass = document.querySelector(".glass");
const joinBtn = document.querySelector(".btn");
const indexBody = document.querySelector(".index-body");
const joinContainer = document.querySelector(".join-container");
const color = document.querySelector(".color");
const roomColor = document.querySelector(".room-color");
const username = document.getElementById("username");
const room = document.getElementById("room");

indexButton.addEventListener("click", () => {
    darkMode(glass,"dark-glass");//dark-glass
    darkMode(indexBody,"dark");//dark
    darkMode(joinBtn,"dark-btn");//dark-btn
    darkMode(joinContainer,"dark-join-container");//dark-join-container
    darkMode(color, "dark-color");
    darkMode(roomColor, "dark-color");//dark-color
    darkMode(h1, "dark-color");//dark-color
    darkMode(username,"input-color");//input-color
    darkMode(room,"input-color");
});

function darkMode(e,cl) {
    e.classList.toggle(cl);
}

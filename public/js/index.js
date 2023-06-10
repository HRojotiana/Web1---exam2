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
    darkMode(glass,"dark-glass");
    darkMode(indexBody,"dark");
    darkMode(joinBtn,"dark-btn");
    darkMode(joinContainer,"dark-join-container");
    darkMode(color, "dark-color");
    darkMode(roomColor, "dark-color");
    darkMode(h1, "dark-color");
    darkMode(username,"input-color");
    darkMode(room,"input-color");
    darkMode(username,"dark-color");
    darkMode(room,"dark-color");
});

function darkMode(e,cl) {
    e.classList.toggle(cl);
}

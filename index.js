const yesBtn = document.getElementById("yesBtn");
let count = 0
const noBtn = document.getElementById("noBtn");
const pressedBtn = document.getElementById("pressed");

let currentWith = noBtn.offsetWidth;
let currentHeight = noBtn.offsetHeight;


function yesFunction() {
    window.location.href = "yas.html";
}

noBtn.addEventListener('click', () => {
    count++;
    
    pressedBtn.textContent = "Button Pressed";

    console.log(count);

    currentWith += 1000;
    currentHeight += 12;

});

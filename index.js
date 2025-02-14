const yesBtn = document.getElementById("yesBtn");
let count = 0
const noBtn = document.getElementById("noBtn");
const pressedBtn = document.getElementById("pressed");

let noBtncurrentWith = noBtn.offsetWidth;
let noBtncurrentHeight = noBtn.offsetHeight;
let yesBtncurrentWidth = yesBtn.offsetWidth;
let yesBtncurrentHeight = yesBtn.offsetHeight;

let yesBtncurrentFontSize = parseFloat(window.getComputedStyle(noBtn).getPropertyValue("font-size"));


function yesFunction() {
    window.location.href = "yas.html";
}

noBtn.addEventListener('click', () => {
    count++;
    
    console.log(count);

    noBtncurrentWith += 12;
    noBtncurrentHeight += 12;

    yesBtncurrentWidth -= 12;
    yesBtncurrentHeight -= 12;
    yesBtncurrentFontSize -= 12;

    noBtn.style.width = `${noBtncurrentWith}px`;
    noBtn.style.height = `${noBtncurrentHeight}px`;

    yesBtn.style.width = `${yesBtncurrentWidth}px`;
    yesBtn.style.height = `${yesBtncurrentHeight}px`;
    yesBtn.style.fontSize = `${yesBtncurrentFontSize}px`;


});

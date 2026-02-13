const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const letterContent = document.getElementById("letter-content");
const proceedBtn = document.getElementById("proceed-btn");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

proceedBtn.addEventListener("click", () => {
    letterContent.style.display = "none";
    title.style.display = "block";
    catImg.style.display = "block";
    buttons.style.display = "flex";
    document.querySelector(".letter-window").classList.add("with-window");
});

// Changed from "mouseover" to "click" for better mobile support
noBtn.addEventListener("click", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    const gifs = ["kitt.gif", "cat_dance.gif", "capyy.gif"];
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    const catStyle = window.getComputedStyle(catImg);
    const width = catStyle.width;
    const height = catStyle.height;

    gifs.forEach((gif, index) => {
        const img = document.createElement("img");
        img.src = gif;
        if (index === 1) {
            img.style.width = (parseFloat(width) * 0.8) + 'px';
        } else {
            img.style.width = width;
        }
        img.style.height = height;
        img.style.margin = "0 10px";
        container.appendChild(img);
    });

    catImg.parentNode.replaceChild(container, catImg);

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
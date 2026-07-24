// Elements
const loading = document.getElementById("loading");
const intro = document.getElementById("intro");
const typewriter = document.getElementById("typewriter");
const continueBtn = document.getElementById("continueBtn");

// 3 seconds loading
setTimeout(() => {
    loading.style.display = "none";
    intro.classList.remove("hidden");

    startTyping();

}, 3000);


// Typewriter Effect

const text = "Hey Protap...";

let index = 0;

function startTyping(){

    const timer = setInterval(() => {

        typewriter.textContent += text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(timer);

        }

    },150);

}


// Continue Button

continueBtn.addEventListener("click",()=>{

    alert("🎁 The surprise is coming...");

});

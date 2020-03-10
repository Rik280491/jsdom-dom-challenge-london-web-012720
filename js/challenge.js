const counter = document.getElementById("counter")
const heart_button = document.getElementById('heart'); 
const plus_button = document.getElementById('plus'); 
const minus_button = document.getElementById('minus');
const pause_button = document.getElementById('pause'); 
const likes_button = document.getElementsByClassName('likes')[0];
const lists = document.getElementById('list');

 let timer; 
 
 const startTimer = () => {
     counter.innerText++;
 }

document.addEventListener("DOMContentLoaded", function() {
    timer = setInterval(startTimer, 1000)
})

const plus_button_handler = () => {
    currentCount = parseInt(counter.innerText, 10) + 1;
    counter.innerText = currentCount;
}

const minus_button_handler = () => {
    counter.innerText = parseInt(counter.innerText, 10) - 1; 
}

const heart_button_handler = () => {
    element = document.createElement('li')
    element.innerText = `This ${counter.innerText} has been liked.`
   lists.append(element)
}

const disablebuttons = () => {
    plus_button.disabled = true;
    minus_button.disabled = true;
    heart_button.disabled = true;
    console.log("hello")
}
const pause_button_handler = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
        pause.innerText = "resume"
        disablebuttons()   
    }
    else {
        timer = window.setInterval(startTimer, 1000)
    
        
}

plus_button.addEventListener("click", plus_button_handler)
minus_button.addEventListener("click", minus_button_handler)
heart_button.addEventListener("click", heart_button_handler)
pause_button.addEventListener("click", pause_button_handler)



 
 
 
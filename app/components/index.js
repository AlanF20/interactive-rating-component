import ThanksCard from "./ThanksCard.js"
import ErrorFeed from "./ErrorFeed.js";

const submit = document.querySelector(".main__submit")
const buttons = document.querySelectorAll(".main__rating-button")
let feedbackValue = 0;
let incrementNoDuplicateError = 0;

for(const button of buttons){
    button.addEventListener("click", ()=>{  
        colorButtons();
        feedbackValue = button.textContent;
        button.style.background = "var(--Orange)"
        button.style.color = "white"
    })
}
const colorButtons =()=>{
    for(const button of buttons){
        button.style.backgroundColor = "#313a48";
        button.style.color = "var(--Light-Grey)";
    }  
}
submit.addEventListener("click", ()=>{
    incrementNoDuplicateError++;
    const $main = document.querySelector(".main");
    if(feedbackValue === 0){
        if(incrementNoDuplicateError === 1){
            return $main.insertAdjacentElement("beforeend", ErrorFeed());
        }
    }else{
        $main.innerHTML= "";
        $main.appendChild(ThanksCard(feedbackValue))
    }
});
const mobileBlueBtns = document.querySelector(".acc-btns");
const ShowBar = document.querySelector(".fa-bars");
const mobileBlue = document.getElementById("mobile-blue");
const logBtn  = document.getElementById("logBtn");
const mobilelookGood = document.querySelector(".webspeech-cont");
const signBtn = document.getElementById("SignBtn");
const getStartedBtn = document.getElementById("getStarted");
const shortenClick = document.getElementById("shortenClick");
const linkInput = document.getElementById("linkShorter");
const copyBtn = document.getElementById("state-btn1");
// let outPut = document.getElementById("output1");
const Integrate = document.querySelector(".shorter-Down");
console.log(shortenClick);

const  inputVal = () => {
  if(linkInput.value.trim() === ""){
    linkInput.placeholder = "input is empty"
    linkInput.style.border = "2px solid red"
  }else{
    linkInput.placeholder = " "
    linkInput.style.border = " "
  }
}
shortenClick.addEventListener("click",  inputVal);

ShowBar.addEventListener("click", function() {
    if (mobileBlueBtns.style.display === "none") {
      mobileBlueBtns.style.display = "block"
      mobileBlue.style.display = "block"
      mobilelookGood.style.position = "relative"
      mobilelookGood.style.bottom = "6em"
    } else {
      mobileBlueBtns.style.display = "none"
      mobileBlue.style.display = "none"
      mobilelookGood.style.position = "relative"
      mobilelookGood.style.bottom = "-15em"
      Integrate.style.position = "absolute"
      Integrate.style.top = "58em"
    }
  });
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 420 ) {
        const listItems = document.querySelectorAll("#mobile-blue li");
        listItems.forEach(function(item) {
          item.addEventListener("mouseover", function() {
            item.style.color = "var(--VeryDarkViolet)";
          });
          item.addEventListener("mouseout", function() {
            item.style.color = "var(--GrayishViolet)";
          });
        });
        
        function addEventListeners(element, mouseoverAction, mouseoutAction) {
            element.addEventListener("mouseover", mouseoverAction);
            element.addEventListener("mouseout", mouseoutAction);
          }
          
          addEventListeners(logBtn, () => {
            logBtn.style.color = "var(--VeryDarkViolet)";
          }, () => {
            logBtn.style.color = "var(--GrayishViolet)";
          });
          
          addEventListeners(signBtn, () => {
            signBtn.style.backgroundColor = "#99e3e2";
          }, () => {
            signBtn.style.backgroundColor = "var(--Cyan)";
          });
          addEventListeners(getStartedBtn, () => {
            getStartedBtn.style.backgroundColor = "#99e3e2";
          }, () => {
            getStartedBtn.style.backgroundColor = "var(--Cyan)";
          });
          addEventListeners(shortenClick, () => {
            shortenClick.style.backgroundColor = "#99e3e2";
          }, () => {
            shortenClick.style.backgroundColor = "var(--Cyan)";
          });
        } 
  });
   
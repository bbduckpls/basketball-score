// more stretch goals: add new game button, highlight the leader, add more counters, change the design

// HOME //

// home scoring
let homeScore = document.getElementById("home-score")
let homeBase = 0

function winningTeam() {
  if (homeBase > guestBase) {
    homeScore.style.boxShadow = "0 0 10px #EEEEEE"
    guestScore.style.boxShadow = ""
  }
  else if (homeBase === guestBase) {
    homeScore.style.boxShadow = ""
    guestScore.style.boxShadow = ""
  }
  else {
    homeScore.style.boxShadow = ""
    guestScore.style.boxShadow = "0 0 10px #EEEEEE"
  }
}

function homeOne() {
    homeBase += 1
    homeScore.textContent = homeBase
    winningTeam()
}

function homeTwo() {
    homeBase += 2
    homeScore.textContent = homeBase
    winningTeam()
}

function homeThree() {
    homeBase += 3
    homeScore.textContent = homeBase
    winningTeam()
}

// home foul
let homeFoulCount = document.getElementById("home-foul")
let homeFoulBase = 0

function homeFoul() {
    if (homeFoulBase === 4) return; // stop count at 4
    homeFoulBase += 1
    homeFoulCount.textContent = homeFoulBase
}

// home timeout
let homeToCount = document.getElementById("home-to")
let homeToBase = 0

function homeTo() {
    if (homeToBase === 7) return; // stop count at 7
    homeToBase += 1
    homeToCount.textContent = homeToBase
}

// GUEST //

// guest scoring
let guestScore = document.getElementById("guest-score")
let guestBase = 0

function guestOne() {
    guestBase += 1
    guestScore.textContent = guestBase
    winningTeam()
}

function guestTwo() {
    guestBase += 2
    guestScore.textContent = guestBase
    winningTeam()
}

function guestThree() {
    guestBase += 3
    guestScore.textContent = guestBase
    winningTeam()
}

// guest foul
let guestFoulCount = document.getElementById("guest-foul")
let guestFoulBase = 0

function guestFoul() {
    if (guestFoulBase === 4) return; // stop count at 4
    guestFoulBase += 1
    guestFoulCount.textContent = guestFoulBase
}

// guest timeout
let guestToCount = document.getElementById("guest-to")
let guestToBase = 0

function guestTo() {
    if (guestToBase === 7) return; // stop count at 7
    guestToBase += 1
    guestToCount.textContent = guestToBase
}



// timer
// Defines identifiers for accessing HTML elements
const startButton = document.getElementById("start-btn"),
      pauseButton = document.getElementById("pause-btn"),
      unpauseButton = document.getElementById("continue-btn"),
      counterDiv = document.getElementById("timer-display");
      resetButton = document.getElementById("reset-btn")

// Adds listeners and declares global variables
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pauseTimer);
unpauseButton.addEventListener('click', runTimer);
resetButton.addEventListener('click', reset);
let totalSeconds; // global variable to count down total seconds
let timer; // global variable for setInterval and clearInterval 

//Disables buttons that are not needed yet
disable(pauseButton);
disable(unpauseButton);


// Defines functions that get the minutes and seconds for display
function getMinutes(totalSeconds){
  return Math.floor(totalSeconds / 60); // Gets quotient rounded down 
}

function getSeconds(totalSeconds){
 let seconds = totalSeconds % 60; // Gets remainder after division
 return (seconds < 10 ? "0" + seconds : seconds) // Inserts "0" if needed
}


// Defines functions that manipulate the countdown
function start(){
  totalSeconds = 12 * 60; // Sets initial value of totalSeconds based on user input
  counterDiv.innerHTML = getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Initializes display
  // disable(startButton); // Toggles buttons
  runTimer();
}

function runTimer(){
    timer = setInterval(tick, 1000);
    disable(unpauseButton); 
    enable(pauseButton); // Toggles buttons
}

function reset(){
  totalSeconds = 12 * 60; // Sets initial value of totalSeconds based on user input
  counterDiv.innerHTML = getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Initializes display
  clearInterval(timer)
}

function tick(){
  if(totalSeconds > 0){
    totalSeconds--; // Decreases total seconds by one
    counterDiv.innerHTML = getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Updates display
  }
  else{
    // The timer has reached zero. Let the user start again. 
    
    enable(startButton);
    disable(pauseButton); 
    disable(unpauseButton);
  }
}

function pauseTimer(){
  // Stops calling `tick` and toggles buttons
  clearInterval(timer);
  disable(pauseButton); 
  enable(unpauseButton);
}

// Defines functions to disable and re-enable HTML elements
function disable(element){ element.setAttribute("disabled",""); }
function enable(element){ element.removeAttribute("disabled"); }

function resetNumbers() {
  homeScore.textContent = homeBase = 0
  homeToCount.textContent = homeToBase = 0
  homeFoulCount.textContent = homeFoulBase = 0
  guestScore.textContent = guestBase = 0
  guestToCount.textContent = guestToBase = 0
  guestFoulCount.textContent = guestFoulBase = 0
  homeScore.style.boxShadow = ""
  guestScore.style.boxShadow = ""
}

function newGame() {
  reset();
  resetNumbers();
}
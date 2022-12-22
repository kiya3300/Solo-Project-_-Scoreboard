//     for home count
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

//    for guest count
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

// for home score
function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

// for guest score 
function increaseguestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increaseguestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseguestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
////// show and hide location 
let region = document.querySelector('.regions')
function showLoc() {
    region.style.display = 'flex'
}
function hideLoc() {
    region.style.display = 'none'
}

//////country flag

let country1 = document.querySelector('.country1')
let country2 = document.querySelector('.country2')
country1.onclick = () =>{
    country1.style.display = 'none'
    country2.style.display = 'block'
}
country2.onclick = () =>{
    country1.style.display = 'block'
    country2.style.display = 'none'
}


const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const hero = document.querySelector('.hero');

scrollRightBtn.addEventListener('click', () => {
  hero.scrollBy({
    left: 1000, 
    behavior: 'smooth'
  });
});

scrollLeftBtn.addEventListener('click', () => {
  hero.scrollBy({
    left: -1000, 
    behavior: 'smooth'
  });
});
let take = document.querySelector('.take')
let leave = document.querySelector('.leave')
let takeLoc = document.querySelector('.take__location button')

take.onclick = () => {
    take.style.background = 'white'
    leave.style.background = 'transparent'
    takeLoc.textContent = "Yetkazib berish manzilini tanlang"
}
leave.onclick = () => {
    take.style.background = 'transparent'
    leave.style.background = 'white'
    takeLoc.textContent = 'Filialni tanlang'
}
///// card 1 start 
let pitsaWrapper = document.querySelector('.pitsa__wrapper')
function showwrapper() {
    pitsaWrapper.style.display = 'flex'
}
function hidewrapper() {
    pitsaWrapper.style.display = 'none'
}
///// card 1 end 
///// card 2 start 
let showcardtwo = document.getElementById('showcardtwo')
function show2Card() {
  showcardtwo.style.display = 'flex'
}
function hide2Card() {
  showcardtwo.style.display = 'none'
}
///// card 2 end 
///// card 3 start
let showthere = document.getElementById('showcardthere')
function thereshow() {
    showthere.style.display = 'flex'
}
function therehide() {
    showthere.style.display = 'none'
}
///// card 3 end

///// card 4 star 
let cardfour = document.getElementById('showcardfour')
function cardfourshow() {
  cardfour.style.display = 'flex'
}
function cardfourhide() {
  cardfour.style.display = 'none'
}
///// card 4 end 


///// card 5 start 
let showcardfive = document.getElementById('showcardfive')
function showFive() {
  showcardfive.style.display = 'flex'
}
function hideFive() {
  showcardfive.style.display = 'none'
}
///// card 5 end


///// card 6 start
let showcardSix = document.getElementById('showcardSix')
function showSix() {
  showcardSix.style.display = 'flex'
}
function hideSix() {
  showcardSix.style.display = 'none'
}
///// card 6 end

///// card 7 start
let showcardSeven = document.getElementById('showcardSeven')
function showSeven() {
  showcardSeven.style.display = 'flex'
}
function hideSeven() {
  showcardSeven.style.display = 'none'
}
///// card 7 end

///// card 8 start 
let showcardEyt = document.getElementById('showcardEyt')
function showeyt() {
  showcardEyt.style.display = 'flex'
}
function hideeyt() {
  showcardEyt.style.display = 'none'
}
///// card 8 end
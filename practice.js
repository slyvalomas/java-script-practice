//---------------------------------------------------------------------------------------------------------------
const div= document.querySelector("div")
div.innerHTML=`
<input placeholder='enter your name' class='name' type='text'>
<p class='p' ></p>
<button class='btn enter'>enter</button>`
const name1 =document.querySelector(".name")
const p = document.querySelector(".p")
const enter=document.querySelector(".enter")
let greetings = ["Welcome to our community!",
"Hello and thank you for joining us!",
"We're excited to have you on board!",
"Greetings! Your presence is appreciated.",
"A warm welcome to our newest member!",
"Thank you for choosing our services!",
"Welcome! We hope you enjoy your time here.",
"Hello and welcome to our platform!",
"It's a pleasure to have you with us!",
"A big welcome to you! Let's get started."
]
function nameRy(prase,name,hi){

  if (name){
    let i = Math.floor(Math.random()*hi.length)
    console.log(i)
    prase.textContent= ` ${hi[i]} mr ${name.value}`
    
    
}else{
  prase.textContent="please enter your name"
}
  
}
enter.addEventListener("click",function(){
  
  nameRy(p,name1,greetings)
})
//----------------------------------------------------------------------------------------------------------------
function add(x,y){
  let i=x+y
  return i
  
}

console.log(add(3,4))
console.log(add(9,102))


const body =[ "1",
              "2",
              "3",
              "4",
              "5" 
]

function getBody(arr){
  return arr[0] //arr for  body[0] as an argument
}
console.log(getBody(body))
//+-----------------------------------------------------------------------------------------------
const saveTap =document.querySelector(".tap")
const taps = [
  {url:"https://linkedin.com"}
]
function saveing(tapI){
  ul_el.innerHTML = "";

  for (let i = 0; i < tapI.length; i++) {
    ul_el.innerHTML += `
      <li class='list-a'>
        <a class='links' target='_blank' href='${tapI[i].url}'>${tapI[i].url}</a>
      </li>`;
  }

  localStorage.setItem("myleads", JSON.stringify(tapI.map(obj => obj.url)));
 
}

saveTap.addEventListener("click",function(){
  saveing(taps)
})
//----------------------------------------------------------------------------------------------------------------

const footer__btn = document.querySelector(".footer__btn");

console.log(footer__btn)
const footer__sittings = document.querySelector(".container__btn");
console.log(footer__sittings)
footer__btn.addEventListener("click", function(){
    if (footer__sittings.style.display === "block"){
        footer__sittings.style.display = "none";
    } else{
        footer__sittings.style.display = "block";
    }
});

//----------------------------------------------------------------------------------------------------------------

const player ="me"
const game=""
const opponent=""
let point=""
let hasWon=""
if (hasWon===true){
    console.log(`${player} got ${point} points and win the ${game} game`)
}
let array=[ 
    "Coffee",
    "Laptop",
    "Mountain",
    "Book",
    "Sunflower",
    "Guitar",
    "Beach",
    "Galaxy",
    "Chocolate",
    "Soccer ball"
]
function ray(aho){
    for (let i = 0 ; i <array.length;i++){
        console.log(array[i])
        localStorage.setItem("gods",`the god athena is one of the most intelligent gods of all the mythology that ever exist `)
    }
}


function deleteLocalStorage(){
    localStorage.clear()
}

const local=localStorage.getItem("gods","array")
console.log(local)

//----------------------------------------------------------------------------------------------------------------
function add(x,y){
  return x+y
  
}
add(5,8)
let data = [
    {
        player:"jane",
        score:52
    },
    {
        player:"mark",
        score:41
    }
]

const logo=document.querySelector(".logo")
logo.addEventListener("click",function(){
    const jane=`the player ${data[0].player} have ${data[1].score} points`
    console.log(jane)
    localStorage.clear()
    localStorage.setItem("logo",jane)
    
})
console.log(localStorage.getItem("logo"))// basically the logo footer is an <a></a> when you click on it, it refreshes the page so the console will be gone That is why I did take the console log  out of the click function and use the local storage to check if I did make it right 

//----------------------------------------------------------------------------------------------------------------














const largestCountriesBySize = [
    { country: "Russia", size: 17098242 },
    { country: "Canada", size: 9976140 },
    { country: "United States", size: 9833517 },
    { country: "China", size: 9596960 },
    { country: "Brazil", size: 8515767 },
];
const largestCountriesByPopulation = [
    { country: "China", population: 1444216107 },
    { country: "India", population: 1393409038 },
    { country: "United States", population: 332915073 },
    { country: "Indonesia", population: 276361783 },
    { country: "Pakistan", population: 225199937 },
];


function generate(size,pop){
    for (let i = 0 ; i < pop.length;i++){
        const bla2=`the ${i+1} largest country by population is`
        console.log(`${bla2} ${pop[i].country} and it have ${pop[i].population}  in the population`)
        const bla1=`the ${i+1} largest country by size is`
        console.log(`${bla1} ${size[i].country} and its size is ${size[i].size}km²`)
    }
}
  //----------------------------------------------------------------------------------------------------------------

generate(largestCountriesBySize,largestCountriesByPopulation)

const img=[
    {
        photo:"../main-picture/footer__btn.png",
        nameOf: "brin"
    },

    {
        photo:"../main-picture/Los_Pollos.webp",
        nameOf: "josipi"
    },
    {
        photo:"../main-picture/footer__btn.png",
        nameOf: "youssef"
    }
    
]

const section = document.querySelector(".section")
function  image() {  
    for (let i = 0 ; i < img.length;i++){
        section.innerHTML += `<img class="proImage" width="100px"  height="100px" src="${img[i].photo}"><p>${img[i].nameOf}</p>
        
        </img>`
        const proImage= document.querySelector(".proImage")
        proImage.style.padding=""
        
        section.style.flexFlow="column wrap"
        section.style.display="flex"
        proImage.style.justifyContent="center"
        section.style.alignItems="center"
        section.style.margin=" 1rem  0em"
        section.style.textTransform="uppercase "
}}

function images(){
    image()
}
images()
//----------------------------------------------------------------------------------------------------------------









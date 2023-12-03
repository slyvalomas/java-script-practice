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

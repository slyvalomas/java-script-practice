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
console.log("Hello from JavaScript");
var myStr= "im a \"double quoated\" string inside \"double quotes\"";
console.log(myStr);
myStr =`im a "double quoted" string inside "double quotes"`;
console.log(myStr);
myStr=`<h1>hi there im java script \n and also im ${myStr}</h1>`;
const body =document.querySelector("body");
body.innerHTML=myStr;
body.textContent+="this is first line \n this is the second line \n and this is the third line";
body.style.fontSize="0.75rem";
var  newStr = "brahim is " + "a MEN that have 0$ for now";
newStr += " im poor";
console.log(newStr);
var myName;
const firstName="brahim";
const lastName="abdelmoumen";
myName = firstName + " " +lastName ;
 //or `${firstName} ${lastName}
myStr="hello my name is " +myName+"how are you ?" // or `hello my name is ${myName} how are you ?`
console.log(myStr)
body.textContent+= " "
if (myName===myName.toUpperCase){
    console.log("this name is uppercase")
    console.log(myName.length)
}else {
    console.log("this name is not uppercase") 
    console.log(myName.length)
    for (let i=0 ; i<myName.length ; i++){
        body.textContent+=myName[i]
    }
    
}
function whats(netName,netSchool,netGme,netWorth,network){
    var  result = "" ;
    result = ` hello my name is ${netName} and ${netSchool} my favorit game is ${netGme} my networth is ${netWorth} and i know many pepole and they are ${network}`
    return result
}
console.log(whats("brahim","je suis un etudiant sur ecole supirure de thechnology casablanca ESTC","GOD OF WAR","-1MAD","solo for life",))
// lets creat somthing like facebook (not that close just for time becuase i will just add text)
function post(name ,context,text,likes,comments){
    let postPack = body.innerHTML=`
    <div>
    <h1 class="name">${name}<h2/>
    <h2 class="context">${context}<h2/>
    <h3 class="text">${text}<h3/>
    <p class="likes">${likes}<p/>
    <p class="comments">${comments}<p/>
    <div/>
    `
    

    }
var array =[  //small database no algoritms xd no tracking just random im compating with facebook 
    {name:"brahim" ,context:"CAN 2023",text:"i think morocco can get to the sumi final in this AFCON!(they will win )",likes:"50k",comments:"viva algeria"
    },
    {name:"ahmed" ,context:"freecodecamp",text:"what is world cup?",likes:"50k",comments:"viva algeria"
    },
    {name:"yessin" ,context:"world cup",text:"i think morocco can get to the sumi final in this qatar world cup!(they will win )",likes:5000,comments:"viva algeria"
    },
]

function creatRandomPost(){
    let x = Math.floor(Math.random()*array.length) 
    post(array[x].name ,array[x].context,array[x].text,array[x].likes,array[x].comments);
    
   
}
// function creatmultiplePosts(){
//     for (let x=0;x<array.length;x++){
//     let postPack = body.innerHTML=`
//     <div>
//     <h1 class="name">${name}<h2/>
//     <h2 class="context">${context}<h2/>
//     <h3 class="text">${text}<h3/>
//     <p class="likes">${likes}<p/>
//     <p class="comments">${comments}<p/>
//     <div/>
//     `    
//     } 
    
//oh waw a new guy joined 
 array.push({name:"the guy's name " ,context:"first post!",text:"hi there im using facebook!",likes:5000,comments:"viva algeria"//viva algeria is represents the anoying algeria national team lovers you can see them in facebook crying about gasama and toko ekambi goal on the 120min that cick them out of the world cup califications 
    })
    
    
// }
// creatmultiplePosts()
creatRandomPost()
//oh no the guy is band becuase he is a scammer so all hes posts are removed from the database
array.pop()
//oh brahim removed his post because morocco win the afcon a
array.shift()
//oh it was just a mistake it was just miss click 
//
array.unshift({name:"brahim" ,context:"CAN 2023",text:"i think morocco can get to the sumi final in this AFCON!(they will win )",likes:"50k",comments:"viva algeria"
    })
creatRandomPost()
// so if i will recreate facebook page i just need to recreat the ineerHTML on post() without touching the database or anything becuase the array is always fix until the guy update the text or someone else ad a comment but should i put the array on local storage or on a real data base when i will recreate facebook on the next project
function creatRandomNmber(RandomNmber){
    return Math.random()*RandomNmber;
}
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(creatRandomNmber(7))
function add(x,y){
    return x + y
}
console.log(add(6,2))

function plusInfinte(x,y){
    return x / y
}
console.log(plusInfinte(1,0));

//--------------------------------------------------------------------------------------------------



let globale = 15;
function local(){
    var localism = 10;
} ;
function ceckGlobalism(){
    
    let message = ""
    if (typeof global !="undefined" ){
        message =`global: ${globale}` 
    }
    if (typeof localism != "undefined"){
        message = `localism:${localism}`
    }else{
        message=`localism is undefinde`
    }
    console.log(message)
    
}
ceckGlobalism()
console.log(JSON.stringify(array))
localStorage.setItem("dataBase" , JSON.stringify(array))
function trues(istrue){
    if (istrue===true){//or just(istrue)
    return "yes its true"
        
    }else {
        return " no its false!"
}
}


function falses(isfase){
     if (isfase !=true){
        return "yes its false "
    }else {
        return "no its true"
    }
}

console.log(trues(true))
console.log(falses(false))
function test(x){
    if (x===5){
        return "equal"
    }else{
        return "not equal"
    }
    
}
console.log(test(8))
console.log("Hello from JavaScript");
let val  =21
if (val<=50 && val>=25){
    console.log ("yes")
}else {
    console.log("no")
};
if (val>20 || val<10){
    console.log ("outside of 10-20")
}else {
    console.log("inside of 10-20")
}
function lessthan(carim){
    if (carim<10 && carim>=5){
        return "less than 10"
    }else if (carim<5){
        return "less than 5"
    }else{
        return "grater than or equal to  10"
    }
}

console.log(lessthan(2))

function lessthan2(xbox){
    if ( xbox<=5){
        return "less than 5"
    }else if (xbox<10){
        return "less than 10"
    }else{
        return "grater than or equal to  10"
    }
}

console.log(lessthan2(7))
function fontSize(x){
    if(x<10){
        return "very small"
    }else if(x<16){
        return "small"
    }else if(x<20){
        return "meduim"
    }else if(x<25){
        return "large"
    }else{
        return "very large"
    }
}
console.log(fontSize(34))
function switshing(val){
    let message = "";
    switch(val){
        case 1:
        message="alpha"
        break;
        case 2:
        message="beta"
        break;
        case 3:
        message="gamma"
        break;
        case 4,5,6,7,8,9,10:
        message="delta"
        break;
        default:
        message = "nothing im tired"
    }
    
    
    console.log(message)
}
switshing(10)
var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break; 
        case 10:
        case "JACK":
        case "QUEEN":
        case "KING":
        case "ACE":
        count--;
        break;
        
    }
    var holdbet="hold"
    if (count>0){
        holdbet="bet"
    }
    return count + " " + holdbet
}
function ccs(card){
    if (card===2||card===3||card===4||card===5||card===6){
        count++;
    }else if(card===10||
             card==="JACK"||
             card=== "QUEEN"||
             card ==="KING"||
             card==="ACE") {
        count--;
    }
      var holdbet="hold"
    if (count>0){
        holdbet="bet"
    }
    return count + " " + holdbet
}
console.log(cc("KING"))
console.log(ccs("JACK"))

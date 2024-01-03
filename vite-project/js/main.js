  import {array} from "./array";
import { DOMSelectors } from "./doms";

//Math.floor(Math.random() * 648) + 1

let input = "muk"
let lives = 7
let usedHints = []
let guessList = []
let wins = 0 
let losses = 0
let games = 0
let spriteMode = 0
let sprites = ""

DOMSelectors.gal.insertAdjacentHTML("beforeend",`        <div id="rules">
<p>1: You Have 7 Guesses To </p>
<p>1: EA</p>
</div>
</div>`)

async function test(choice,guess){
  console.log(choice)
  try{
  const response = await fetch(choice.u + input + choice.back)
  const data = await response.json(); 
  const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/` + input)
  const data2 = await response2.json(); 
  if(guess == data2.name){
    wins++
    games++
    newGame("Win: ",data2.name,data2.id,data2)
    return wins
  }
  else if(lives == 0){
    games++
    newGame("Lose: ",data2.name,data2.id,data2)
  }
  else{
      let newG = guess
    if(guess == "porygon-z"||guess == "mr-mime"||guess == "ho-oh"){
       newG = guess.replaceAll("-","")
    }
    else{
       newG = guess.split("-")[0] 
    }
    if(guessList.includes(newG) == false){
      guessList.push(newG)
    DOMSelectors.silo.insertAdjacentHTML("beforeend",`<img id="${sprites}" class="guess" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${newG}.gif"alt="${newG}"></img>`)
  }
  lastJuan(data,choice,0)
}}
catch(error){
  console.log(error)
  uhoh()
}}


//Add average guess win

function lastJuan(start,choice,p){ 
  if(start === false){
    test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
    return start  
  }
  if(start == "" || start == undefined || start === true){
    insert(choice.alttext,"","","hinttext")
    return start
  }
  if(choice.route[p] != undefined){
    if(choice.route[p] == "random"){
      if(choice.rand == "start"){
        lastJuan(Object.values(start)[Math.floor(Math.random() * Object.keys(start).length)],choice,p+1)
      }
      else{
      Object.keys(start).forEach(key =>{
        if(key == choice.rand){
          let steve = (Object.values(start)[Object.keys(start).indexOf(choice.rand)])
          lastJuan(steve[Math.floor(Math.random() * Object.keys(steve).length)],choice,p+1)
        }})}}
  Object.keys(start).forEach(key => {
    if(key.includes(choice.route[p])){
      let next = Object.values(start)[Object.keys(start).indexOf(key)]
      lastJuan(next,choice,p+1)}})}
else{
  if(choice.unitc == true){
    insert(choice.text,start/10,choice.tend,"hinttext")
  }
  else{
  insert(choice.text,start,choice.tend,"hinttext")
}}}




function insert(text,va,end,id){
let ratio = "Winrate: " + Math.round(wins/games*10000)/100 + "%"
if(ratio == "Winrate: NaN%"){
  ratio = "No Games Played"
}
let comb = text + va + end
if(usedHints.includes(comb) == false){
  console.log(va + id)
document.getElementById("hints").insertAdjacentHTML("beforeend", `<h2 class="${id}">${comb.replaceAll('-', ' ').toUpperCase()}</h2>`)
lives--
clear([DOMSelectors.lives])
document.getElementById("lives").insertAdjacentHTML("beforeend", `<p id="livecount">Lives: ${lives+1}</p><p>Wins: ${wins}</p><p>Losses: ${games-wins}</p><p>Games: ${games}</p><p>${ratio}</p>    <form id="ea">
<button id="sprites">Sprite Switch</button>
</form>`)
document.getElementById("sprites").addEventListener("click", function(event) {
  event.preventDefault()
  spriteSwitch()
})
usedHints.push(comb)
}
else{
test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
}
}
        

stuff.style.display = "none";
let html = DOMSelectors.every.innerHTML

function restart(text,pokeName,id){
  guessList = []
  usedHints = []
  lives = 7
  clear([every,hints,silo])
if(id != null){
console.log(null)}
DOMSelectors.every.insertAdjacentHTML("beforeend", `
  <h2 id="starttext">${text} </h2>
  <form class="cool">
  <button id="start">Start Game!</button>
 `)

document.getElementById("start").addEventListener("click", function(event) {
  event.preventDefault()
  DOMSelectors.every.innerHTML = html
  if(pokemonList.length == 649){
    dropSer()
  }
  clear([gal])
  stuff.style.display = "block";
  entry()
  document.getElementById("button2").addEventListener("click", function(event) {
    event.preventDefault()
    if(guessList.includes(document.getElementById("value").value) == false && document.getElementById("value").value != ""){
    test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
  }
  else{
    console.log("Already Guessed!")
    if(document.getElementById("mess") == null){
      document.getElementById("lives").insertAdjacentHTML("afterbegin",`<div id="mess"><h2 id="error">Guess A Valid Pokemon!</h2></div>`)
    }

  }
})
})
}


function clear(list){
  list.forEach(item => {
    if(item != null){
      console.log(item)
      item.innerHTML = ""}
    })
  }

async function entry(){
  try{
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/` + input)
  const data = await response.json(); 
  let i = 0
  while(data.flavor_text_entries[i].language.name != "en"){
    i++
  }
  let censored = data.flavor_text_entries[i].flavor_text.toUpperCase().replaceAll(data.name.toUpperCase(),"XXXX").replaceAll(""," ")
  insert("Pokedex Entry: ", censored,"","entry")
}
catch(error){
  console.log(error + " 173")
  uhoh()
}
}


let pokemonList = []

 async function collect(){
  console.log("ea")
  try {
    for(let f=1;f<650;f++){
      let URL = `https://pokeapi.co/api/v2/pokemon/${f}`
      const response = await fetch(URL)
      const data = await response.json();
      pokemonList.push(data.name)
      console.log(data.name)
      }
      pokemonList.sort()
      console.log(document.getElementById("dropdown"))
      if(document.getElementById("dropdown") != null){dropSer()}
    }
    catch (error) { 
      console.log(error)
          }}

          collect()

 function dropSer(){
  document.getElementById("dropdown").innerHTML=""
    pokemonList.forEach(pokemon => {
      document.getElementById("dropdown").insertAdjacentHTML("beforeend", `<option value="${pokemon}">${pokemon.toUpperCase()}</option>`) 
    })
    document.getElementById("dropdown").addEventListener("click", function(event) {document.getElementById("value").value = document.getElementById("dropdown").value })
}


function newGame(text,name,id,data){
  let showName = name.split("-")[0]
  let pokeName = name.split("-")[0]
  if(name == "porygon-z"||name == "mr-mime"||name == "ho-oh"){
    pokeName = name
    showName = name.replaceAll("-","")
  }
  let complete = text + " " + name
  stuff.style.display = "none";
  clear([every])
  document.getElementById("every").insertAdjacentHTML("beforeend", `<h2>${text} ${name}</h2> `) 
  //DOMSelectors.gal.insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><img class="img" id="${pokeName}" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${showName}.gif"</img></a>`)
  DOMSelectors.gal.insertAdjacentHTML("beforeend", `<div id="winbox" ><a href="https://pokemondb.net/pokedex/${pokeName}"><img class="img" id="${pokeName}" src="${data.sprites.other.dream_world.front_default}" alt="${pokeName}"</img></a>
  <div id="win">
  <div class="wintext" id="stats">
  <p>Stat 1: 150</p>
  <p>Stat 2: 21</p>
  <p>Stat 3: 255</p>
  <p>Stat 4: 32</p>
  <p>Stat 5: 12</p>
  <p>Stat 6: 150</p>
</div>
`)
  input = Math.floor(Math.random()* 648) + 1
  if(name == "porygon-z"||name == "mr-mime"){
    restart(complete,name,id)
  }
  else{
    restart(complete,name.split("-")[0],id)
  }
}



restart("Press The Button Below To Start!","azumaril",null)


function spriteSwitch(){
  // pokemonList.forEach(mon => {  lifeHasSmitedMe(mon)})
  document.body.classList.add("mode" + spriteMode%2 )
  document.body.classList.remove("mode" + (spriteMode+1)%2 )
   sprites = ["gen5",""][spriteMode%2]
   DOMSelectors.silo.innerHTML = ""
   guessList.forEach(guess => {
    console.log(`https://play.pokemonshowdown.com/sprites/${sprites}ani/${guess}.gif`)
    DOMSelectors.silo.insertAdjacentHTML("beforeend",`<img id="${sprites}" class="guess" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${guess}.gif" alt="${guess}"></img>`)
  })
   spriteMode++
}

function uhoh(){
  document.body.innerHTML = "well shoot I messed"
}


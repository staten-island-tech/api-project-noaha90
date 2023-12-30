import {array} from "./array";
import { DOMSelectors } from "./doms";

//Math.floor(Math.random() * 648) + 1

if(1 == true){
  console.log("no way")
}

let input = "joltik"
let lives = 6
let usedHints = []
let guessList = []
let wins = 0 
let losses = 0
let games = 0

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
    newGame("Win: ",data2.name,data2.id)
    return wins
  }
  else if(lives == 0){
    games++
    newGame("Lose: ",data2.name,data2.id)
  }
  else{
    if(guessList.includes(guess) == false){
    if(guess == "porygon-z"||guess == "mr-mime"){
      DOMSelectors.silo.insertAdjacentHTML("beforeend",`<img class="guess" src="https://play.pokemonshowdown.com/sprites/gen5ani/${guess.replaceAll("-","")}.gif"></img>`)
    }
    else{
      DOMSelectors.silo.insertAdjacentHTML("beforeend",`<img class="guess" src="https://play.pokemonshowdown.com/sprites/gen5ani/${guess.split("-")[0] }.gif"></img>`)
    }
  }
  guessList.push(guess)
  lastJuan(data,choice,0)
}}
catch(error){
  console.log(error)
}}


function lastJuan(start,choice,p){ 
  console.log(start)
  if(start == false){
    test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
    return start
  }
  if(start == "" || start == undefined || start == true && start != 1){
    // screw you john javascript for making it that 1 is equal to true
    console.log("ea")
    insert(choice.alttext,"","")
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
    console.log(start)
    insert(choice.text,start/10,choice.tend)
  }
  else{
  insert(choice.text,start,choice.tend)
}}}




function insert(text,va,end){
  console.log(va)
let ratio = "Winrate: " + Math.round(wins/games*10000)/100 + "%"
if(ratio == "Winrate: NaN%"){
  ratio = "No Games Played"
}
let comb = text + va + end
if(usedHints.includes(comb) == false){
document.getElementById("hints").insertAdjacentHTML("beforeend", `<h1 class="hinttext">${comb.replaceAll('-', ' ').toUpperCase()}</h1>`)
lives--
clear([DOMSelectors.lives])
document.getElementById("lives").insertAdjacentHTML("beforeend", `<p id="livecount">Lives: ${lives+1}</p><p>Wins: ${wins}</p><p>Losses: ${games-wins}</p><p>Games: ${games}</p><p>${ratio}</p>`)
usedHints.push(comb)
}
else{
test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
}
}
        

stuff.style.display = "none";
let html = DOMSelectors.every.innerHTML

function restart(text,pokeName,id){
  usedHints = guessList = []
  lives = 6
  clear([every,gal,hints,silo])
if(id != null){
DOMSelectors.gal.insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><img class="img" id="${pokeName}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"></img></a>`)}
DOMSelectors.every.insertAdjacentHTML("beforeend", `
  <h1>${text} </h1>
  <form class="cool">
  <button id="start">Start Game!</button>
  </form>`)
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
    //guessList.includes(document.getElementById("value").value) == false && document.getElementById("value").value != ""
    if(12!=1){
    test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
  }
  else{
    console.log("Already Guessed!")
  }
})
})
}


function clear(list){
  list.forEach(item => {
    item.innerHTML = ""
  })
}

async function entry(){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/` + input)
  const data = await response.json(); 
  let i = 0
  while(data.flavor_text_entries[i].language.name != "en"){
    i++
  }
  let censored = data.flavor_text_entries[i].flavor_text.toUpperCase().replaceAll(data.name.toUpperCase(),"XXXX").replaceAll(""," ")
  insert("Pokedex Entry: ", censored,"")
}


let pokemonList = []

 async function collect(){
  try {
    for(let f=1;f<650;f++){
      let URL = `https://pokeapi.co/api/v2/pokemon/${f}`
      const response = await fetch(URL)
      const data = await response.json();
      pokemonList.push(data.name)
      }
      pokemonList.sort()
      dropSer()
    }
    catch (error) { 
      console.log("error")
          }}

          collect()

async function dropSer(){
 try{ 
  clear([dropdown])
    pokemonList.forEach(pokemon => {
      document.getElementById("dropdown").insertAdjacentHTML("beforeend", `<option value="${pokemon}">${pokemon.toUpperCase()}</option>`) 
    })
    document.getElementById("dropdown").addEventListener("click", function(event) {document.getElementById("value").value = document.getElementById("dropdown").value })
  } 
  catch (error) { 
    console.log("Waiting For Game Start...")
        }
}


function newGame(text,name,id){
  let complete = text + " " + name
  stuff.style.display = "none";
  clear([every])
  document.getElementById("every").insertAdjacentHTML("beforeend", `<h1>${text} ${name}</h1> `) 
  input = Math.floor(Math.random()* 648) + 1
  if(name == "porygon-z"||name == "mr-mime"){
    restart(complete,name,id)
  }
  else{
    restart(complete,name.split("-")[0],id)
  }
}



restart("Press The Button Below To Start!","azumaril",null)


  import {array} from "./array";
import { DOMSelectors } from "./doms";



//Math.floor(Math.random() * 648) + 1

let input = "eevee"
let lives = 7
let usedHints = []
let guessList = []
let execpt = ["ho-oh","mr-mime","porygon-z"]
let wins = 0 
let losses = 0
let games = 0
let spriteMode = 0
let sprites = ""
let music = ["https://d2rfm1awsiaf19.cloudfront.net/b8knmp%2Ffile%2Ffbd94ffb76b69696ad1d10c92c0cc45d_fd5784c9c1c6b7cc8a37dd34a1eee2c9.mp3?response-content-disposition=inline%3Bfilename%3D%22fbd94ffb76b69696ad1d10c92c0cc45d_fd5784c9c1c6b7cc8a37dd34a1eee2c9.mp3%22%3B&response-content-type=audio%2Fmpeg&Expires=1704348029&Signature=MBcCOOJ0mnFdLW~QdQwUv-Ximlk3OOdaSdEoezqEHQYCQfe~KSa7c2X2cRKKcfyqVuE32bSJwwOHbsdeD8H~RWfW0Ow0FT97dNhqpu-q~Rza39oqbPkjqx5ENmLgJ5J0zSD-PSc0jWlqpG2cMmV~jaYSOHmXeU1I8So4sicl0j-wwyJJDSlDHP9Usenj0f9~ADV9RnM9EKAeUFoEXTNLsxB2A04QpZjxLyU8T9mU-4R606wR0Qz-lpik7J6ugpRKtQZzyvxjQgFxOm9dmk4sJqxjOB~F75de7KD0-ZuAieMujz5W0mvrK08-4CePqRUuaSjqAKi-98CWsdHTm2gv0g__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ","https://d609glervfwtx.cloudfront.net/b234vp%2Ffile%2F50ba4646083f4bf11bf510d81388e340_0efe5929312ddb3e5959d36e03d0bf45.mp3?response-content-disposition=inline%3Bfilename%3D%2250ba4646083f4bf11bf510d81388e340_0efe5929312ddb3e5959d36e03d0bf45.mp3%22%3B&response-content-type=audio%2Fmpeg&Expires=1704359063&Signature=griGDqrD5GOI1xYh4uWpNlE4248rUvRPKAfvUXTYBFmdjpsB3MXctKW6cpHHPhoQU5kC9OlTyz5oQK47or6QcdGcYmHCHv4LWVviqSrEK0bm9yaytm1vMrfceRk6kha4XpWQyPLDxYm5dNY8qYDTpVH3yZqlCHMBhe73vhd-6zSJvjHDylaaXC7zfNAmT7OeHdW2Hgsw33f95URG2GahjBiz1PT~XEX6z06BQCTtNa9xe-~n5T4Tp7hZlfREj0oTnd0UAm5yXQeQMcD9jmA9N7ahr2K85kVk279Mr5XFYFbw4LjYvnNQAqQfpCGJ3AaHHeMBksK-85bloMLf4mBc4Q__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ","https://d1fujncubipnn4.cloudfront.net/u5ugwp%2Ffile%2F3e75ba7a09829a2bb83ef0f0fd913c9c_1c20b618baa608f428cf85d7c81f8795.mp3?response-content-disposition=inline%3Bfilename%3D%223e75ba7a09829a2bb83ef0f0fd913c9c_1c20b618baa608f428cf85d7c81f8795.mp3%22%3B&response-content-type=audio%2Fmpeg&Expires=1704360816&Signature=VVy1DpO1R8orMkRE50IrFN3FVCuskpCd80esTSo-ZdPP2mPmc-PuDSea0ptV55jxDb4UmRCOOM1x9LROBu9iaJVYYh6uTTNXB5MZo0HtxkRiFPjLOOg0mtX4BH7am3zOqMjTXNtxshwUNTWq9tBKrJONBD-X11nMkibPNzasncF9QVwYithASRzofMMbEsArFy28TRqViCdBPKpRrqKPJOY-iLqd~G~CYzO6L5u2lpnEhEY59BCxQyMPz8P3MQF02XOTwhG5pRhh6tXf9UnFkMIAbZ7gwXqSrwEniZiJRZGcMzQE1tmEwZBGK~cbADUcCVqNMNYWCFIdlBA8qqufQQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ","https://play.pokemonshowdown.com/audio/hgss-kanto-trainer.mp3","https://play.pokemonshowdown.com/audio/oras-rival.mp3"]

DOMSelectors.gal.insertAdjacentHTML("beforeend",`        <div id="rules">
<p>1: You Have 7 Guesses To </p>
<p>1: EA</p>
</div>
</div>`)


async function test(choice,guess){
  try{
  const response = await fetch(choice.u + input + choice.back)
  const data = await response.json(); 
  const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/` + input)
  const data2 = await response2.json(); 
  guess = guess.toLowerCase()
  if(guess == data2.name|| execpt.includes(data2.name) != true && guess == data2.name.split("-")[0]){
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
      guessList.push(newG.toLowerCase())
    DOMSelectors.silo.insertAdjacentHTML("beforeend",`<img id="${sprites}" class="guess" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${newG}.gif"alt="${newG}"></img>`)
  }
  lastJuan(data,choice,0)
}}
catch(error){
  uhoh()
}}


//Add average guess win

function lastJuan(start,choice,p){ 
  if(start == undefined ){
    console.log(choice)
    uhoh()}
  if(start == "" ||start === false){
    test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
    return start  
  }
  if(start == undefined || start === true){
    insert(choice.alttext,"","","hinttext",choice.split)
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
    insert(choice.text,start/10,choice.tend,"hinttext",choice.split)
  }
  else{
  insert(choice.text,start,choice.tend,"hinttext",choice.split)
}}}




function insert(text,va,end,id,split){
let ratio = "Winrate: " + Math.round(wins/games*10000)/100 + "%"
if(ratio == "Winrate: NaN%"){
  ratio = "No Games Played"
}
let comb = text + va + end
if(usedHints.includes(comb) == false){
    document.getElementById("hints").insertAdjacentHTML("beforeend", `<h2 class="${id}">${comb.replaceAll('-', split).toUpperCase()}</h2>`)
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
DOMSelectors.every.insertAdjacentHTML("beforeend", `
<div id="car">
<h2 id="starttext">${text} </h2>
  <form class="cool">
  <div id="things"></div>
  <button id="start">Start Game!</button></div>
<div id="far"></div>
 `)

document.getElementById("start").addEventListener("click", function(event) {
  event.preventDefault()
  if(id===null){
    let sound = new Audio(music[Math.floor(Math.random() * music.length)])
    sound.loop = true
    sound.play()
  }
  DOMSelectors.every.innerHTML = html
  if(pokemonList.length == 649){
    dropSer()
  }
  clear([gal])
  stuff.style.display = "block";
  entry()
  document.getElementById("button2").addEventListener("click", function(event) {
    event.preventDefault()
    if(guessList.includes(document.getElementById("value").value.toLowerCase()) == false && document.getElementById("value").value != ""){
    test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
  }
  else{
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
  insert("Pokedex Entry: ", censored,"","entry"," ")
}
catch(error){
  uhoh()
}
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
      if(document.getElementById("dropdown") != null){dropSer()}
    }
    catch (error) { 
      console.log(error)
          }}

          collect()

 function dropSer(){
  document.getElementById("dropdown").innerHTML=""
    pokemonList.forEach(pokemon => {
      if(execpt.includes(pokemon)){
        document.getElementById("dropdown").insertAdjacentHTML("beforeend", `<option value="${pokemon}">${pokemon.toUpperCase()}</option>`)}
      else{
        document.getElementById("dropdown").insertAdjacentHTML("beforeend", `<option value="${pokemon.toUpperCase().split("-")[0]}">${pokemon.toUpperCase().split("-")[0]}</option>`) 
       }
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
    DOMSelectors.silo.insertAdjacentHTML("beforeend",`<img id="${sprites}" class="guess" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${guess}.gif" alt="${guess}"></img>`)
  })
   spriteMode++
}

function uhoh(){
  document.body.innerHTML = "well shoot I messed"
}


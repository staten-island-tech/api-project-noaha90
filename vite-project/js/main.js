import {array} from "./array";
import { DOMSelectors } from "./doms";



//Math.floor(Math.random() * 648) + 1

let input = 31
let lives = 7
let usedHints = []
let guessList = []
let execpt = ["ho-oh","mr-mime","porygon-z","nidoran-m","nidoran-f"]
let wins = 0 
let losses = 0
let games = 0
let spriteMode = 0
let sprites = ""
let music = ["https://play.pokemonshowdown.com/audio/xd-miror-b.ogg","https://play.pokemonshowdown.com/audio/colosseum-miror-b.mp3","https://play.pokemonshowdown.com/audio/hgss-kanto-trainer.ogg","https://www.protoman.com/Music/Music/Pokemon%20Yellow%20%28GB%29%20%28Line-in%20recording%29/Bicycle.mp3","https://www.protoman.com/Music/Music/Pokemon%20Yellow%20%28GB%29%20%28Line-in%20recording%29/Route%203.mp3","https://www.protoman.com/Music/Music/Super%20Smash%20Brothers/12%20Saffron%20City.mp3","https://vgmsite.com/soundtracks/pokemon-black-and-white-2-super-music-collection/labsvvmlxx/1-12.%20Virbank%20City.mp3","https://vgmsite.com/soundtracks/pokemon-heartgold-and-soulsilver/irxlmxkmau/033%20Azalea%20Town.mp3","https://vgmsite.com/soundtracks/pokemon-heartgold-and-soulsilver/wlmyetxcqk/022%20Violet%20City.mp3"]

document.getElementById("winbox").insertAdjacentHTML("beforeend",` 
<p>1: You Have 7 Guesses To </p>
<p>1: EA</p>
`)


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
      console.log(document.getElementById("silo"))
    document.getElementById("silo").insertAdjacentHTML("beforeend",`<img id="${sprites}" class="guess" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${newG}.gif"alt="${newG}"></img>`)
  }
  lastJuan(data,choice,0)
}}
catch(error){
  uhoh(error)
}}


//Add average guess win

function lastJuan(start,choice,p){ 
  console.log(start)
  if(start == undefined ){
    console.log(choice)
  }
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
clear([document.getElementById("lives")])
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
      


function restart(text,pokeName,id){
  guessList = []
  usedHints = []
  lives = 7

document.getElementById("winbox").insertAdjacentHTML("beforeend", `
<div id="gform">
  <form class="cool">
  <div id="things"></div>
  <button id="start">Start Game!</button></div>
 `)
 document.getElementById("options").insertAdjacentHTML("afterbegin", `
<p>Pellentesque habitant moes eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
 `)

document.getElementById("start").addEventListener("click", function(event) {
  event.preventDefault()
  clear([gal])
  document.getElementById("gal").insertAdjacentHTML("beforeend",`   
  <div id="stuff">
  <div id="left">
  <div id="lives">
  
  </div>  
  <div id="monster">
  <p>Pellentesque, metus</p>

  </div>  
  </div>
  <div id="mid"><form id="every">
  <label> .</label>
  <input type="text" id="value" autocomplete="off" autocapitalize="on"><br>
  <label> .</label>
  <select id="dropdown">
    <option value="">Waiting For API to Load...</option>
  </select><br>
  <input type="submit" id="button2" value="Guess">
</form> </div>
  <div id="right">  
  <div id="hints">
  


  </div>
  </div>
  <div id="silo"></div>
  </div>
 `)
  //   <div id="silo"></div>
  //</div>
  if(id===null){
    let sound = new Audio(music[Math.floor(Math.random() * music.length)])
    sound.loop = true
    sound.play()
  }
  if(pokemonList.length == 649){
    dropSer()
  }

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
  uhoh(error)
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
  document.getElementById("gal").innerHTML = ""
  document.getElementById("gal").insertAdjacentHTML("afterbegin", `     
  <div id="top">
    <div id="options"></div>
        <div id="winbox"></div>
</div>
<div id="bottom">

</div>`)
  let showName = name.split("-")[0]
  let pokeName = name.split("-")[0]
  if(name == "porygon-z"||name == "mr-mime"||name == "ho-oh"){
    pokeName = name
    showName = name.replaceAll("-","")
  }
  let complete = text + " " + name
 console.log(data.stats)
  // document.getElementById("every").insertAdjacentHTML("beforeend", `<h2>${text} ${name}</h2> `) 
  //DOMSelectors.gal.insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><img class="img" id="${pokeName}" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${showName}.gif"</img></a>`)
  document.getElementById("options").insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><img class="img" id="${pokeName}" src="${data.sprites.other.dream_world.front_default}" alt="${pokeName}"</img></a>
  <div id="win">
  <div class="wintext" id="stats">
  <p>Stat 1: ${data.stats[0].base_stat}</p>
  <p>Stat 2: ${data.stats[1].base_stat}</p>
  <p>Stat 3: ${data.stats[2].base_stat}</p>
  <p>Stat 4: ${data.stats[3].base_stat}</p>
  <p>Stat 5: ${data.stats[4].base_stat}</p>
  <p>Stat 6: ${data.stats[5].base_stat}</p>

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
   document.getElementById("silo").innerHTML = ""
   guessList.forEach(guess => {
    document.getElementById("silo").insertAdjacentHTML("beforeend",`<img id="${sprites}" class="guess" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${guess}.gif" alt="${guess}"></img>`)
  })
   spriteMode++
}

function uhoh(e){
  console.log(e)
}


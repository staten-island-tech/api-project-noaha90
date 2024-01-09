import {array} from "./array";
import { DOMSelectors } from "./doms";



//Math.floor(Math.random() * 648) + 1


let input = Math.floor(Math.random() * 385) + 1
let lives = 7
let usedHints = []
let guessList = []
let execpt = ["ho-oh","mr-mime","porygon-z","nidoran-m","nidoran-f"]
let wins, games, spriteMode
wins = games = spriteMode = 0
let sprites = ""


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
    newGame("You Won! It's ",data2.name,data2.id,data2)
    return wins
  }
  else if(lives == 0){
    games++
    newGame("The Pokemon Was ",data2.name,data2.id,data2)
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


function lastJuan(start,choice,p,content){ 
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
    return start/10
  }
  else{
  insert(choice.text,start,choice.tend,"hinttext",choice.split)
  return start/10
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
document.getElementById("lives").insertAdjacentHTML("beforeend", `<p id="livecount">Lives: ${lives+1}</p><p>Wins: ${wins}</p><p>Losses: ${games-wins}</p><p>Games: ${games}</p><p>${ratio}</p>   `)
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

document.getElementById("options").insertAdjacentHTML("beforeend", `
<div id="gform">
  <form class="cool">
  <div id="things"></div>
  <button id="start">Start Game!</button><button id="sprites">Sprite Switch</button></div>
</form>`)
document.getElementById("sprites").addEventListener("click", function(event) {
  event.preventDefault()
  spriteSwitch()
})
  



document.getElementById("start").addEventListener("click", function(event) {
  let sound
  event.preventDefault()
  clear([gal])
  document.getElementById("gal").insertAdjacentHTML("beforeend",`   
  <div id="left">
  <div id="lives">
  
  </div>  
  <div id="monster">
  <form id="control">
  <input type="radio" class="check"  name="music" value="https://dl.vgmdownloads.com/soundtracks/pokemon-black-and-white-super-music-collection/ajqygfxmtt/2-23.%20Opelucid%20City%20Gym%20%28Pok%C3%A9mon%20Black%29.mp3"><label>Opelucid City (Black)</label><br>
  <input type="radio" class="check" name="music" value="https://dl.vgmdownloads.com/soundtracks/pokemon-black-and-white-super-music-collection/bfucohurbq/2-24.%20Opelucid%20City%20Gym%20%28Pok%C3%A9mon%20White%29.mp3"><label>Opelucid City (White)</label><br>
  <input type="radio" class="check"  name="music" value="https://vgmsite.com/soundtracks/pokemon-omega-ruby-and-alpha-sapphire-nintendo-3ds-gamerip/rkkmogqn/103%20-%20Zinnia.mp3"><label>Zinna's Theme</label><br>
  <input type="radio" class="check"  name="music" value="https://dl.vgmdownloads.com/soundtracks/pok-mon-diamond-pok-mon-pearl-super-music-collection-2006/bayywwhhmv/81%20-%20Mt.%20Coronet.mp3"><label>Mt. Coronet</label><br>
  <input type="radio" class="check"  name="music" value="  https://dl.vgmdownloads.com/soundtracks/pok-mon-heartgold-pok-mon-soulsilver-greatest-sounds-2009/niaceafdpi/1-15.%20Pok%C3%A9mon%20Center.mp3"><label>Pokemon Center (HGSS)</label><br>
  <input type="radio" class="check"  name="music" value=""><label>No Music</label><br>
</form> 
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
</form> <div id="ibor"><img class="blur" id="blur" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${input}.svg"></div>
</div></div>
  <div id="right">  
  <div id="hints">
  </div>
  <div id="silo">
  </div>
  </div>
 `)

  document.getElementById("monster").insertAdjacentHTML("beforeend", `<form id="ea">
<button id="sprites">Sprite Switch</button>
</form>`)
document.getElementById("sprites").addEventListener("click", function(event) {
  event.preventDefault()
  spriteSwitch()
})
  if(pokemonList.length == 649){
    dropSer()
  }

  entry()
  document.getElementById("control").addEventListener("click", function(event) {
    if(sound != undefined){    sound.pause()}
  document.querySelectorAll(".check").forEach(check => {
    if(check.checked){
        console.log("ea")
      console.log(check.value)
      sound = new Audio(check.value)
      console.log(sound)
      sound.play()
      sound.loop = true
    }
  })
})
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
</div>
`)
  let pokeName = name.split("-")[0]
  if(name == "porygon-z"||name == "mr-mime"||name == "ho-oh"){
    pokeName = name
    showName = name.replaceAll("-","")
  }
  let complete = text + " " + name
  
  document.getElementById("options").insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><img class="img" id="${pokeName}" src="${data.sprites.other.dream_world.front_default}" alt="${pokeName}"</img></a>
  <div id="cont"> 
  <div id="title">${text}${data.name.toUpperCase()}</div>
  <div id="info">
  <div id="types"></div>
  <div class="wintext" id="stats">
 
</div>
</div>
</div>
`)

data.stats.forEach(stat =>{document.getElementById("stats").insertAdjacentHTML("beforeend",`<p>${stat.stat.name.toUpperCase().replaceAll("-"," ")}: ${stat.base_stat}</p>`)})
for(let i =0; i < data.types.length; i++){
  document.getElementById("types").insertAdjacentHTML("beforeend",`<p>Type ${i + 1}: ${data.types[i].type.name}</p>`)
}
for(let i =0; i < data.abilities.length; i++){
  document.getElementById("types").insertAdjacentHTML("beforeend",`<p>Ability ${i + 1}: ${data.abilities[i].ability.name.replaceAll("-"," ")}</p>`)
}
infosert([{info: data.weight/10, text:"Weight:",back:"kg"},{info: data.height/10, text:"Height:",back:"m"},{info: data.id, text:"Pokedex Number:",back:""}])


  input = Math.floor(Math.random()* 385) + 1
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
   if(document.getElementById("silo") != null){
   document.getElementById("silo").innerHTML = ""
   guessList.forEach(guess => {
    document.getElementById("silo").insertAdjacentHTML("beforeend",`<img id="${sprites}" class="guess" src="https://play.pokemonshowdown.com/sprites/${sprites}ani/${guess}.gif" alt="${guess}"></img>`)
  })}
   spriteMode++
}

function uhoh(e){
  console.log(e)
  document.body.innerHTML = ""
  document.body.insertAdjacentHTML("beforeend",`<h1 id="wompwomp">${e}</h1>`)
}

function infosert(ob){
  for(let i =0; i < ob.length; i++){
    document.getElementById("types").insertAdjacentHTML("beforeend",`<p>${ob[i].text} ${ob[i].info} ${ob[i].back}</p>`)
  }
}
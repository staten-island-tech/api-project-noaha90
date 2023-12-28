import {array} from "./array";


async function test(choice,guess){
  console.log(input)
  try{
  const response = await fetch(choice.u + input + choice.back)
  const data = await response.json(); 
  const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/` + input)
  const data2 = await response2.json(); 
  if(guess == data2.name){
    newGame("Win: ",data.name,data.id)
  }
  else if(lives == 0){
    newGame("Lose: ",data2.name,data.id)
  }
  else{
    if(data == ""){
      insert(choice.alttext,"")
    }
    else{
    lastJuan(data,choice,0)
  }
}}
catch(error){
  console.log(error)
}
}


function lastJuan(start,choice,p){ 
  if(choice.route[p] != undefined){
    if(choice.route[p] == "random"){
      if(choice.rand == "start"){
        console.log(Object.values(start)[Math.floor(Math.random() * Object.keys(start).length)])
        lastJuan(Object.values(start)[Math.floor(Math.random() * Object.keys(start).length)],choice,p+1)
      }
      Object.keys(start).forEach(key =>{
        if(key == choice.rand){
          console.log(key)
          let steve = (Object.values(start)[Object.keys(start).indexOf(choice.rand)])
          lastJuan(steve[Math.floor(Math.random() * Object.keys(steve).length)],choice,p+1)
        }
      })
    }
  Object.keys(start).forEach(key => {
    if(key.includes(choice.route[p])){
      let next = Object.values(start)[Object.keys(start).indexOf(key)]
      lastJuan(next,choice,p+1)}})}
else{
  insert(choice.text,start)
}
}




function insert(text,va,data){
let comb = text + va
if(usedHints.includes(comb) == false){
document.getElementById("hints").insertAdjacentHTML("beforeend", `<h1 class="hinttext">${comb}</h1>`)
lives--
document.getElementsByClassName(".livetext").innerHTML
document.getElementById("lives").textContent = lives + 1
usedHints.push(comb)
}
else{
test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
}
}
        


const DOMSelectors = {
  button1: document.getElementById("start"),
  button2: document.getElementById("button2"),
  form: document.getElementById("value"),
  gal: document.getElementById("gal"),
  hints: document.getElementById("hints"),
  every: document.getElementById("every"),
}

stuff.style.display = "none";
let html = DOMSelectors.every.innerHTML
let completeList = false


function restart(text,pokeName,id){
  usedHints = []
  lives = 6
DOMSelectors.every.innerHTML = ""
DOMSelectors.gal.innerHTML = "" 
if(id != null){
DOMSelectors.gal.insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><img class="img" id="${pokeName}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"></img></a>`)}
document.getElementById("hints").innerHTML = ""
DOMSelectors.every.insertAdjacentHTML("beforeend", `
  <h1>${text} </h1>
  <form class="cool">
  <button id="start">Start Game!</button>
  </form>`)
document.getElementById("start").addEventListener("click", function(event) {
  event.preventDefault()
  document.getElementById("every").innerHTML = ""
  DOMSelectors.every.insertAdjacentHTML("beforeend", html)
  dropSer() 
  DOMSelectors.gal.innerHTML = ""
  stuff.style.display = "block";
  test(array[Math.floor(Math.random()* array.length)])
  console.log("e")
  document.getElementById("button2").addEventListener("click", function(event) {
    event.preventDefault()
    console.log("unova")
    test(array[Math.floor(Math.random()* array.length)],document.getElementById("value").value)
})
})
}

//Math.floor(Math.random() * 648) + 1
let input = Math.floor(Math.random() * 648) + 1
let lives = 6
let usedHints = []










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
 try{ document.getElementById("dropdown").innerHTML = ""
    pokemonList.forEach(pokemon => {
      document.getElementById("dropdown").insertAdjacentHTML("beforeend", `<option value="${pokemon}">${pokemon.toUpperCase()}</option>`) 
    })
    document.getElementById("dropdown").addEventListener("click", function(event) {document.getElementById("value").value = document.getElementById("dropdown").value })
  } 
  catch (error) { 
    console.log("Waiting For Game Start...")
        }
}



console.log(pokemonList)






function newGame(text,name,id){
  console.log(name)
  let complete = text + " " + name
  stuff.style.display = "none";
  DOMSelectors.every.innerHTML = ""
  document.getElementById("lives").innerHTML = ""
  document.getElementById("hints").innerHTML = ""
  document.getElementById("every").insertAdjacentHTML("beforeend", `<h1>${text} ${name}</h1> `) 
  input = Math.floor(Math.random()* 648) + 1
  if(name == "porygon-z"||name == "mr-mime"){
    let pokeName = name
    restart(complete,name,id)
  }
  else{
    restart(complete,name,id)
  }
}






restart("Press The Button Below To Start!","azumaril",null)


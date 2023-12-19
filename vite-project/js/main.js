const DOMSelectors = {
  button1: document.getElementById("start"),
  button2: document.getElementById("button2"),
  form: document.getElementById("value"),
  gal: document.getElementById("gal"),
  hints: document.getElementById("hints"),
  every: document.getElementById("every"),
}

let html = DOMSelectors.every.innerHTML
let completeList = false

function restart(text,pokeName,id){
  usedHints = []
  lives = 6
DOMSelectors.every.innerHTML = ""
DOMSelectors.gal.innerHTML = "" 
DOMSelectors.gal.insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><span class="imgbor"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"></img><img class="img" src="https://www.serebii.net/sunmoon/pokemon/${id}.png</img></a></span>
`)
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
  getData(input)
  stuff.style.display = "block";
  document.getElementById("button2").addEventListener("click", function(event) {
    event.preventDefault()
    console.log(document.getElementById("dropdown").value)
    getData(input,document.getElementById("value").value)
})
})
}


let input = Math.floor(Math.random() * 648) + 1
let lives = 6
let usedHints = []




async function getData(input,guess){
  let URL = `https://pokeapi.co/api/v2/pokemon/${input}`
  let areas = `https://pokeapi.co/api/v2/pokemon/${input}/encounters`
  let details = `https://pokeapi.co/api/v2/pokemon-species/${input}`
  let evo = `https://pokeapi.co/api/v2/pokemon-species/${input}`
  try {
      const response = await fetch(URL)
      const data = await response.json(); 
      const response2 = await fetch(areas)
      const data2 = await response2.json();
      const response3 = await fetch(details)
      const data3 = await response3.json();
      let total = 0
      
      cool(data,data2,data3,total,guess)
  } catch (error) { 
    console.log(error)

        }
 
}

function cool(data,data2,data3,total,guess){
      data.stats.forEach(stat =>{
        total = total + stat.base_stat
      })
      console.log(guess)
      let choices = [
        {
          data: data3.evolves_from_species != null,
          text: "This Pokemon's Has Evolved: ",
      },
          {
              data: data3.shape.name,
              text: "This Pokemon's Shape Is: ",
          },
          {
            data: data.types,
            text: "One Possible Type Of This Pokemon is ",
            route: ["type","name"],
        },
          {
            data: data3.capture_rate,
            text: "This Pokemon Has A Capture Rate Of: ",
        },
          {
            data: total,
            text: "This Pokemon Has A Base Stat Total Of ",
        },
      {
        data: data3.is_baby,
        text: "This Pokemon Is A Baby: ",
    },
          {
            data: data3.color.name,
            text: "This Pokemon's Color Is ",
        },
          {
            data: data2,
            text: "One Route This Pokemon Can Be Found In Is: ",
            route: ["location_area","name"],
            alt: "This Pokemon Cannot Be Found In The Wild",
        },
          {
              data: data.weight/10,   
              text: "The Weight of This Pokemon, in Kilograms, is ",
          },
          {
              data: data.abilities,
              text: "One Possible Ability Of This Pokemon is ",
              route: ["ability","name"],  
          },
          {
              data: data.moves,
              text: "One Possible Move Of This Pokemon is ",
              route: ["move","name"],
          },
          {
              data: data.height/10,
              text: "The Height of This Pokemon, in Meters, is ",
          },
          {
              data: data.held_items,
              text: "This Pokemon Can Be Found In The Wild Holding ",
              route: ["item","name"],
              alt: "This Pokemon Cannot Hold A Held Item In The Wild",
          },
          {
              data: data.id,
              text: "The Pokemon's National Dex Number is ",
          },
      ]
      console.log(data.name)
      if(guess === data.name){
        newGame("You Won! The Pokemon Is",data)
      }
  else if(lives < 0){
    newGame("You Lost :(. The Pokemon Was",data)
  }
  else{
    let pick = choices[Math.floor(Math.random() * choices.length)]
    if(typeof pick.data == "number"|| typeof pick.data == "string" || typeof pick.data == "boolean" || pick.data == "true"){
      console.log(pick.data)  
      insert(pick.text,pick.data,data)
    }
    else if(pick.data == ""){
      insert(pick.alt,"",data)
    }
    else{
    let ran = Math.floor(Math.random() * Object.keys(pick.data).length)
    lastOne(pick.data[ran],pick,0,data)
  }
}
}

function newGame(text,data){
  let complete = text + " " + data.name
  stuff.style.display = "none";
  DOMSelectors.every.innerHTML = ""
  document.getElementById("lives").innerHTML = ""
  document.getElementById("hints").innerHTML = ""
  document.getElementById("every").insertAdjacentHTML("beforeend", `<h1>${text} ${data.name}</h1> `) 
  input = Math.floor(Math.random()* 648) + 1
  if(data.name == "porygon-z"||data.name == "mr-mime"){
    let pokeName = data.name
    restart(complete,pokeName,data.id)
  }
  else{
    let pokeName = data.name.split('-')
    restart(complete,pokeName,data.id)
  // document.getElementById("gal").insertAdjacentHTML("beforeend", `<a href="https://pokemondb.net/pokedex/${pokeName}"><span class="imgbor"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img><img class="img" src="https://www.serebii.net/sunmoon/pokemon/${data.id}.png</img></a></span>`)
  }
}



function lastOne(start,pick,fi,data){
    Object.keys(start).forEach(key => {
      if(key.includes(pick.route[fi])){
        let i = Object.keys(start).indexOf(key)
        let next = Object.values(start)[i]
        if(typeof next == "object"){
          lastOne(next,pick,fi+1,data)
        }
        else{
          insert(pick.text,next,data)
        }}});}


function insert(text,va,data){
  let comb = text + va
  if(usedHints.includes(comb) == false){
  document.getElementById("hints").insertAdjacentHTML("beforeend", `<h1 class="hinttext">${comb}</h1>`)
 lives--
 document.getElementsByClassName(".livetext").innerHTML
 document.getElementById("lives").textContent = lives + 2
 usedHints.push(comb)
}
else{
  getData(input)
}
}


let pokemonList = []

 async function collect(){
  console.log("epic")
  try {
    for(let f=1;f<650;f++){
      let URL = `https://pokeapi.co/api/v2/pokemon/${f}`
      const response = await fetch(URL)
      const data = await response.json();
      pokemonList.push(data.name)
      console.log(data.name)
      }
      pokemonList.sort()
      dropSer()
    }
    catch (error) { 
      console.log("eaeaea")
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












restart("Press The Button Below To Start!","azumarill",184)
const DOMSelectors = {
  button1: document.getElementById("start"),
  button2: document.getElementById("button2"),
  form: document.getElementById("value"),
  gal: document.getElementById("gal"),
  hints: document.getElementById("hints"),
  every: document.getElementById("every"),
}

let html = DOMSelectors.every.innerHTML


function restart(){
  usedHints = []
  lives = 6
DOMSelectors.every.innerHTML = ""
document.getElementById("hints").innerHTML = ""
document.getElementById("hints").innerHTML = ""
DOMSelectors.every.insertAdjacentHTML("beforeend", `
  <h1>Press The Button Below To Start!</h1>
  <form class="cool">
  <button id="start">Start Game!</button>
  </form>`)
document.getElementById("start").addEventListener("click", function(event) {
  console.log("clicked")
  getData(input)
  event.preventDefault()
  document.getElementById("every").innerHTML = ""
  DOMSelectors.every.insertAdjacentHTML("beforeend", html)
  document.getElementById("button2").addEventListener("click", function(event) {
    event.preventDefault()
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
      document.querySelector("h1").textContent = "Error!"
        }
 
}

function cool(data,data2,data3,total,guess){
      data.stats.forEach(stat =>{
        total = total + stat.base_stat
      })
      let choices = [
          {
              data: data.types,
              text: "One Possible Type Of This Pokemon is ",
              route: ["type","name"],
          },
          {
            data: data3.egg_groups,
            text: "This Pokemon's Egg Group Is: ",
            route: ["name"]
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
      if(guess == data.name){
        newGame("You Won! The Pokemon Is",data)
      }
else{
  if(lives < 0){
    newGame("You Lost :(. The Pokemon Was",data)
  }
    let pick = choices[Math.floor(Math.random() * choices.length)]
    let ran = Math.floor(Math.random() * Object.keys(pick.data).length)
    if(typeof pick.data == "number"|| typeof pick.data == "string" || typeof pick.data == "boolean"){
      insert(pick.text,pick.data,data)
    }
    else if(pick.data == ""){
      insert(pick.alt,"",data)
    }
    else{
    lastOne(pick.data[ran],pick,0,data)
  }
  }
}

function newGame(text,data){
  DOMSelectors.every.innerHTML = ""
  document.getElementById("every").insertAdjacentHTML("beforeend", `<h1>${text} ${data.name}</h1> `) 
  document.getElementById("every").insertAdjacentHTML("beforeend", `<span class="imgbor"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img></span>`)
  input = Math.floor(Math.random()* 648) + 1
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
  console.log("insert" + lives)
  let comb = text + va
  if(usedHints.includes(comb) == false){
    if(lives < 6){
  document.getElementById("hints").insertAdjacentHTML("beforeend", `<h1 class="hinttext">${comb}</h1>`)
 lives--
 usedHints.push(comb)
}
  else{
    lives--
  }
}
else{
  getData(input)
}
}
































 async function fill(){
  for(let x=649;x>0;x--){
    console.log(x)
      let URL = `https://pokeapi.co/api/v2/pokemon/${x}`
      const response = await fetch(URL)
      const data = await response.json();
      document.getElementById("hints").insertAdjacentHTML("beforebegin", `<span class="imgbor" id="${data.name}"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img></span>`)
  }
  filler()
 }

 function filler(){
  console.log("Ea")
  document.querySelectorAll(".imgbor").forEach(img =>{
    if(img.id == "pikachu"){
      console.log(img.id)
    }
  } )
 }


restart()
const DOMSelectors = {
  button1: document.getElementById("start"),
  button2: document.getElementById("button2"),
  form: document.getElementById("value"),
  gal: document.getElementById("gal"),
  all: document.getElementById("all"),
}



// LOOK AT https://pokeapi.co/api/v2/pokemon-species/184/

let input = Math.floor(Math.random() * 648) + 1

function events(){
  input = input = Math.floor(Math.random() * 648) + 1
DOMSelectors.button1.addEventListener("click", function(event) {
  event.preventDefault()
  DOMSelectors.button1.remove()
})

DOMSelectors.button2.addEventListener("click", function(event) {
  event.preventDefault()
    getData(input,DOMSelectors.form.value)
})
}

events()
async function getData(input,guess){
  let URL = `https://pokeapi.co/api/v2/pokemon/${input}`
  let areas = `https://pokeapi.co/api/v2/pokemon/${input}/encounters`
  let details = `https://pokeapi.co/api/v2/pokemon-species/${input}`
  let evo = `https://pokeapi.co/api/v2/pokemon-species/${input}`
  try {
    console.log(input)
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
  console.log(Object.values(data3.egg_groups))
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
        document.querySelector("h1").textContent = "You Won! The Pokemon Is " + data.name
        input = Math.floor(Math.random() * 648) + 1
        res(data.name)
      }
      else{
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
let pokeList = []

function insert(text,va,data){
  let comb = text + va
  console.log(va)
  document.querySelector("h1").textContent = comb.replace("-"," ")
    DOMSelectors.gal.insertAdjacentHTML("afterend", `<span class="imgbor"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img></span>`)
 }

function res(name){
  document.getElementById("every").innerHTML = "";
  document.getElementById("every").insertAdjacentHTML("beforebegin", ` <h1>You Won! The Pokemon Was ${name}</h1>
  <form class="newgame">
      <button id="new">New Game?</button>
  </form>`)
  document.getElementById("new").addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("every").insertAdjacentHTML("beforebegin", `<form>
    <label for="fname">Name:</label><br>
    <input type="text" id="value"><br>
    <input type="submit" id="button2">
  </form>
<div class="container">
<h1>Press The Button Below To Start!</h1>
</div>
<form class="cool">
    <button id="start">Start Game!</button>
</form>
<div id="gal">
   
</div>`)
console.log("eaeae")
events()
  })
 
}
//  async function fill(){
//   for(let x=649;x>0;x--){
//     console.log(x)
//       let URL = `https://pokeapi.co/api/v2/pokemon/${x}`
//       const response = await fetch(URL)
//       const data = await response.json();
//       pokeList.push(data)
//       DOMSelectors.gal.insertAdjacentHTML("afterend", `<span class="imgbor" id="${data.name}"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img></span>`)
//   }
//   console.log(pokeList)
//   filler()
//  }

//  function filler(){
//   document.querySelectorAll(".imgbor").forEach(img =>{
//     if(img.id == "pikachu"){
//       console.log(img.id)
//     }
//   } )
//  }


 console.log("te")

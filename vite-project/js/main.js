const DOMSelectors = {
  button1: document.getElementById("start"),
  button2: document.getElementById("button2"),
  form: document.getElementById("value"),
  gal: document.getElementById("gal"),
}



DOMSelectors.button1.addEventListener("click", function(event) {
  event.preventDefault()
  let input = Math.floor(Math.random() * 1017)+1;
  getData(input)
})


DOMSelectors.button2.addEventListener("click", function(event) {
  event.preventDefault()
  let input = DOMSelectors.form.value
  getData(input)
})

async function getData(input,name){
  let URL = `https://pokeapi.co/api/v2/pokemon/${input}`
  try {
      const response = await fetch(URL)
      const data = await response.json();
      let choices = [
          {
              data: data.types,
              text: "One Possible Type Of This Pokemon is ",
          },
          {
              data: Math.round(data.weight) * .1,
              text: "The Weight of This Pokemon, in Kilograms, is ",
          },
          {
              data: data.abilities,
              text: "One Possible Ability Of This Pokemon is ",
          },
          {
              data: data.moves,
              text: "One Possible Move Of This Pokemon is ",
          },
          {
              data: (data.height) * .1,
              text: "The Height of This Pokemon, in Meters, is ",
          },
          {
              data: data.held_items,
              text: "This Pokemon Can Be Found In The Wild Holding ",
          },
          {
              data: data.id,
              text: "The Pokemon's National Dex Number is ",
          },
      ]
      let g = choices[Math.floor(Math.random() * choices.length)]
      let thing = g.data
      //can change this to be whatevers!!!!
      randomize(response, data, thing, g)
      let name = data.name
  } catch (error) {
      document.querySelector("h1").textContent = "Error!"
      document.querySelector("h2").textContent = "Check If You Spelled The Name Of The Pokemon Correctly"
  }
 
}

function randomize(response, data, thing, g){
  document.querySelector("h1").textContent = "The Pokemon Is: " + data.name.toUpperCase()
  DOMSelectors.gal.insertAdjacentHTML("afterend", `<span class="imgbor"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img></span>`)
  whichFun(thing,g)

}


console.log(URL)

let x = 1
let y = "1"


function whichFun(thing,g,ran){
  console.log(g)
  console.log(thing)
  if(typeof thing == ""){
    textChange(g.text, "has none!")
}
if(typeof thing == typeof y || typeof thing == typeof x){
  console.log("nob")
  textChange(g.text, thing)
}
else{
  let ran = Math.floor(Math.random() * Object.keys(thing).length);
  awesome(thing[ran],g)
}
}

function textChange(text,va){
  console.log(va)
  let comb = text + va
  console.log(comb)
  document.querySelector("h2").textContent = comb
}

function awesome(thing,g){
  let i = 0
  let nex = Object.values(thing)[i]
  if(typeof nex != typeof y){
    console.log(typeof nex + " " + typeof y)
    awesome(nex,g)
  }
  else{
    textChange(g.text, nex)
    }
}

/*
  if(typeof thing == typeof y){
      let x = thing
      console.log("woah")
      return x
  }
  if(thing == ""){
      let x = "No Held Item"
      console.log("ea")
      return x
  }
  */
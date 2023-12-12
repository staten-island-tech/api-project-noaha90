const DOMSelectors = {
  button1: document.getElementById("start"),
  button2: document.getElementById("button2"),
  form: document.getElementById("value"),
  gal: document.getElementById("gal"),
}



// LOOK AT https://pokeapi.co/api/v2/pokemon-species/184/

let input = Math.floor(Math.random() * 648)+1;
DOMSelectors.button1.addEventListener("click", function(event) {
  event.preventDefault()
  getData(input)
})


DOMSelectors.button2.addEventListener("click", function(event) {
  event.preventDefault()
  if(DOMSelectors.form.value == "qw"){
    console.log("win")
    input = Math.floor(Math.random() * 648)+1;
  } 
  else{
    getData(input)
  }
})

async function getData(input,name){
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
      cool(data,data2,data3,total)
  } catch (error) {
    console.log(error)
      document.querySelector("h1").textContent = "Error!"
        }
 
}

function cool(data,data2,data3,total){
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
            route: []
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
       let pick = choices[Math.floor(Math.random() * choices.length)]
      let ran = Math.floor(Math.random() * Object.keys(pick.data).length)
      console.log(typeof pick.data)
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
  console.log(comb.replace("-"," "))
  document.querySelector("h1").textContent = comb.replace("-"," ")
    DOMSelectors.gal.insertAdjacentHTML("afterend", `<span class="imgbor"><img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></img></span>`)
 }


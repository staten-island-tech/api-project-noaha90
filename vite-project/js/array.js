const array = [
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "A Move This Pokemon Can Learn Is:",
    route: ["random","move","name"],
    rand: "moves",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon's Height Is ",
    route: ["height"],
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon's Weight Is ",
    route: ["weight"],
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    text: "This Pokemon's Capture Rate Is: ",
    route: ["capture_rate"],
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon Can Be Found In: ",
    route: ["random","location_area","name"],
    rand: "start",
    alttext: "This Pokemon Cannot Be Found In The Wild!",
    back: "/encounters",
  },
  ]

export {array}
const array = [
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon Can Learn The Move ",
    route: ["random","move","name"],
    tend: "",
    rand: "moves",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon's Height Is ",
    tend: " Decimeters (blame biden or something thats how its stored)",
    route: ["height"],
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon's Weight Is ",
    route: ["weight"],
    tend: " Hectograms",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    text: "This Pokemon's Capture Rate Is: ",
    route: ["capture_rate"],
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon Can Be Found In: ",
    route: ["random","location_area","name"],
    rand: "start",
    tend: "",
    alttext: "This Pokemon Cannot Be Found In The Wild!",
    back: "/encounters",
  },
  ]

export {array}
const array = [
 {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon Can Learn The Move ",
    route: ["random","move","name"],
    tend: "",
    rand: "moves",
    level: ["2,3"],
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon's Weight Is ",
    tend: " Kilograms",
    route: ["weight"],
    level: ["2,3"],
    unitc: true,
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon's Height Is ",
    tend: " Meters",
    route: ["height"],
    level: ["2,3"],
    unitc: true,
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-form/`,
    text: "This Pokemon Was Introduced In The Game(s) ",
    route: ["version_group","name"],
    level: ["2,3"],
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    text: "This Pokemon's Capture Rate Is: ",
    route: ["capture_rate"],
    level: ["2,3"],
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon Can Be Found In: ",
    route: ["random","location_area","name"],
    rand: "start",
    level: ["1,2"],
    tend: "",
    alttext: "This Pokemon Cannot Be Found In The Wild!",
    back: "/encounters",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    text: "This Pokemon's Shape Is ",
    route: ["shape","name"],
    level: ["1,2"],
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    text: "This Pokemon's Color Is ",
    route: ["color","name"],
    level: ["1,2"],
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    text: "This Pokemon Is A Baby",
    route: ["is_baby"],
    level: ["1,2"],
    alttext: "This Pokemon Is A Baby",
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    route: ["is_legendary"],
    level: ["1,2"],
    alttext: "This Pokemon Is A Legendary",
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon-species/`,
    route: ["is_mythical"],
    level: ["1,2"],
    alttext: "This Pokemon Is A Mythical",
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon Can Be Found Holding ",
    route: ["random","item","name"],
    rand: "held_items",
    level: ["2,3"],
    alttext: "This Pokemon Cannot Hold A Held Item In The Wild",
    tend: " In The Wild",
    back: "",
  }, 
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "One Possible Type Of This Pokemon Is ",
    route: ["random","type","name"],
    rand: "types",
    level: ["2,3"],
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "One Possible Ability Of This Pokemon Is ",
    route: ["random","ability","name"],
    rand: "abilities",
    level: ["2,3"],
    tend: "",
    back: "",
  },
  {
    u: `https://pokeapi.co/api/v2/pokemon/`,
    text: "This Pokemon's National Dex Number Is ",
    route: ["id"],
    level: ["2,3"],
    tend: "",
    back: "",
  },
  ]

export {array}
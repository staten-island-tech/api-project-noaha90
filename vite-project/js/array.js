const choices = [
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

export {choices}
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

let countries1 = [{
        name: "nigeria",
        capital: "fct",
        population: "7billion",
        languages: ["hausa", "igbo", "yoruba"]
    },
    {
        name: "germany",
        capital: "munich",
        population: "5billion",
        languages: ["german"]
    }, {
        name: "italy",
        capital: "rome",
        population: "6billion",
        languages: ["italian", "latin"]
    },
    {
        name: "france",
        capital: "paris",
        population: "6billion",
        languages: ["french"]
    }
]
console.table(countries1)

//assertion message
console.assert(10 > 2 * 10, "incorrect")

//warning message
console.warn("i'm warning you")

//error message
console.error("this is an error")

const food = ["beans", "rice", "plantain", "egg"]

//while
console.time("while loop")
let i = 0
while (i < food.length) {
    console.log(food[i])
    i++
}
console.timeEnd("while loop")
//for
console.time('Regular for loop')
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}
console.timeEnd('Regular for loop')
//for of
console.time("for of")
for (const meal of food) {
    console.log(meal)
}
console.timeEnd("for of")
//forEach
console.time("forEach")
food.forEach(meal => console.log(meal))
console.timeEnd("forEach")
//Array destructuring
const values = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = values;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingPoint);

// let countries = ["finland", "estonia", "sweden", "denmark", "norway"];
// let [fin, est, sweden, den, nor] = countries;
// console.log(fin, est, sweden, den, nor)

//object destructuring
let rectangle = {
    width: 7.23,
    height: 3.45
}

let {
    width: w,
    height: h
} = rectangle;
console.log(w, h)


let countries = [{
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

// let [name, capital, population, languages] = countries;
// console.log(name, capital, population, languages);

const student = ['David', ['HTM', 'CSS', 'JS', 'React'],
    [98, 85, 90, 95]
]
// let [name, skills, scores, javaScriptScores, reactScores] = student;
// console.log(name, skills, scores, javaScriptScores, reactScores)

const users = [{
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
},
{
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
},
{
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
},
{
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
},
{
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
},
{
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
},
{
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
}
]

for ({
    name,
    scores,
    skills,
    age
} of users) {
console.log(name, scores, skills, age)
}

for ({
    name,
    scores,
    skills,
    age
} of users) {
if (skills.length < 2) {
    console.log(name, scores, skills, age)
}
}
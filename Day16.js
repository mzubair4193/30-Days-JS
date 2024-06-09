const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
const skillsTxt = JSON.stringify(skills)
console.log(skillsTxt);

let age = 250;
const ageTxt = JSON.stringify(age)
console.log(ageTxt)

let isMarried = true
const isMTxt = JSON.stringify(isMarried)
console.log(isMTxt);

// const student = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayehe',
//     age: 250,
//     isMarried: true,
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
// }
// let studentTxt = JSON.stringify(student)


const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}

let studentTxt = JSON.stringify(student, ['firstName', 'lastName', 'skills'])
console.log(studentTxt)

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

let parsedObject = JSON.parse(txt);
console.log(parsedObject)
let parsedSkill = JSON.parse(txt, ["skills"])
console.log(parsedSkill)
let profile = {
    firstName: "victor",
    lastName: "kenneth",
    age: 19,
    country: "nigeria",
    city: "lagos",
}

let txt = JSON.stringify(profile);
localStorage.setItem("user", "txt");


// let student = {
//     firstName: "victor",
//     lastName: "kenneth",
//     age: 19,
//     skills: ["html", "css", "javascript", "netlify"],
//     country: "nigeria"
// }

// let txt = JSON.stringify(student)
// localStorage.setItem("s1", "txt")
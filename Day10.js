//Set

let set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);
set.delete(5);
console.log(set)
set.clear();

let names = ["victor", "fred", "ryan", "femi", "badejo"]
let namesSet = new Set();
names.forEach(name => {
    set.add(name)
})
console.log(set)

let countries = ["nigeria", "U.S.A", "germany", "england", "italy"]
let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);


let a = [ 4, 5, 8, 9]
let b = [3, 4, 5, 7]
let A = new Set(a);
let B = new Set(b);

let intersection = a.filter(num => {
    return B.has(num)
})
console.log(intersection)

let union = [...a, ...b]
console.log(union);


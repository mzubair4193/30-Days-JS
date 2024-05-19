function fullName() {
    console.log("victor kenneth")
}
fullName()

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("victor", "kenneth");

function addNumbers(a, b) {
    return a + b;
}
addNumbers(2, 5);

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(5, 3);

perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(3, 5);

volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(2, 3, 4);

AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(7);

circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumOfCircle(6);

density = (mass, volume) => {
    return mass * volume;
}
density(4, 8);

speed = (TDC, TT) => {
    return TDC / TT
}
speed(4, 6);

weight = (mass, gravity) => {
    return mass * gravity;
}
weight(4, 5);

celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(5);

BMI = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
BMI(4, 7);

checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeasons("january");

findMax = (x, y, z) => {
    return Math.max(x, y, z);
}
findMax(5, 7, 4)

printArr = (arr) => {
    arr.forEach(function (ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])


showDateTime = () => {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();

swapValues = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)

reverseArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}
reverseArr([3, 4, 5])

capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(function (ar) {
        newArr.push(ar.toUpperCase());
    })
    return newArr;
}
capitalizeArr(["john", "mike"]);

removeitem = (index) => {
    let names = ["john", "mike"]
    names.splice(index);
    return names
}
removeitem(1);

sumOfNumbers = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sumOfNumbers(1, 2, 3, 4)

sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            evenSum += arg
        }
    })
    return evenSum;
}
sumOfEven(1, 2, 3, 4)

sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            oddSum += arg
        }
    })
    return oddSum;
}
sumOfOdd(1, 2, 3, 4)

evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)

sum = (...args) => {
    let sum = 0;
    args.forEach(function (num) {
        sum += num;
    })
}
sum(1, 2, 3)

generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
generateRandomIp();

generateRandomMacAdd = () => {}

generateRandomHex = () => {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i <= 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${hex}`
}
generateRandomHex();

generateUserId = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i <= 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
generateUserId();
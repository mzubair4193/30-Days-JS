const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    }
]

countries.forEach(country => {
    console.log(country)
})

names.forEach(name => {
    console.log(name)
})

numbers.forEach(num => {
    console.log(num)
})

let uppCaseCountries = countries.map(country => {
    return country.toUpperCase();
})
console.log(uppCaseCountries);

let countriesLength = countries.map(country => {
    return country.length
})
console.log(countriesLength);

let squareNum = numbers.map(num => {
    return num * num
})
console.log(squareNum);

let uppCaseNames = names.map(name => {
    return name.toUpperCase();
})
console.log(uppCaseNames);

let prices = products.map(product => {
    return `${product.product}:${product.price}`
})
console.log(prices)

let countriesWithLand = countries.filter(country => {
    return country.toLowerCase().includes("land")
})
console.log(countriesWithLand);

let countriesWith6chars = countries.filter(country => {
    return country.length === 6;
})
console.log(countriesWith6chars);

let countriesWith6charsMore = countries.filter(country => {
    return country.length >= 6;
})
console.log(countriesWith6charsMore);

let countriesStartingWithE = countries.filter(country => {
    return country[0].toLowerCase === "e";
})
console.log(countriesStartingWithE);

let pricesWithValues = products.filter(product => {
    return product.price > 0;
})
console.log(pricesWithValues);

const getStringList = (arr) => {
    let nn = arr.filter(item => {
        return typeof item === "string"
    })
    return nn;
}

let nn = getStringList(["victor", 3, 5, "kenneth"]);
console.log(nn);

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sumOfNumbers)

let joinCountries = countries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(joinCountries);

//every checks if all elements in an array are similar in all aspects
//some checks if some elements are elements are similar in one aspect

let isSomelength6 = countries.some(country => {
    return country.length > 6;
})
console.log(isSomelength6)

let isCountryIncludesLand = countries.every(country => {
    return country.toLowerCase().includes("land")
})
console.log(isCountryIncludesLand);

let firstCountry6Chars = countries.find(country => {
    return country.length === 6
});
console.log(firstCountry6Chars);

let firstIndexPosCountry6Chars = countries.findIndex(country => {
    return country.length === 6
});
console.log(firstIndexPosCountry6Chars);

let firstIndexPosNorwayExist = countries.findIndex(country => {
    return country.includes("Norway")
});
console.log(firstIndexPosNorwayExist);

let firstIndexPosRussiaExist = countries.findIndex(country => {
    return country.includes("Russia")
});
console.log(firstIndexPosRussiaExist);

const products = [{
    product: 'banana',
    price: 3
},
{
    product: 'mango',
    price: 6
},
{
    product: 'potato',
    price: ' '
},
{
    product: 'avocado',
    price: 8
},
{
    product: 'coffee',
    price: 10
},
{
    product: 'tea',
    price: ''
}
]

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'italy', 'spain', 'germany', 'portugal', 'england', 'netherland', 'belgium', 'france', 'nigeria', 'U.S.A'];

let totalPrice = products.map(product => {
return product.price;
}).filter(price => {
return price > 0;
}).reduce((accumulator, currentValue) => {
return accumulator + currentValue;
})
console.log(totalPrice);

// let sumOfProducts = products.reduce((accumulator, currentValue) => {
//     if (products.price > 0) {
//         return accumulator + currentValue.price
//     }
// })
// console.log(sumOfProducts);

const categorizeCountries = (countries) => {
let coun = countries.filter(country => {
    return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
})
return coun;
}
console.log(categorizeCountries(countries));

const getFirstTenCountries = (countries) => {
let firstTen = [];
firstTen = countries.map(country => {
    return country;
    })
return firstTen;
}

console.log(getFirstTenCountries(countries));
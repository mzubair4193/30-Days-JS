class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color
        this.legs = legs
    }
    getfullInfo() {
        return `${this.name} is ${this.age} year(s) old ${this.color} in color`;
    }
    set removeLegs(leg) {
        this.legs -= leg
    }
    get getName() {
        return this.name;
    }
}

let dog = new Animal("jack", 4, "brown", 4);
let cat = new Animal("brie", 2, "white", 4);

console.log(dog.getfullInfo());
console.log(cat);

class Pet extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }

    get getGender() {
        return this.gender
    }
    getfullInfo() {
        return `${this.name} is ${this.age} year(s) old ${this.gender} ${this.color} in color`;
    }

}

let rabbit = new Pet("ross", 3, "snow-white", 4, "male")
console.log(rabbit.getfullInfo());

class Statistics {
    constructor(arr) {
        this.arr = arr;
    }

    get length() {
        return this.arr.length;
    }

    count() {
        return this.length;
    }

    sum() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return sum;
    }

    mean() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return Math.ceil(sum / this.length)
    }

    min() {
        let minNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] < minNum) {
                minNum = this.arr[i]
            }
        }
        return minNum;
    }

    max() {
        let maxNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] > maxNum) {
                maxNum = this.arr[i]
            }
        }
        return maxNum
    }

    range() {
        return this.max() - this.min();
    }

    median() {
        let sorted = this.arr.sort()
        let index = sorted.length / 2
        index = Math.floor(index);
        return sorted[index];
    }

    mode() {
        return `working on it...`
    }

    variance() {
        let mean = this.mean()
        let variance = this.arr.map((num) => {
            return Math.pow(num - mean, 2) / this.length;
        })
        let newVariance = 0;
        variance.forEach(num => newVariance += num / this.length)
        return Math.ceil(newVariance / this.length);
    }

    standardDeviation() {
        return `working on it...`
    }

    frequencyDistribution() {
        return `working on it...`
    }


    describe() {
        return `
        Count: ${this.count()}\n
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}\n
        Mode: ${this.mode()}\n
        Variance: ${this.variance()}\n
        Standard Deviation: ${this.standardDeviation()}\n
        Frequency Distribution: ${this.frequencyDistribution()}`
    }
}

let numbers = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(numbers.describe())
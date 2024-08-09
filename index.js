"use strict";
console.log("Hello world!");
// 2. Operadores (aritméticos, booleanos)
let num1 = 5;
const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(num1));
// 3. Estructuras de decisión (if, switch, ternarios)
const sortNum = (num) => {
    let result = 0;
    if (num > 0)
        result = 1;
    else if (num < 0)
        result = -1;
    else
        result = 0;
    switch (result) {
        case 1:
            return "Positive";
        case -1:
            return "Negative";
        default:
            return "Zero";
    }
};
//4. Estructuras de iteración (while, for, foreach, map)
let names = ["John", "Jane", "Jack", "Jill"];
names.forEach((name) => console.log(name));
//1. Arrays | Listas
let numbers = [1, 2, 3, 4, 5];
const res = numbers.reduce((acc, num) => acc + num, 0);
const strings = ["Hello", "World", "!!!"];
console.log(strings.join(" "));
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jack" },
    { id: 4, name: "Jill" },
];
users.forEach((user) => console.log(user.name));
let nums = [1, 12, 3, 4, 5];
const greatestNum = nums.reduce((acc, num) => (num > acc ? num : acc), 0);
console.log(greatestNum);
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};
console.log(car);
class Car {
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    static fromObject(obj) {
        return `brand: ${obj.brand} model: ${obj.model} year: (${obj.year})`;
    }
}
let myCar = new Car({ brand: "Toyota", model: "Corolla", year: 2020 });
console.log(Car.fromObject(myCar));
const newCarWithPlusYear = (car) => {
    return Object.assign(Object.assign({}, car), { year: car.year + 1 });
};
console.log(newCarWithPlusYear(myCar));
//3. Funciones
const validateParams = (par1, par2, par3) => {
    try {
        if (typeof par3 !== typeof par1)
            throw new Error("Invalid type");
        console.log("All params are valid");
    }
    catch (error) {
        console.log(error);
    }
};
validateParams(0, 0, 0);
const matriz = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];
matriz.forEach((row) => console.log(row));
const fillEmptyMatriz = (matriz, length) => {
    for (let i = 0; i < length; i++) {
        matriz.push(new Array(length).fill(0));
    }
    return matriz;
};
const rotateMatriz = (matriz) => {
    let newMatriz = [];
    try {
        if (matriz.length === 0)
            return matriz;
        else if (matriz.length !== matriz[0].length || matriz.length !== matriz[1].length || matriz.length !== matriz[2].length) {
            throw new Error("Matriz is not square");
        }
        newMatriz = fillEmptyMatriz(newMatriz, matriz.length);
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                newMatriz[j][matriz.length - 1 - i] = matriz[i][j];
            }
        }
        return newMatriz;
    }
    catch (error) {
        return newMatriz;
    }
};
const newMatriz = rotateMatriz(matriz);
newMatriz.forEach((row) => console.log(row));
let objetos;
// type TCar = {
//     [brand : string]: string;
//     model: string;
//     year: number;
// };

console.log("Hello world!");
// 1. Variables y constantes: Tipos, Tipos personalizados

type TProduct = {
    id: number;
    name: string;
    price: number;
};

// 2. Operadores (aritméticos, booleanos)
let num1: number = 5;
const isOdd = (num: number): boolean => num % 2 !== 0;
console.log(isOdd(num1));

// 3. Estructuras de decisión (if, switch, ternarios)

const sortNum = (num: number): string => {
    let result: number = 0;
    if (num > 0) result = 1;
    else if (num < 0) result = -1;
    else result = 0;

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

let names: string[] = ["John", "Jane", "Jack", "Jill"];
names.forEach((name: string) => console.log(name));

//1. Arrays | Listas

let numbers: number[] = [1, 2, 3, 4, 5];
const res = numbers.reduce((acc, num) => acc + num, 0);

const strings: string[] = ["Hello", "World", "!!!"];
console.log(strings.join(" "));

type TUser = {
    id: number;
    name: string;
};

let users: TUser[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jack" },
    { id: 4, name: "Jill" },
];

users.forEach((user: TUser) => console.log(user.name));

let nums: number[] = [1, 12, 3, 4, 5];
const greatestNum = nums.reduce((acc, num) => (num > acc ? num : acc), 0);
console.log(greatestNum);

//2. Objetos

interface ICar {
    brand: string;
    model: string;
    year: number;
}

let car: ICar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};

console.log(car);

class Car {
    brand: string;
    model: string;
    year: number;

    constructor({ brand, model, year }: ICar) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    static returnCar(obj: ICar): string {
        return `brand: ${obj.brand} model: ${obj.model} year: (${obj.year})`;
    }
}

let myCar = new Car({ brand: "Toyota", model: "Corolla", year: 2020 });
console.log(Car.returnCar(myCar));

const newCarWithPlusYear = (car: ICar): ICar => {
    return { ...car, year: car.year + 1 };
};

console.log(newCarWithPlusYear(myCar));

//3. Funciones

const validateParams = (par1: number, par2: number, par3: number): void => {
    try {
        if (typeof par3 !== typeof par1) throw new Error("Invalid type");
        console.log("All params are valid");
    } catch (error) {
        console.log(error);
    }
};

validateParams(0,0,0)

const matriz = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];
matriz.forEach((row) => console.log(row));

const fillEmptyMatriz = (matriz: number[][], length: number): number[][] => {
    for (let i = 0; i < length; i++) {
        matriz.push(new Array(length).fill(0));
    }
    return matriz;
};

const rotateMatriz = (matriz: number[][]): number[][]  => {
    let newMatriz: number[][] = [];
    try {
        if (matriz.length === 0) return matriz;
        else if (matriz.length !== matriz[0].length || matriz.length !== matriz[1].length || matriz.length !== matriz[2].length) {
            throw new Error("Matriz is not square");
        }
        newMatriz = fillEmptyMatriz(newMatriz, matriz.length);
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                newMatriz[j][matriz.length - 1 - i] = matriz[i][j];
            }
        }
        return newMatriz
    } catch (error) { 
        return newMatriz;
    }
};
const newMatriz = rotateMatriz(matriz);
newMatriz.forEach((row) => console.log(row));

let objetos: { [ key: string ]: Car };

// type TCar = {
//     [brand : string]: string;
//     model: string;
//     year: number;
// };
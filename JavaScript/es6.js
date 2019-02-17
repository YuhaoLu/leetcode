// 1. Use const and let instead of var

// 2. String format (Templete Literals)
const myName = 'Yuhao';
const greeting = `Hello, my name is ${myName} `;

// 3. for ... of loop
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
}

// 4. ... unpack / pack
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

function sum(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

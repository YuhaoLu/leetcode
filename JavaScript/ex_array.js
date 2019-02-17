/* Array */

// Stack & Queue
var arr = [1, 2, 3, 4];
arr.push(5);
arr.pop();
arr.unshift(0);
arr.shift();

// Copy
var arr = [0, 1, 2, 3, 4]; 
var arr2 = arr.slice(1); // (beginIndex[, endIndex])
console.log(arr2); // ===> [1, 2, 3]

// Add / Delete
arr = [0, 1, 2, 3, 4];
arr.splice(1, 3, "a", "b", "c"); 
console.log(arr);

// Reverse
arr = ["H", "e", "l", "l", "o"];
arr.reverse();
console.log(arr);

// Sort
arr = [5, 3, 4, 1, 2];
arr.sort(function(a, b) {return a < b});
console.log(arr);

// Search
arr = ['a', 'b', 'a', 'b', 'a'];
var pos = arr.indexOf('b');
var pos_from = arr.indexOf('b', 2);
var last_pos = arr.lastIndexOf('b');
var last_pos_from = arr.lastIndexOf('b', -3);
console.log(pos);
console.log(pos_from);
console.log(last_pos);
console.log(last_pos_from);

// forEach / Map / Filter 
arr = [1, 2, 3];
arr2 = arr.forEach(function (num) { console.log("Element:" + num); });

arr = [1, 2, 3];
arr2 = arr.map(function (num) { return num * 2; }); // map returns a new array;
console.log(arr2);

arr = ['a', 10, 'b', 20, 'c', 30];
arr2 = arr.filter(function (item) { return typeof(item) == 'number'; });
console.log(arr2);
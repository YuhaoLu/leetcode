// ^    - Search from head
// \s*  - (0 or more) spaces
// ([\+\-]? \d+)  - save (0 or 1) +/- followed by (1 or more) digits
// \D*  - (0 or more) non-digits
var re = /^\s*([\+\-]?\d+)\D*/g;

// 0. re.test(str) - test for a match, return true/false
var str1 = "  -42 ABCD";
var str2 = "Hello -42";

var match = re.test(str1);
console.log(match);
match = re.test(str2);
console.log(match);
console.log("");

// 1. str.search(re) - return the first appearance position
str1 = "  -42 ABCD";
str2 = "Hello -42";
re = /[\+\-]?\d+/g;

var pos = str1.search(re);
console.log(pos);
pos = str2.search(re);
console.log(pos);
console.log("");

// 2. str.match(re) - reture an array of matched substrs
str1 = "10 20 -48 abc 32 ";
str2 = "Hello World";
re = /[\+\-]?\d+/g;

var substrs = str1.match(re);
console.log(substrs);
substrs = str2.match(re);
console.log(substrs);
console.log("");

// 3. str.replace(re, str) - replace re with str
str1 = "  -42 ABCD";
re_space = /\s*/g;
re_pattarn = /^\s*([\+\-]?\d+)\D*/g;

var res_str = str1.replace(re_space, '');
console.log(res_str);
res_str = str1.replace(re_pattarn, '$1');
console.log(res_str);





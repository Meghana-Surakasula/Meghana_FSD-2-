"use strict";
var Calculator;
(function (Calculator) {
    function square(a) {
        return a * a;
    }
    Calculator.square = square;
    function cube(a) {
        return a * a * a;
    }
    Calculator.cube = cube;
    function double(a) {
        return a * 2;
    }
    Calculator.double = double;
})(Calculator || (Calculator = {}));
console.log(Calculator.square(5));
console.log(Calculator.cube(3));
console.log(Calculator.double(10));

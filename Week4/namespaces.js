"use strict";
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Calculator.subtract = subtract;
})(Calculator || (Calculator = {}));
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));

var character = 'Goblin';
var age = 40;
var height = 100;
var weight = 30;
// height = 105 
// weight = 35
var BMI = function (weight, height) {
    return weight * (Math.pow(10, Math.pow(2, 2))) / (Math.pow(height, 2));
};
// console.log(area('hello'));
console.log(BMI(30, 100));

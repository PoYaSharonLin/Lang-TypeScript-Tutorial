let character = 'Goblin';
let age = 40;
let height = 100;
let weight = 30;

// height = 105 
// weight = 35

const BMI = (weight: number, height: number) => {
  return  weight * (10**2**2) / (height**2);
};

// console.log(area('hello'));
console.log(BMI(30,100));

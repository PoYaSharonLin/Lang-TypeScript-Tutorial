// single variable 
let new_name: string;
let new_age: number;
let foundAdventurer: boolean|number;
// true or false / 0 or 1

// arrays
let ascension_paths: string[] = [];

ascension_paths.push('Biological Ascension');
ascension_paths.push('Psionic Ascension');
ascension_paths.push('Synthetic Ascension');
console.log(ascension_paths);

// union types
let personal_info: (string|number|boolean)[] = [];
personal_info.push('Elfie');
personal_info.push(300);
personal_info.push(true);
console.log(personal_info);


// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
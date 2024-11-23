// output anchor 
const anchor = document.querySelector('a')!
console.log("anchor:" + anchor.href);

//output form 
const form = document.querySelector('.new-item-form')!
console.log("form child element counts:" + form.childElementCount);
console.log("form children type + name:" + form.children);

// output inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});


// Type casting 
const FormElement = document.querySelector('.new-item-form') as HTMLFormElement;
console.log("form element children type + name:" + FormElement.children);
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  
  list.render(doc, type.value, 'end');
});



// ENUMS HTTPS status 
// 1. Enum http status 
// 2. Mapping status code to status messege 
// 3. Assign http status 
// 4. console log output 


enum httpstatus {
  'OK' = 200,
  'ACCEPTED' = 201,
  'NOT_FOUND' = 404,
  'INTERNAL_SERVER_ERROR' = 500 
}
console.log(httpstatus.OK)
console.log(httpstatus.NOT_FOUND)

const statemessages: {[key in httpstatus]: string} = {
  [httpstatus.OK]: 'Request Sucessfully!', 
  [httpstatus.ACCEPTED]: 'Request Accepted!', 
  [httpstatus.NOT_FOUND]: 'Page Not Found!', 
  [httpstatus.INTERNAL_SERVER_ERROR]: 'Internal Server Error!', 

}
console.log(statemessages)

let sucessfultry: httpstatus = httpstatus.OK
// let failedtry: httpstatus = httpstatus.reject 

console.log(statemessages[sucessfultry] || "unknown status")
// console.log(statemessages[failedtry] || 'unknown status')
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
console.log(list)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // let doc: HasFormatter;
  // if (type.value === 'invoice') {
  //   doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  // } else {
  //   doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  // }

  // Factory function to create instances
  const createDocument = (type: string, tofrom: string, details: string, amount: number): HasFormatter => {
    const constructors: { [key: string]: new (a: string, b: string, c: number) => HasFormatter } = {
      invoice: Invoice,
      payment: Payment,
    };

    const Constructor = constructors[type];
    if (!Constructor) {
      throw new Error(`Invalid document type: ${type}`);
    }

    return new Constructor(tofrom, details, amount);
  };

  // Usage
  const doc: HasFormatter = createDocument(type.value, tofrom.value, details.value, amount.valueAsNumber);
  console.log(doc)
  list.render(doc, type.value, 'end');
});
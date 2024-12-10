import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
console.log(list);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // let doc: HasFormatter;
    // if (type.value === 'invoice') {
    //   doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    // } else {
    //   doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    // }
    // Factory function to create instances
    const createDocument = (type, tofrom, details, amount) => {
        const constructors = {
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
    const doc = createDocument(type.value, tofrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
    list.render(doc, type.value, 'end');
});

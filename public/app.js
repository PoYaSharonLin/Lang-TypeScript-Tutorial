import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// ENUMS HTTPS status 
// 1. Enum http status 
// 2. Mapping status code to status messege 
// 3. Assign http status 
// 4. console log output 
var httpstatus;
(function (httpstatus) {
    httpstatus[httpstatus["OK"] = 200] = "OK";
    httpstatus[httpstatus["ACCEPTED"] = 201] = "ACCEPTED";
    httpstatus[httpstatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    httpstatus[httpstatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(httpstatus || (httpstatus = {}));
console.log(httpstatus.OK);
console.log(httpstatus.NOT_FOUND);
const statemessages = {
    [httpstatus.OK]: 'Request Sucessfully!',
    [httpstatus.ACCEPTED]: 'Request Accepted!',
    [httpstatus.NOT_FOUND]: 'Page Not Found!',
    [httpstatus.INTERNAL_SERVER_ERROR]: 'Internal Server Error!',
};
console.log(statemessages);
let sucessfultry = httpstatus.OK;
// let failedtry: httpstatus = httpstatus.reject 
console.log(statemessages[sucessfultry] || "unknown status");
// console.log(statemessages[failedtry] || 'unknown status')

import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
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
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuples in handling http 
// Define status code & response
// function that fetches user status 
// mapping user status to error messages 
// log output 
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode || (StatusCode = {}));
function getUserStatus(index) {
    var _a;
    const responses = {
        0: [StatusCode.Success, { id: 'a1b2c3', userName: 'Sharon' }, null],
        1: [StatusCode.Unauthorized, { id: 'aaa123', userName: 'Rob' }, null],
        2: [StatusCode.PaymentRequired, { id: 'bbb123', userName: 'Magi' }, null],
    };
    return (_a = responses[index]) !== null && _a !== void 0 ? _a : [StatusCode.NotFound, null, 'User Not Found'];
}
const handleApiResponse = (response) => {
    const [statusCode, data, error] = response;
    const handlers = {
        [StatusCode.Success]: () => console.log(`Success! User ID: ${data.id}, Name: ${data.userName}`),
        [StatusCode.Unauthorized]: () => console.log(`Error: User ID: ${data.id}, Name: ${data.userName} is unauthorized`),
        [StatusCode.PaymentRequired]: () => console.log(`Error: User ID: ${data.id}, Name: ${data.userName}'s payment is required`),
        [StatusCode.NotFound]: () => console.error(`Error ${statusCode}: ${error}`),
    };
    // Execute the handler based on the status code, or log a generic message
    (handlers[statusCode] || (() => console.error(`Unhandled status: ${statusCode}`)))();
};
// Example usage
const response = getUserStatus(0);
handleApiResponse(response);
const failedResponse = getUserStatus(999);
handleApiResponse(failedResponse);

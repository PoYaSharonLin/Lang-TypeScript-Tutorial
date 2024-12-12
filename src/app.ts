import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

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

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, 'end');
});

// tuples in handling http 
// Define status code & response
// function that fetches user status 
// mapping user status to error messages 
// log output 

enum StatusCode {
  Success = 200,
  Unauthorized = 401,
  PaymentRequired = 402,
  NotFound = 404,
}

type ApiResponse<T> = [statusCode: StatusCode, data: T | null, error: string | null];


function getUserStatus(index: number): ApiResponse<{ id: string; userName: string }> {
  const responses: Record<number, ApiResponse<{ id: string; userName: string }>> = {
    0: [StatusCode.Success, { id: 'a1b2c3', userName: 'Sharon' }, null],
    1: [StatusCode.Unauthorized, { id: 'aaa123', userName: 'Rob' }, null],
    2: [StatusCode.PaymentRequired, { id: 'bbb123', userName: 'Magi' }, null],
  };
  return responses[index] ?? [StatusCode.NotFound, null, 'User Not Found'];
}

const handleApiResponse = (response: ApiResponse<{ id: string; userName: string }>): void => {
  const [statusCode, data, error] = response;

  const handlers: Partial<Record<StatusCode, () => void>> = {
    [StatusCode.Success]: () =>
      console.log(`Success! User ID: ${data!.id}, Name: ${data!.userName}`),
    [StatusCode.Unauthorized]: () =>
      console.log(`Error: User ID: ${data!.id}, Name: ${data!.userName} is unauthorized`),
    [StatusCode.PaymentRequired]: () =>
      console.log(`Error: User ID: ${data!.id}, Name: ${data!.userName}'s payment is required`),
    [StatusCode.NotFound]: () =>
      console.error(`Error ${statusCode}: ${error}`),
  };

  // Execute the handler based on the status code, or log a generic message
  (handlers[statusCode] || (() => console.error(`Unhandled status: ${statusCode}`)))();
};

// Example usage
const response = getUserStatus(0);
handleApiResponse(response);

const failedResponse = getUserStatus(999);
handleApiResponse(failedResponse);

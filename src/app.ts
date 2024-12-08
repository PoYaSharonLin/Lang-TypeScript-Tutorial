import { Invoice } from './classes/Invoice.js';

// module 
import { HttpClient, HttpResponse } from './http-client.js';

// interface 
interface User {
  id: number;
  name: string;
  email: string;
}

// class 
const httpClient = new HttpClient('https://api.example.com');
console.log(httpClient)

export const getUser = async (id: number): Promise<User | null> => {
  const response: HttpResponse<User> = await httpClient.get<User>(`/users/${id}`);
  if (response.error) {
    console.error(`Failed to fetch user: ${response.error}`);
    return null;
  }
  return response.data;
};


export const createUser = async (user: User): Promise<User | null> => {
  const response: HttpResponse<User> = await httpClient.post<User>('/users', user);
  if (response.error) {
    console.error(`Failed to create user: ${response.error}`);
    return null;
  }
  return response.data;
};


// Example Usage
const newUser: User = {
  id: 0,
  name: 'John Doe',
  email: 'john.doe@example.com'
};

const createdUser = createUser(newUser);

if (createdUser) {
  console.log('User created successfully:', createdUser);
} else {
  console.error('Failed to create user.');
}

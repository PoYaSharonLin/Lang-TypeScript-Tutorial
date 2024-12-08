var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// module 
import { HttpClient } from './http-client.js';
// class 
const httpClient = new HttpClient('https://api.example.com');
console.log(httpClient);
export const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield httpClient.get(`/users/${id}`);
    if (response.error) {
        console.error(`Failed to fetch user: ${response.error}`);
        return null;
    }
    return response.data;
});
export const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield httpClient.post('/users', user);
    if (response.error) {
        console.error(`Failed to create user: ${response.error}`);
        return null;
    }
    return response.data;
});
// Example Usage
const newUser = {
    id: 0,
    name: 'John Doe',
    email: 'john.doe@example.com'
};
const createdUser = createUser(newUser);
if (createdUser) {
    console.log('User created successfully:', createdUser);
}
else {
    console.error('Failed to create user.');
}

import { createCustomer } from "./apis/customerApi.js"


const customerDraft = {
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'jhon.doe@gmail.com',
    password: '1234567890',
}

createCustomer(customerDraft)
.then(result => console.log("Customer created:: ", result))
.catch(error => console.error("Error while creating customer:: ", error));
import { createCustomer } from "./apis/customerApi.js"


const customerDraft = {
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'jhon.doe@gmail.com',
    password: '1234567890',
}

createCustomer(customerDraft)
.then(result => {
    console.log("Customer created:: ", result)
    process.env.CUSTOMER_ID = result.customer.id;
    process.env.CUSTOMER_VERSION = result.customer.version;
})
.catch(error => console.error("Error while creating customer:: ", error));
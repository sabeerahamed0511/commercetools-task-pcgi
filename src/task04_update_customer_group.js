import { updateCustomer } from "./apis/customerApi.js";
import dotenv from 'dotenv';
dotenv.config();

const customerUpdateActions = {
    version: +(process.env.CUSTOMER_VERSION ?? '1'),
    actions: [
        {
            "action": "addCustomerGroupAssignment",
            "customerGroupAssignment": {
                "customerGroup": {
                    "id": process.env.CUSTOMER_GROUP_ID ?? '',
                    "typeId": "customer-group"
                }
            }
        }
    ]
};

const customerId = process.env.CUSTOMER_ID ?? '';

updateCustomer(customerId, customerUpdateActions)
    .then(result => console.log("Customer updated:: ", result))
    .catch(error => console.error("Error while updating customer:: ", error));
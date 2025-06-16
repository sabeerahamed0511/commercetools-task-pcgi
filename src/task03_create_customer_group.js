import { createCustomerGroup } from "./apis/customerGroupApi.js";


const customerGroupDraft = {
    groupName: 'Example Customer Group'
}

createCustomerGroup(customerGroupDraft)
.then(result => console.log("Customer group created:: ", result))
.catch(error => console.error("Error while creating customer group:: ", error));
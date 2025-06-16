import { apiRoot } from "./client.js"

export const createCustomer = async (customerDraft) => {

    return apiRoot
        .customers()
        .post({
            body: customerDraft
        })
        .execute()
        .then(result => result?.body)
        .catch(error => {
            throw new Error(JSON.stringify(error));
        })
}

export const updateCustomer = (id, customerUpdateActions) => {
    return apiRoot
        .customers()
        .withId({ID:id })
        .post({
            body: customerUpdateActions
        })
        .execute()
        .then(result => result?.body)
        .catch(error => {
             throw new Error(JSON.stringify(error));
        })
}
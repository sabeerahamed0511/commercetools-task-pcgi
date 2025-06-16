import { apiRoot } from "./client.js";

export const createCustomerGroup = (customerGroupDraft) => {
    return apiRoot
        .customerGroups()
        .post({
            body: customerGroupDraft
        })
        .execute()
        .then(result => result?.body)
        .catch(error => {
             throw new Error(JSON.stringify(error));
        })
}
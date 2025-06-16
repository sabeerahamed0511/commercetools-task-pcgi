## Getting Started

First, Install dependecies:

```bash
npm install
```
## Tasks
### Task 01 (Project Setup) – Establish/Setup a project within commercetools
- Created a new Commercetools trial project.
- Generated an API client and stored the credentials in the ```.env``` file.
### Task 02 (Create Customer) – Generate a customer (through code)
1. Add customer details to the ```customerDraft``` object in the ```task02_create_customer.js``` file.
2. Run the following command to create a new customer:
```bash
npm run task02
```
3. Copy the customer ```id``` and ```version``` from the terminal log.
4. Paste the copied values into the ```.env``` file:
```bash
CUSTOMER_ID={{id}}
CUSTOMER_VERSION={{version}}
```
### Task 03 (Create Customer Group) – Generate a customer Group (through code)
1. Add customer group details to the ```customerGroupDraft``` object in the ```task03_create_customer_group.js``` file.
2. Run the following command to create a new customer group:
```bash
npm run task03
```
3. Copy the customer group ```id``` from the terminal log.
4. Paste the copied values into the ```.env``` file:
```bash
CUSTOMER_GROUP_ID={{id}}
```
### Task 04 (Update Customer Group) – Modify the customer group, linking the previously created customer (as outlined in Task 02) to the group (through code)
- This task links the customer (created in Task 02) to the customer group (created in Task 03).
- Run the following command:
```bash
npm run task04
```

# InnerJoin

Given two array of objects, return the list of  objects containing all keys of objects that match a search key.

Example:

```js
const contacts = [
  { id: 0, name: 'Maggie', phone: '+12345' },
  { id: 1, name: 'Kevin', phone: '+45623' },
  { id: 2, name: 'Aaron', phone: '+98765' },
];

const details = [
  { id: 0, email: 'maggie@email.com' },
  { id: 2, email: 'aaron@email.com' },
];

function innerJoin({ leftArr, rightArr, key }) {
  ...
}

const result = innerJoin(contacts, details, id);

// result = [
//   { id: 0, name: 'Maggie', phone: '+12345', email: 'maggie@email.com' },
//   { id: 2, name: 'Aaron', phone: '+98765', email: 'aaron@email.com' },
// ];
```

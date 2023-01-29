import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


// TODO: Add logic to a method that accepts some content and adds it to the database
// Export as function we will use to PUT all from the database.
export const putDb = async ( content ) => {
   console.error('putDb not implemented');
console.log('PUT to the database');
// Creates a connection to the database database and version we want to use.
const jateDb = await openDB('jate', 1);
// Creates a new transaction and specify the database and data privileges.
const tx = jateDb.transaction('jate', 'readwrite');
// Opens up the desired object store.
const store = tx.objectStore('jate');
// Uses the .put() method to get all data in the database.
const request = store.put({ id: 1, value: content });
// Gets confirmation of the request.
const result = await request;
console.log('Data saved to database', result.value);
};

// TODO: Add logic for a method that gets all the content from the database
// Export a function we will use to GET from the database.
export const getDb = async () => {
console.error('getDb not implemented');
console.log('GET from the database');
const jateDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
// Use the .get() method to get a piece of data from the database based on the 
const request = store.get(1);
const result = await request;
result
  ? console.log('Data retrieved from the database', result.value)
  : console.log('Data not found in the database');
  return result?.value;
};

// example
// export const putDb = async (id, content) => {
//   console.log('PUT to the database');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readwrite');
//   const store = tx.objectStore('todos');
//   const request = store.put({ id: id, todo: content });
//   const result = await request;
//   console.log('🚀 - data saved to the database', result);
// };

initdb();

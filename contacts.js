const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json');
 async function listContacts() {
    try{
        const data = await fs.readFile(contactsPath);
        return JSON.parse(data)
    r
    }catch(err){
console.log(err)
    }
  }
  
//   function getContactById(contactId) {
    
//   }
  
//   function removeContact(contactId) {
   
//   }
  
//   function addContact(name, email, phone) {
    
//   }

  module.exports = {
    listContacts,
    // getContactById,
    // removeContact,
    // addContact,
  };
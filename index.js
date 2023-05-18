const contacts = require('./contacts');
console.log(contacts)

async function invokeAction  ({action, id, name, email, phone})  {
switch(action){
    case 'list':
        const list = await contacts.listContacts()
        console.table(list);
      break;
}
}

invokeAction()
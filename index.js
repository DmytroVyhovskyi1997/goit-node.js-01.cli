const contacts = require('./contacts');
console.log(contacts)

const  invokeAction = async ({action, id, name, email, phone}) => {
switch(action){
    case "list": 
        const list = await contacts.listContacts();
       return console.table(list);
      
      
      case "get": 
        const get = await contacts.getContactById(id);
      return  console.table(get);
       
      
      case "add":
      const add = await contacts.addContact({name,email, phone});
      return  console.table(add);

    case "remove":
     const remove = await contacts.removeContact(id);
return console.log(remove)
    default:
      console.warn("\x1B[31m Unknown action type!");

}
}

// invokeAction({action:'list'});
// invokeAction({action:'get'});
// invokeAction({action:'add', name:"Kennedy Lane", email:"nulla.ante@vestibul.co.uk", phone:"(992) 914-3792"});
invokeAction({action:'remove'});
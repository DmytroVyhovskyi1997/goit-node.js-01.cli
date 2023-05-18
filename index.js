const contacts = require("./contacts");
console.log(contacts);
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      return console.table(list);

    case "get":
      const get = await contacts.getContactById(id);
      return console.table(get);

    case "add":
      const add = await contacts.addContact({ name, email, phone });
      return console.table(add);

    case "remove":
      const remove = await contacts.removeContact(id);
      return console.log(remove);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

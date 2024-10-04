const session = require('express-session');
const MemoryStore = session.MemoryStore; 

const store = new MemoryStore();

module.exports = store;


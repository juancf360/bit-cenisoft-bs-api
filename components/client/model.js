const mongoose = require('mongoose')
Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    address: { type: String, required: true }, 
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})
const Client = new mongoose.model('Clients', clientSchema);

module.exports = Client
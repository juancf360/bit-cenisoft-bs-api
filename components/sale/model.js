const mongoose = require('mongoose')
Schema = mongoose.Schema;

const detailsSchema =  new mongoose.Schema({
    idBook:{ type: Schema.ObjectId, ref: "Book", required: true },
    book: { type: String, required: true },
    unitValue: { type: Number, required: true },
    quantity: { type: Number, required: true },
})
const Detail = new mongoose.model('details', detailsSchema);

const saleSchema =  new mongoose.Schema({ 
    date: { type: Date, required: true },
    total: { type: Number, required: true }, 
    idClient:{ type: Schema.ObjectId, ref: "Client", required: true },
    details: [detailsSchema]
})
const Sale = new mongoose.model('sales', saleSchema);


module.exports = Sale, Detail
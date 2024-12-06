const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    vendor: { type: Number, required: true },
    image: { type: String, required: true },
    productId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Product', productSchema);

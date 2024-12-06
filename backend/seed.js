const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path to your Product model
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URI = process.env.MONGO_URI; // Replace with your DB name

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('DB Connection Error:', err));

const products = Array.from({ length: 20 }, (_, i) => ({
    name: `Product ${i + 1}`,
    price: (Math.random() * 100).toFixed(2), // Random price between 0 and 100
    vendor: (i % 5) + 1, // Vendors are numbered 1 through 5
    productId: `PID-${i + 1}`,
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`, // Placeholder image URL
}));

const seedDatabase = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        console.log('Cleared existing products');

        // Insert new data
        await Product.insertMany(products);
        console.log('Inserted products successfully');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err);
        mongoose.connection.close();
    }
};

seedDatabase();

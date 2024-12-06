const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('products.product');
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add to cart
exports.addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const cart = await Cart.findOne({ user: req.user.id });
        const product = await Product.findById(productId);

        if (!cart) {
            const newCart = new Cart({
                user: req.user.id,
                products: [{ product: productId, quantity: 1 }],
            });
            await newCart.save();
        } else {
            const existingProduct = cart.products.find((p) => p.product.toString() === productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.products.push({ product: productId, quantity: 1 });
            }
            await cart.save();
        }
        res.status(200).json({ message: 'Product added to cart' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

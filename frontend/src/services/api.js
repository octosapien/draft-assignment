import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api/' });

// Attach token to every request
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data);
export const fetchProductsByVendor = (vendorId) => API.get(`/products/${vendorId}`);
export const fetchCart = () => API.get('/cart');
export const addToCart = (productId) => API.post('/cart/add', { productId });

// Add this function to fetch user orders
export const fetchUserOrders = () => API.get('/users/orders');
export const fetchVendors = () => API.get('/vendors');

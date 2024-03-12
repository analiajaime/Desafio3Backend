const express = require('express');
const ProductManager = require('./productManager.js'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = 8080;

const manager = new ProductManager('./src/products.json');

app.get('/products', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit);
        const products = await manager.getProductsLimit(limit);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const product = await manager.getProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

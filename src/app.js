const express = require('express');
const ProductManager = require('./productManager');
const app = express();
const port = 3000;

const productManager = new ProductManager('./products.json');

app.get('/products', async (req, res) => {
    const { limit } = req.query;
    let products = await productManager.getAll();
    if (limit) {
        products = products.slice(0, Number(limit));
    }
    res.json(products);
});

app.get('/products/:pid', async (req, res) => {
    const { pid } = req.params;
    const product = await productManager.getById(pid);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

const fs = require('fs');

class ProductManager {
    constructor(filePath) {
        this.products = [];
        this.filePath = filePath;
    }

static lastId = 0;

    async addProduct(newObject) {
        let { title, description, price, thumbnail, code, stock } = newObject;

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Todos los campos son obligatorios.');
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.error('Ya existe un producto con ese código.');
            return;
        }

        const newProduct = {
            id: ++ProductManager.lastId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        

        this.products.push(newProduct);
        console.log('Producto agregado al listado:', newProduct);

        await this.saveFile(this.products);
    }

    async getProducts() {
        return this.products;
    }

    async getProductById(pid) {
       try {
           const arrayProducts = await this.readFile();
           const foundProduct = arrayProducts.find(item => item.id === pid);
           if (!foundProduct) {
               console.error('El producto no pudo ser encontrado. ID:', pid);
           } else {
               console.log('Producto encontrado:', foundProduct);
               return foundProduct;
           }
       }
         catch (error) {
              console.error('Error al leer el archivo', error);
         }
    
         async readFile () {
            try {
                const data = fs.readFileSync(this.filePath, 'utf-8');
                const arrayProducts = JSON.parse(data);
                return arrayProducts;
            } catch (error) {
                console.error('Error al leer el archivo', error);
            }
        }
    }

    async saveFile(arrayProducts) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(arrayProducts, null, 2));
        }
        catch (error) {
            console.error('Error al guardar el archivo', error);
        }
    }

    async updateProduct(pid, updatedProduct) {
        try {
            const arrayProducts = await this.readFile();
            const index = arrayProducts.findIndex(item => item.id === pid);
            if (index === -1) {
                console.error('El producto no pudo ser encontrado. ID:', pid);
            } else {
                arrayProducts[index] = { ...arrayProducts[index], ...updatedProduct };
                await this.saveFile(arrayProducts);
                console.log('Producto actualizado:', arrayProducts[index]);
            }
        } catch (error) {
            console.error('Error al actualizar el archivo', error);
        }
    }

    async deleteProduct(pid) {
        try {
            const arrayProducts = await this.readFile();
            const index = arrayProducts.findIndex(item => item.id === pid);
            if (index === -1) {
                console.error('El producto no pudo ser encontrado. ID:', pid);
            } else {
                const deletedProduct = arrayProducts.splice(index, 1);
                await this.saveFile(arrayProducts);
                console.log('Producto eliminado:', deletedProduct);
            }
        } catch (error) {
            console.error('Error al eliminar el archivo', error);
        }
    }

    async getProductsLimit(limit) {
        try {
            const arrayProducts = await this.readFile();
            return limit ? arrayProducts.slice(0, limit) : arrayProducts;
        } catch (error) {
            console.error('Error al leer el archivo', error);
        }
    }
}
module.exports = ProductManager;
            


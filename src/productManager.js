const fs = require("fs").promises;

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async addProduct(newObject) {
  }

  async getProducts() {
    try {
      const data = await this.readFile();
      return data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error;
    }
  }

  async getProductById(pid) {
    try {
      const arrayProducts = await this.readFile();
      const foundProduct = arrayProducts.find((item) => item.id === pid);
      if (!foundProduct) {
        console.error("El producto no pudo ser encontrado. ID:", pid);
        return null;
      } else {
        console.log("Producto encontrado:", foundProduct);
        return foundProduct;
      }
    } catch (error) {
      console.error("Error al leer el archivo", error);
      throw error;
    }
  }

  async readFile() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error al leer el archivo", error);
      throw error;
    }
  }

  async saveFile(arrayProducts) {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(arrayProducts, null, 2));
    } catch (error) {
      console.error("Error al guardar el archivo", error);
      throw error;
    }
  }

  async updateProduct(pid, updatedProduct) {
  }

  async deleteProduct(pid) {
  }

  async getProductsLimit(limit) {
    try {
      const arrayProducts = await this.readFile();
      return limit ? arrayProducts.slice(0, limit) : arrayProducts;
    } catch (error) {
      console.error("Error al leer el archivo", error);
      throw error;
    }
  }
}

module.exports = ProductManager;

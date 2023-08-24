const { ProductRepository } = require("../database");

class ProductService {
    constructor() {
      this.repository = new ProductRepository();
    }

}

module.exports = ProductService;
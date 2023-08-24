const { ShoppingRepository } = require("../database");

class ShoppingService {
    constructor() {
      this.repository = new ShoppingRepository();
    }

}

module.exports = ShoppingService;
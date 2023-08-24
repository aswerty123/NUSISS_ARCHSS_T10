const ProductService = require("../services/product-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app, channel) => {
    const service = new ProductService();


}
const ShoppingService = require("../services/shopping-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app, channel) => {
    const service = new ShoppingService();


}
const SearchService = require("../services/search-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app, channel) => {
    const service = new SearchService();


}
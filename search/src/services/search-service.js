const { SearchRepository } = require("../database");

class SearchService {
    constructor() {
      this.repository = new SearchRepository();
    }

}

module.exports = SearchService;
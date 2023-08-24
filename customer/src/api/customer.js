const CustomerService = require("../services/customer-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app, channel) => {
    const service = new CustomerService();

    app.post("/signup", async (req, res, next) => {
        try {
          const { email, password, phone } = req.body;
          const data = await service.SignUp({ email, password, phone });
          return res.json(data);
        } catch (error) {
          next(error);
        }
      });
    
      app.post("/login", async (req, res, next) => {
        try {
          const { email, password } = req.body;
          const data = await service.SignIn({ email, password });
          return res.json(data);
        } catch (error) {
          next(error);
        }
      });
}
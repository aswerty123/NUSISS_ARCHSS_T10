const { UserModel } = require('../models');

//Dealing with data base operations
class UserRepository {
  async CreateUser({ username, email, password, salt, phone, role }) {
    try {
      const user = new UserModel({
        username,
        email,
        password,
        salt,
        phone,
        role,
      });
      const userResult = await user.save();
      return userResult;
    } catch (err) {
      throw err;
    }
  }

  async FindUser({ email }) {
    try {
      const existingUser = await UserModel.findOne({ email: email });
      return existingUser;
    } catch (err) {
      throw err;
    }
  }

  async FindUserById({ id }) {
    try {
      const existingUser = await UserModel.findById(id);
      return existingUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserRepository;

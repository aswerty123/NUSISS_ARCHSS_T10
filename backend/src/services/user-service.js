const { UserRepository } = require("../database");
const { FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils');

// All Business logic will be here
class UserService {

    constructor(){
        this.repository = new UserRepository();
    }

    async SignIn(userInputs){

        const { email, password } = userInputs;
        
        try {
            
            const existingUser = await this.repository.FindUser({ email});

            if(existingUser){
            
                const validPassword = await ValidatePassword(password, existingUser.password, existingUser.salt);
                
                if(validPassword){
                    const token = await GenerateSignature({ email: existingUser.email, _id: existingUser._id});
                    return FormateData({id: existingUser._id, token });
                } 
            }
    
            return FormateData(null);

        } catch (err) {
            throw err
        }

       
    }

    async SignUp(userInputs){
        
        const { email, password, phone } = userInputs;
        
        try{
            // create salt
            let salt = await GenerateSalt();
            
            let userPassword = await GeneratePassword(password, salt);
            
            const existingUser = await this.repository.CreateUser({ email, password: userPassword, phone, salt});
            
            const token = await GenerateSignature({ email: email, _id: existingUser._id});

            return FormateData({id: existingUser._id, token });

        }catch(err){
            throw err
        }

    }

    async GetProfile(id){

        try {
            const existingUser = await this.repository.FindUserById({id});
            return FormateData(existingUser);
            
        } catch (err) {
            throw err
        }
    }


}

module.exports = UserService;
const mongoose = require('mongoose')
const signupTemplate = new mongoose.Schema({
        Username:{
          type: String
        },                                                                                            
        Re_Password:{
          type: String
        },                                                                                               
        Password:{
          type: String
        },                  
        token:{
          type: String
        },                                                                                                                                                                       

    Date:{
        type:Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model('activeUsers', signupTemplate)
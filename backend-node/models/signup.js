const { stringToStream } = require('firebase-tools/lib/utils');
const mongoose = require('mongoose')
const signupTemplate = new mongoose.Schema({
  
        Annualincome:{
          type:String
        },
        Citizenship:{
          type: String
        },                                                                                            
        CountryOfBirth:{
          type: String
        },                                                                                               
        Countryselected:{
          type: String
        },                                                                                                
        EmploymentStatus:{
          type: String
        },                                                                                                   
        FundingSource:{
          type: String
        },                                                                                                  
        KycDocFile:{
          type: String
        },                                                                                           
        KycDocFile2:{
          type: String
        },                                                                                           
        KycDocName:{
          type: String
        },                                                                                           
        KycDocName2:{
          type: String
        },                                                                                           
        KycDocNumber:{
          type: String
        },                                                                                           
        KycDocNumber2:{
          type: String
        },                                                                                           
        KycDocType:{
          type: String
        },                                                                                           
        TaxIDNumber:{
          type: String
        },                                                                                                   
        TaxIDType:{
          type: String
        },                                                                                              
        TrustedEmail:{
          type: String
        },                                                                                                   
        TrustedFirstName:{
          type: String
        },                                                                                                 
        TrustedLastName:{
          type: String
        },                                                                                                 
        city:{
          type: String
        },                                                                                                          
        country:{
          type: String
        },                                                                                               
        currency:{
          type: String
        },                                                                                           
        dob:{
          type: String
        },                                                                                                     
        email:{
          type: String
        },                                                                                                                         
        firstname:{
          type: String
        },                                                                                                       
        lastname:{
          type: String
        },                                                                                               
        middlename:{
          type: String
        },                                                                                           
        phonenumber:{
          type: String
        },                                                                                                        
        postalcode:{
          type: String
        },                                                                                                 
        state:{
          type: String
        },                                                                                                    
        streetaddress:{
          type: String
        },
                                                                                                                                                                    
        taxresidence:{
          type: String
        },                                                                                                 

    Date:{
        type:Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model('users', signupTemplate)
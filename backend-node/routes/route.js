const { application } = require('express')
const express = require('express')
const router = express.Router() 
const User = require('../models/signup')
const activeUser = require('../models/userCreate')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post("/signup", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { Annualincome,
        Citizenship,
        CountryOfBirth,
        Countryselected,
        EmploymentStatus,
        FundingSource,
        KycDocFile,
        KycDocFile2,
        KycDocName,
        KycDocName2,
        KycDocNumber,
        KycDocNumber2,
        KycDocType,
        TaxIDNumber,
        TaxIDType,
        TrustedEmail,
        TrustedFirstName,
        TrustedLastName,
        city,
        country,
        currency,
        dob,
        email,
        firstname,
        lastname,
        middlename,
        phonenumber,
        postalcode,
        state,
        streetaddress,
        taxresidence} = req.body;
  
      // Validate user input
      if (!(email && firstname && lastname)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      /*const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }*/
  
      //Encrypt user password
      //encryptedPassword = await bcrypt.hash(pwd, 10);
      
      
      
      // Create user in our database
      const user = await User.create({
        Annualincome,
        Citizenship,
        CountryOfBirth,
        Countryselected,
        EmploymentStatus,
        FundingSource,
        KycDocFile,
        KycDocFile2,
        KycDocName,
        KycDocName2,
        KycDocNumber,
        KycDocNumber2,
        KycDocType,
        TaxIDNumber,
        TaxIDType,
        TrustedEmail,
        TrustedFirstName,
        TrustedLastName,
        city,
        country,
        currency,
        dob,
        email: email.toLowerCase(),
        firstname,
        lastname,
        middlename,
        phonenumber,
        postalcode,
        state,
        streetaddress,
        taxresidence
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      res.status(201).json(user);
      // return new user
      //console.log(user)
      
    } catch (err) {
      console.log(err);
    }

    
    // Our register logic ends here
  });
  router.post("/userCreate", async (req, res) => {
    try {
      // Get user input
      const { 
        Username,
        Re_Password,
        Password} = req.body;
  
      // Validate user input
      if (!(Username && Password)) {
        res.status(400).send("All input is required");
      }
  
      //check if user already exist
      //Validate if user exist in our database
      const oldUser = await activeUser.findOne({ Username });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      //encryptedPassword = await bcrypt.hash(pwd, 10);
      // Create user in our database
      const user = await activeUser.create({
        Username,
        Re_Password,
        Password
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, Username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      res.status(201).json(user);
      //return new user
      console.log(user)
      
    } catch (err) {
      console.log(err);
    }
  });

  router.post("/userbank", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { name,
        bankname,
        accountnumber,
        ifsc,
        acctype,
        bankaddress} = req.body;
  
      // Validate user input
      if (!(name && bankname && accountnumber && ifsc)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      
      const oldUser = await bankmodel.findOne({ accountnumber });
  
      if (oldUser) {
        return res.status(409).send("Account Number Already Exist. Please provide diffrent account number");
      }
  
      
      // Create user in our database
      const userbank = await bankmodel.create({
        name,
        bankname, // sanitize: convert email to lowercase
        accountnumber,
        ifsc,
        acctype,
        bankaddress, 
      });
  
      // Create token
      // save user token
      //user.token = token;
  
      // return new user
      //res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });


  router.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { Username, Pwd } = req.body;
  
      // Validate user input
      if (!(Username && Pwd)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ Username });
      //bcrypt.compare(Pwd, user.Password [could've hashed]
      if (user && (Pwd == user.Password)) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, Username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });



  module.exports = router
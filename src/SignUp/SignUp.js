import React, { Component, useState } from "react";
import { Container, Form, Button, Toast, ToastContainer, Alert, CloseButton } from "react-bootstrap";
import "./SignUp.css";
import Logo from "../Images/Logo2.png";
import SuccessTik from "../Success/checked.png"
import ErrorTik from "../Success/cancel.png"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

var KYCstatus = "success"


const Step1 = ({ handleChange, values, nextStep }) => {
  const [Hide, setHide] = useState(true);
  const handlerrorclose =()=>{
    setHide(true)
  }
  const Continue = (e) => {
    e.preventDefault();

    if (values.firstname === "" || values.lastname === "" || values.dob === "") {
      setHide(false)
      return false;
    }else{
      //remove alert after done with configurations 
      alert(values.firstname + values.middlename + values.lastname + values.dob); 
      nextStep();
    }
  };


  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>Create your international investing account</h3>
          <p>Join 280,000+ users who’ve signed up to invest globally</p>
        </div>

        <Form>
          <div class="FlexForm">
            <div class="item1">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                required
                name="firstname"
                onChange={handleChange("firstname")}
                value={values.firstname}
              />
            </div>

            <div class="item2">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                required
                name="middlename"
                onChange={handleChange("middlename")}
                value={values.middlename}
              />
            </div>

            <div class="item3">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                required
                name="lastname"
                onChange={handleChange("lastname")}
                value={values.lastname}
              />
            </div>
          </div>
          <div className="item4">
            <Form.Label>Date of birth *</Form.Label>
            <Form.Control
              type="date"
              required
              name="dob"
              onChange={handleChange("dob")}
              value={values.dob}
            />
          </div>

          <Button className="RegFormBtn" onClick={Continue}>
            Continue
          </Button>
        </Form>
        <Alert variant="danger mt-4" hidden={Hide}>
          Please Fill all the required details to continue!
         <CloseButton className="pull-right" onClick={handlerrorclose}/>
        </Alert>
      </Container>
    </div>
  );
};

const Step2 = ({ values, nextStep, prevStep, handleChange }) => {
  const [Hide, setHide] = useState(true);
  const handlerrorclose =()=>{
    setHide(true)
  }
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    if (values.FundingSource === "") {
      setHide(false)
      return false;
    }else{
      //remove alert after done with configurations 
      alert(values.EmploymentStatus + values.FundingSource + values.Annualincome + values.currency);
      nextStep();
    }

  };
  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>Income Details</h3>
        </div>

        <Form>
          <div class="">
            <div class="">
              <Form.Label>Employment Status</Form.Label>
              <Form.Select
                required
                name="EmploymentStatus"
                onChange={handleChange("EmploymentStatus")}
                value={values.EmploymentStatus}
              >
                <option>Select Employment Status</option>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
                <option value="Retired">Retired</option>
              </Form.Select>
            </div>

            <div class="">
              <Form.Label>Funding Source *</Form.Label>
              <Form.Select
                required
                name="FundingSource"
                onChange={handleChange("FundingSource")}
                value={values.FundingSource}
              >
                <option>Select Funding Source</option>
                <option value="Savings">Savings</option>
                <option value="Investments">Investments</option>
                <option value="Inheritance">Inheritance</option>
                <option value="Business income">Business income</option>
                <option value="Family">Family</option>
              </Form.Select>
            </div>

            <div className="AnnualIncome">
            <Form.Label>Annual Income</Form.Label>
            <div className="mb-3 d-flex">
              <Form.Control
                type="text"
                required
                name="Annualincome"
                onChange={handleChange("Annualincome")}
                value={values.Annualincome}
              />

              <Form.Select 
              className="dropdown"
              name="currency"
              onChange={handleChange("currency")}
              value={values.currency}             
              >
                <option>select currency</option>
                <option value="₹">₹</option>
                <option value="$">$</option>
              </Form.Select>
            </div>
              
            </div>
          </div>

          <div className="btnFlexgrp">
            <div>
              <Button className="RegFormBtn1" onClick={Previous}>
                Back
              </Button>
            </div>

            <div>
              <Button className="RegFormBtn2" onClick={Continue}>
                Continue
              </Button>
            </div>
          </div>
          <Alert variant="danger mt-4" hidden={Hide}>
          Please Fill all the required details to continue!
         <CloseButton className="pull-right" onClick={handlerrorclose}/>
        </Alert>
        </Form>
      </Container>
    </div>
  );
};

const Step3 = ({ handleChange, values, prevStep, nextStep }) => {
  const [Hide, setHide] = useState(true);
  const handlerrorclose =()=>{
    setHide(true)
  }
  
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();

    if (values.email === "" || values.phonenumber === "" || values.streetaddress === "" || values.city === "" || values.state === "" || values.country === "") {
      setHide(false)
      return false;
    }else{
      //remove alert after done with configurations 
      alert(
        values.email +
          values.phonenumber +
          values.streetaddress +
          values.city +
          values.state +
          values.postalcode +
          values.country
      );
      nextStep();
    }

  };

  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>Contact Details</h3>
        </div>

        <Form>
          <div class="">
            <div class="">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                required
                name="email"
                onChange={handleChange("email")}
                value={values.email}
              />
            </div>

            <div class="">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                required
                name="phonenumber"
                onChange={handleChange("phonenumber")}
                value={values.phonenumber}
              />
            </div>

            <div class="">
              <Form.Label>Street address</Form.Label>
              <Form.Control
                type="text"
                required
                name="streetaddress"
                onChange={handleChange("streetaddress")}
                value={values.streetaddress}
              />
            </div>
          </div>
          <div class="FlexForm">
            <div class="">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                required
                name="city"
                onChange={handleChange("city")}
                value={values.city}
              />
            </div>

            <div class="">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                required
                name="state"
                onChange={handleChange("state")}
                value={values.state}
              />
            </div>
          </div>

          <div class="FlexForm">
            <div class="">
              <Form.Label>Postal code</Form.Label>
              <Form.Control
                type="text"
                required
                name="postalcode"
                onChange={handleChange("postalcode")}
                value={values.postalcode}
              />
            </div>

            <div class="">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                required
                name="country"
                onChange={handleChange("country")}
                value={values.country}
              />
            </div>
          </div>

          <div className="btnFlexgrp">
            <div>
              <Button className="RegFormBtn1" onClick={Previous}>
                Back
              </Button>
            </div>

            <div>
              <Button className="RegFormBtn2" onClick={Continue}>
                Continue
              </Button>
            </div>
          </div>
          <Alert variant="danger mt-4" hidden={Hide}>
            Please Fill all the required details to continue!	
            <CloseButton className="pull-right" onClick={handlerrorclose}/>
          </Alert>
        </Form>
      </Container>
    </div>
  );
};

const Step4 = ({ handleChange, values, prevStep, nextStep }) => {
  const [Hide, setHide] = useState(true);
  const handlerrorclose =()=>{
    setHide(true)
  }
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();

    if (values.TrustedEmail === "" || values.TrustedFirstName === "" || values.TrustedLastName === "") {
      setHide(false)
    }else{
      //remove alert after done with configurations 
      alert(values.TrustedEmail + values.TrustedFirstName + values.TrustedLastName );
      nextStep();
    }
  };

  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>Trusted Contact</h3>
          <p>
            A trusted contact may be a family member, attorney, accountant or
            another third-party who you believe would respect your privacy and
            know how to handle the responsibility.
          </p>
        </div>

        <Form>
          <div class="">
            <div class="FlexForm">
              <div class="">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. jane"
                  required
                  name="TrustedFirstName"
                  onChange={handleChange("TrustedFirstName")}
                  value={values.TrustedFirstName}
                />
              </div>

              <div class="">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. doe"
                  required
                  name="TrustedLastName"
                  onChange={handleChange("TrustedLastName")}
                  value={values.TrustedLastName}
                />
              </div>
            </div>

            <div class="">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g. jane.doe22@hotmail.com"
                required
                name="TrustedEmail"
                onChange={handleChange("TrustedEmail")}
                value={values.TrustedEmail}
              />
            </div>
          </div>

          <div className="btnFlexgrp">
            <div>
              <Button className="RegFormBtn1" onClick={Previous}>
                Back
              </Button>
            </div>

            <div>
              <Button className="RegFormBtn2" onClick={Continue}>
                Continue
              </Button>
            </div>
          </div>
          <Alert variant="danger mt-4" hidden={Hide}>
            Please Fill all the required details to continue!	
            <CloseButton className="pull-right" onClick={handlerrorclose}/>
          </Alert>
        </Form>
      </Container>
    </div>
  );
};

const Step5 = ({ handleChange, values, prevStep, nextStep }) => {
  const [Hide, setHide] = useState(true);
  const handlerrorclose =()=>{
    setHide(true)
  }

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    if (values.TaxIDType === "" || values.Citizenship === "" || values.TaxIDNumber === "" || values.CountryOfBirth === "" || values.taxresidence === "") {
      setHide(false)
      return false;
    }else{
      //remove alert after done with configurations 
      alert(
        values.TaxIDType +
          values.Citizenship +
          values.TaxIDNumber +
          values.CountryOfBirth +
          values.taxresidence
      );
      nextStep();
    }


  };


  const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'India', text: 'India'},
    {value: 'United States', text: 'United States'},
  ];
  
  var Country = values.Countryselected;

  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3 className="">Tax Details</h3>
        </div>

        <Form.Label>Select Your Country</Form.Label>
          <Form.Select
          name="Countryselected"
          onChange={handleChange("Countryselected")}
          value={values.Countryselected}
          >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
          </Form.Select>
          {Country === "United States" ? (

            <Form>
            {/*Form For United States*/}
            <div class="IndiaForm">
              <Form.Label>Tax Id Type</Form.Label>
              <Form.Select
                name="TaxIDType"
                onChange={handleChange("TaxIDType")}
                value={values.TaxIDType}
                >
                  <option>--select--</option>
                  <option>TIN</option>
                  <option>SSN</option>
              </Form.Select>


              <Form.Label>Tax id ({values.TaxIDType} Number)</Form.Label>
              <Form.Control
                type="text"
                required
                name="TaxIDNumber"
                onChange={handleChange("TaxIDNumber")}
                value={values.TaxIDNumber}
              />


              <div class="FlexForm">  
                <div class="">
                  <Form.Label>Citizenship</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="Citizenship"
                    onChange={handleChange("Citizenship")}
                    value={values.Citizenship}
                  />
                </div>
  
                <div class="">
                  <Form.Label>Country of birth</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="CountryOfBirth"
                    onChange={handleChange("CountryOfBirth")}
                    value={values.CountryOfBirth}
                  />
                </div>
              </div>
  
              <div class="">
                <Form.Label>Country of tax residence</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="taxresidence"
                  onChange={handleChange("taxresidence")}
                  value={values.taxresidence}
                />
              </div>
            </div>
  
            <div className="btnFlexgrp">
              <div>
                <Button className="RegFormBtn1" onClick={Previous}>
                  Back
                </Button>
              </div>
  
              <div>
                <Button className="RegFormBtn2" onClick={Continue}>
                  Submit
                </Button>
              </div>
            </div>
            <Alert variant="danger mt-4" hidden={Hide}>
              Please Fill all the required details to continue!	
              <CloseButton className="pull-right" onClick={handlerrorclose}/>
            </Alert>
            </Form>
          ) : (
            
            <Form>
            {/*Form For India*/}
            <div class="IndiaForm">
              <Form.Label>Tax Id Type</Form.Label>
              <Form.Select
                name="TaxIDType"
                onChange={handleChange("TaxIDType")}
                value={values.TaxIDType}
                >
                  <option>--select--</option>
                  <option>PAN</option>
              </Form.Select>


              <Form.Label>Tax id ({values.TaxIDType} Number)</Form.Label>
              <Form.Control
                type="text"
                required
                name="TaxIDNumber"
                onChange={handleChange("TaxIDNumber")}
                value={values.TaxIDNumber}
              />


              <div class="FlexForm">  
                <div class="">
                  <Form.Label>Citizenship</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="Citizenship"
                    onChange={handleChange("Citizenship")}
                    value={values.Citizenship}
                  />
                </div>
  
                <div class="">
                  <Form.Label>Country of birth</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="CountryOfBirth"
                    onChange={handleChange("CountryOfBirth")}
                    value={values.CountryOfBirth}
                  />
                </div>
              </div>
  
              <div class="">
                <Form.Label>Country of tax residence</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="taxresidence"
                  onChange={handleChange("taxresidence")}
                  value={values.taxresidence}
                />
              </div>
            </div>
  
            <div className="btnFlexgrp">
              <div>
                <Button className="RegFormBtn1" onClick={Previous}>
                  Back
                </Button>
              </div>
  
              <div>
                <Button className="RegFormBtn2" onClick={Continue}>
                  Submit
                </Button>
              </div>
            </div>
            <Alert variant="danger mt-4" hidden={Hide}>
	Please Fill all the required details to continue!	
	<CloseButton className="pull-right" onClick={handlerrorclose}/>
</Alert>
            </Form>
          )}

      </Container>
    </div>
  );
};

const Step6 = ({ handleChange, values, prevStep, nextStep }) => {
  const [Hide, setHide] = useState(true);
  const handlerrorclose =()=>{
    setHide(true)
  }

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    alert(values.KycDocFile + values.KycDocFile2)
    nextStep();
   
  };
  var Country = values.Countryselected;
  // var Country = "India";
  const [Adharotp, SetAdharotp] = useState(true)
  const [PANotp, SetPANotp] = useState(true)
  
 
  const VerifyAadhar =()=>{
    alert("OTP sent to your aadhar linked mobile number")
    SetAdharotp(false)
  }


  const VerifyAadharOTP =()=>{
    alert("Aadhar Verification Done")
  }


  const VerifyPAN =()=>{
    alert("PAN Number" + values.KycDocNumber2 + "OTP sent to your mobile number")
    SetPANotp(false)
  }


  const VerifyPANOTP =()=>{
    alert("PAN Verification Done")
  }


  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>KYC Check</h3>
          <p> KYC procedures defined by banks involve all the necessary actions to ensure their customers are real, assess, and monitor risks.</p>
        </div>

        {Country === "India" ? (
        <Form>
          {/*Indian KYC Form */}
          <div class="">
            <div class="">

              <Form.Label>Documents Type</Form.Label>
              <Form.Select
                required
                name="KycDocType"
                onChange={handleChange("KycDocType")}
                value={values.KycDocType}
              >
                <option>Select Document Type</option>
                <option value="Identity verification">
                  Identity verification
                </option>
              </Form.Select>
            </div>

            <div class="">
            <h6>Upload Aadhar Card Details</h6>

            <div className="d-flex">

              <div> 
                <Form.Label>Document</Form.Label>
                <Form.Select
                  required
                  name="KycDocName"
                  onChange={handleChange("KycDocName")}
                  value={values.KycDocName}
                >
                  <option>Select Document</option>
                  <option value="Aadhar Card">Aadhar Card</option>
                </Form.Select>
              </div>

              <div style={{width:"100%",marginLeft:"10px"}}>
                <Form.Label>{values.KycDocName} Number</Form.Label><span className="pull-right p text-info" onClick={VerifyAadhar} >Verify Aadhar</span>
                <Form.Control
                  required             
                  name="KycDocNumber"
                  onChange={handleChange("KycDocNumber")}
                  value={values.KycDocNumber}
                  style={{padding:"10.5px 10px"}}
                />
              </div>

            </div> 
            </div>

            <div class="">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Your {values.KycDocName} Document</Form.Label>
              <Form.Control
                type="file"
                required
                name="KycDocFile"
                onChange={handleChange("KycDocFile")}
                value={values.KycDocFile}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Otp (sent to your adhar linked phone number)</Form.Label><span className="pull-right p text-info" onClick={VerifyAadharOTP} >Verify OTP</span>
              <Form.Control  
                placeholder="* * * * * *"               
                name="OTP"
                disabled={Adharotp}
              />
            </Form.Group>

             
            </div>
          <hr className="mt-2"/>
          </div>

          <div class="">

            <div class="">
            <h6>Upload PAN Card Details</h6>
            

            <div className="d-flex">

              <div> 
                <Form.Label>Document</Form.Label>
                <Form.Select
                  required
                  name="KycDocName2"
                  onChange={handleChange("KycDocName2")}
                  value={values.KycDocName2}
                >
                  <option>Select Document</option>
                  <option value="PAN">PAN Card</option>
                </Form.Select>

                
              </div>

              
              <div style={{width:"100%",marginLeft:"10px"}}>
                <Form.Label>{values.KycDocName2} Number</Form.Label><span className="pull-right p text-info" onClick={VerifyPAN} >Verify PAN</span>
                <Form.Control
                  required
                  name="KycDocNumber2"
                  onChange={handleChange("KycDocNumber2")}
                  value={values.KycDocNumber2}
                  style={{padding:"10.5px 10px"}}
                />
              </div>
              
            </div>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Your {values.KycDocName2}</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="KycDocFile2"
                  onChange={handleChange("KycDocFile2")}
                  value={values.KycDocFile2}
                />
              </Form.Group>
            </div>
          

            <div class="">
              

              <Form.Group>
              <Form.Label>Enter Otp (sent to your phone number)</Form.Label><span className="pull-right p text-info" onClick={VerifyPANOTP} >Verify OTP</span>
              <Form.Control  
                placeholder="* * * * * *"               
                name="OTP"
                disabled={PANotp}
              />
            </Form.Group>
            </div>
          </div>
          <Alert variant="danger mt-4" hidden={Hide}>
              Please Fill all the required details to continue!	
              <CloseButton className="pull-right" onClick={handlerrorclose}/>
          </Alert>
          <div className="btnFlexgrp">
            <div>
              <Button className="RegFormBtn1" onClick={Previous}>
                Back
              </Button>
            </div>

            <div>
              <Button className="RegFormBtn2" onClick={Continue}>
                Submit
              </Button>
            </div>
          </div>
        </Form>
        ):(
        <Form>
          {/*Forigin KYC Form */}
          <div class="">
            <div class="">
              <Form.Label>Document Type</Form.Label>
              <Form.Select
                required
                name="KycDocType"
                onChange={handleChange("KycDocType")}
                value={values.KycDocType}
              >
                <option>Select Document Type</option>
                <option value="Identity verification">
                  Identity verification
                </option>
              </Form.Select>
            </div>

            <div class="">
              <Form.Label>Document Name</Form.Label>
              <Form.Select
                required
                name="KycDocName"
                onChange={handleChange("KycDocName")}
                value={values.KycDocName}
              >
                <option>Select Document</option>
                <option value="Passport">Passport</option>
              </Form.Select>
            </div>

            <div class="">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Your {values.KycDocName}</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="KycDocFile"
                  onChange={handleChange("KycDocFile")}
                  value={values.KycDocFile}
                />
              </Form.Group>
            </div>
          </div>

          <div className="btnFlexgrp">
            <div>
              <Button className="RegFormBtn1" onClick={Previous}>
                Back
              </Button>
            </div>

            <div>
              <Button className="RegFormBtn2" onClick={Continue}>
                Submit
              </Button>
            </div>
          </div>
        </Form>
        )}
        
      </Container>
    </div>
  );
};

const KycSuccess =()=>{
  const navigation = useNavigate();
  const ContinueAfterKYC = () =>{
    navigation("/Disclosures");
  }
  return(
    <div>
      <ToastContainer className="p-3" position="middle-center">
        <Toast>
          <Toast.Header>
            <img
                src={SuccessTik}
                className="rounded me-2"
                alt=""
                style={{width:"40px"}}
            />
            <h2 className="me-auto">Success!</h2>
          </Toast.Header>
          <Toast.Body className="text-center">
            <p className="Successmessage">KYC Done successfully</p>
            <Button 
            className="BtnDark"
            onClick={ContinueAfterKYC}
            >Continue
            </Button>
            <p className="text-muted RedirectText">Click on continue or we will redirect you shortly..</p>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}

const KycError =()=>{
  const navigation = useNavigate();
  const Retry = () =>{
    navigation("/Disclosures");
  }
  return(
    <div>
      <ToastContainer className="p-3" position="middle-center">
        <Toast>
          <Toast.Header>
            <img
                src={ErrorTik}
                className="rounded me-2"
                alt=""
                style={{width:"40px"}}
            />
            <h2 className="me-auto">Error!</h2>
          </Toast.Header>
          <Toast.Body className="text-center">
            <p className="Successmessage">KYC Error.</p>
            <Button 
            className="BtnDark"
            onClick={Retry}
            >Retry
            </Button>
            <p className="text-muted RedirectText">Click on retry or we will redirect you shortly..</p>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}



export default class SignUp extends Component {
  state = {
    step: 1,
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    EmploymentStatus: "",
    FundingSource: "",
    Annualincome: "",
    currency:"",
    email: "",
    phonenumber: "",
    streetaddress: "",
    city: "",
    state: "",
    postalcode: "",
    country: "",
    TrustedFirstName: "",
    TrustedLastName: "",
    TrustedEmail: "",
    TaxIDType: "",
    Citizenship: "",
    TaxIDNumber: "",
    CountryOfBirth: "",
    taxresidence: "",
    Countryselected:"",
    KycDocType: "",
    KycDocName: "",
    KycDocNumber:"",
    KycDocFile: "",
    KycDocName2: "",
    KycDocNumber2:"",
    KycDocFile2: "",
    is_control_person: "",
    is_affiliated_exchange_or_finra: "",
    is_politically_exposed: "",
    immediate_family_exposed: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstname,
      middlename,
      lastname,
      dob,
      EmploymentStatus,
      FundingSource,
      Annualincome,
      currency,
      email,
      phonenumber,
      streetaddress,
      city,
      state,
      postalcode,
      country,
      TrustedFirstName,
      TrustedLastName,
      TrustedEmail,
      TaxIDType,
      Citizenship,
      TaxIDNumber,
      CountryOfBirth,
      taxresidence,
      Countryselected,
      KycDocType,
      KycDocNumber,
      KycDocName,
      KycDocFile,
      KycDocName2,
      KycDocNumber2,
      KycDocFile2,
    } = this.state;

    const values = {
      firstname,
      middlename,
      lastname,
      dob,
      EmploymentStatus,
      FundingSource,
      Annualincome,
      currency,
      email,
      phonenumber,
      streetaddress,
      city,
      state,
      postalcode,
      country,
      TrustedFirstName,
      TrustedLastName,
      TrustedEmail,
      TaxIDType,
      Citizenship,
      TaxIDNumber,
      CountryOfBirth,
      taxresidence,
      Countryselected,
      KycDocType,
      KycDocName,
      KycDocNumber,
      KycDocFile,
      KycDocName2,
      KycDocNumber2,
      KycDocFile2,
    };    
    

    switch (step) {
      case 1:
        return (
          <Step1  
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Step2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Step3
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Step4
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Step5
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        console.log(values)
        axios.post('http://localhost:4000/app/signup', values)
        return (
          <Step6
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        ); 
  
      case 7:
        if (KYCstatus === "success")
        {
        return <KycSuccess />;
        }else{
          return<KycError />
        }
      default:
    }
  }
}

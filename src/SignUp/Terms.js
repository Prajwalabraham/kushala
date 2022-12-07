import React, { useState } from "react";
import "./SignUp.css";
import Logo from "../Images/Logo2.png";
import { Container, Form, Button, Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const [key, setKey] = useState("Account");


  const [agree, setAgree] = useState(false);
  

  const checkboxHandler = () => {
    setAgree(!agree);
  }

  let navigate = useNavigate();

  const btnHandler =()=>{
    navigate("/AccountStatus");
  }



  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>Terms & Agreements</h3>
          <p>
            In order to comply with our terms of service, each account owner
            must be presented the following agreements.
          </p>
        </div>

        <Form>
          <div class="">
            <div class="Tab_Container">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="Account" title="Account">
                  <p>Account</p>
                </Tab>

                <Tab eventKey="Customer" title="Customer">
                  <p>Customer</p>
                </Tab>

                <Tab eventKey="Margin" title="Margin">
                  <p>Margin</p>
                </Tab>

                <Tab eventKey="Crypto" title="Crypto">
                  <p>Crypto</p>
                </Tab>
              </Tabs>
            </div>

            <div className="CheckboxTerms">
              <input type="checkbox" id="agree" onChange={checkboxHandler} />
              <span> l agree with all Terms & Agreement</span>
            </div>
          </div>

          
            <Button className="RegFormBtn"
            disabled={!agree}  
            onClick={btnHandler}
            >Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Terms;

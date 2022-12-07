import React from "react";
import "./SignUp.css";
import Logo from "../Images/Logo2.png";
import { Container } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

export default function AccountStatus() {
    const ActStatus = "Submitted"
    const ActStatusinfo = "Application has been submitted and in process of review"
        
    const [counter, setCounter] = React.useState(5);
    setInterval(() => setCounter(counter - 1), 1000);

    const navigate =useNavigate()
    if (counter === 0){
        navigate("/CreateUserLogin")
    }

  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>Account Status</h3>
          <h6 style={{lineHeight:"1.6", padding:"0px 10%"}}>Your acount activation process is started you can wait or come back later</h6>
          <p><b>Status: {ActStatus}</b></p>
          <p>{ActStatusinfo}</p>

        <div className="AccLInk">
          <p className="pt-4">We will redirect you shortly {counter}</p>
        </div>

        </div>

        <div class=""></div>
      </Container>
    </div>
  );
}

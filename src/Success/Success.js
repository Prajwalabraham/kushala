import React from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import "./Success.css";
import SuccessTik from "./checked.png"
import { useNavigate } from "react-router-dom";


export default function Success(props) {

  const link = useNavigate();
  const NextAction =()=> {
    link(props.link)
  }

  return (
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
            <p className="Successmessage">Phone number verified successfully</p>
            <Button className="BtnDark" onClick={NextAction}>Continue</Button>
            <p className="text-muted RedirectText">Click on continue or we will redirect you shortly..</p>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

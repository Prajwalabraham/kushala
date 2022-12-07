import React from 'react'
import "./Error.css"
import { Button, Toast, ToastContainer } from "react-bootstrap";
import ErrorTik from "./cancel.png"



export default function Error() {
  return (
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
            <p className="Successmessage">Ooops something went wrong</p>
            <Button className="BtnDark">Try Again</Button>
            <p className="text-muted RedirectText">Try again or we will redirect you shortly..</p>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}

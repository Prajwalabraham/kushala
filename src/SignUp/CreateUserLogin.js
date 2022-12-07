import React, {useState} from 'react'
import "./SignUp.css";
import { Button, Container, Form, Alert, CloseButton } from "react-bootstrap";
import Logo from "../Images/Logo2.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



export default function CreateUserLogin() {

    const [state, setState] = React.useState({
        Username: "",
        Password: "",
        Re_Password: "",
      })
    //   use these values to send it to database

      function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
        //console.log(value)
    }
      

    const [empty, setempty] = useState(true);
    const [Hide1, setHide1] = useState(true);
    const [Hide2, setHide2] = useState(true);
    const [Hide3, setHide3] = useState(true);
    const handlerrorclose =()=>{
        setHide1(true)
        setHide3(true)
        setHide2(true) 
        setempty(true)
    
    }


    var navigate = useNavigate()
    const HandleContinue =()=>{
        if(state.Username === "" || state.Password === "" || state.Re_Password === ""){
            setempty(false)

        }else if(state.Password !== state.Re_Password){
            setHide3(false)
        }else{
            alert( state.Username + state.Password + state.Re_Password)
            navigate("/DashboardHome")
            
        }
        console.log(state)
        axios.post('http://localhost:4000/app/userCreate', state)
    }

  return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo">
            <div className='text-center'>
            <img src={Logo} alt="" />
            <h3>Create Login Details</h3>
            <h6 style={{lineHeight:"1.6", padding:"0px 10%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
            </div>
          
            <Form name="UserCredentialsForm">
                <Form.Label>Create User Name</Form.Label>
                <Form.Control
                type="text"
                name="Username"
                value={state.Username}
                onChange={handleChange}
                />
                <Alert variant="danger mt-4" hidden={Hide1}>
                    The entry for the Username is empty orcontains invalid characters 
                    <CloseButton className="pull-right" onClick={handlerrorclose}/>
                </Alert>  

                <Form.Label>Create Password</Form.Label>
                <Form.Control
                type="password"
                name="Password"
                value={state.Password}
                onChange={handleChange}
                /> 
                <Alert variant="danger mt-4" hidden={Hide2}>
                    Please enter valid password	
                    <CloseButton className="pull-right" onClick={handlerrorclose}/>
                </Alert>  
                
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                type="password"
                name="Re_Password"
                onChange={handleChange}
                value={state.Re_Password}
                />  
                <Alert variant="danger mt-4" hidden={Hide3}>
                    Retyped Password is not same or incorrect
                    <CloseButton className="pull-right" onClick={handlerrorclose}/>
                </Alert>  
            </Form>

        <Alert variant="danger mt-4" hidden={empty}>
        Please Fill all the fields correctly
        <CloseButton className="pull-right" onClick={handlerrorclose}/>
        </Alert> 
         
        <div className="AccLInk">
          <Button onClick={HandleContinue} className='RegFormBtn'>Submit</Button>
        </div>

        </div>

        <div class=""></div>
      </Container>
    </div>
  )
}

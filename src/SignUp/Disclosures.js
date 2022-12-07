import React,{Component} from "react";
import "./SignUp.css";
import Logo from "../Images/Logo2.png";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
 





export default class Disclosures extends Component {

    state = {
        ControlPerson:'',
        affiliated:'',
        politicallyexposed:'',
        FamilyExposed:''
    }
    

    render(){
        const {ControlPerson, affiliated, politicallyexposed, FamilyExposed}= this.state  
        const values = {ControlPerson, affiliated, politicallyexposed, FamilyExposed};

        const handleChange = (input) => (e) => {
            this.setState({ [input]: e.target.value });
        };

        const handleFormSubmit =()=>{
            alert(values.ControlPerson + values.affiliated + values.politicallyexposed + values.FamilyExposed)

        }

        return (
    <div className="RegistrationFormDiv">
      <Container>
        <div className="RegistrationfrmLogo text-center">
          <img src={Logo} alt="" />
          <h3>Disclosures</h3>
        </div>

        <Form>
          <div class="">
            <div class="">
                <p>Is Control Person</p>

                <div className="FlexRadioGrp">
                    <div className="InputGrp">
                        <input type="radio"
                        name="ControlPerson"
                        onChange={handleChange("ControlPerson")}
                        value="True"/>
                        <label>Yes</label>
                    </div>

                    <div className="InputGrp">
                        <input type="radio"
                        name="ControlPerson"
                        onChange={handleChange("ControlPerson")}
                        value="False"/>
                        <label>No</label>
                    </div>
                </div>
            </div><hr/>

            <div class="">
                <p>Is affiliated exchange or finra</p>
                <div className="FlexRadioGrp">
                    <div className="InputGrp">
                        <input type="radio"
                        name="affiliated"
                        onChange={handleChange("affiliated")}
                        value="True"/>
                        <label>Yes</label>
                    </div>

                    <div className="InputGrp">
                        <input type="radio"
                        name="affiliated"
                        onChange={handleChange("affiliated")}
                        value="False"/>
                        <label>No</label>
                    </div>
                </div>
            </div><hr/>

            <div class="">
                <p>Is politically exposed</p>
                <div className="FlexRadioGrp">
                    <div className="InputGrp">
                        <input type="radio"
                        name="politicallyexposed"
                        onChange={handleChange("politicallyexposed")}
                        value="True"/>
                        <label>Yes</label>
                    </div>

                    <div className="InputGrp">
                        <input type="radio"
                        name="politicallyexposed"
                        onChange={handleChange("politicallyexposed")}
                        value="False"/>
                        <label>No</label>
                    </div>
                </div>
            </div><hr/>

            <div class="">
                <p>Immediate Family Exposed</p>
                <div className="FlexRadioGrp">
                    <div className="InputGrp">
                        <input type="radio"
                        name="FamilyExposed"
                        onChange={handleChange("FamilyExposed")}
                        value="True"/>
                        <label>Yes</label>
                    </div>

                    <div className="InputGrp">
                        <input type="radio"
                        name="FamilyExposed"
                        onChange={handleChange("FamilyExposed")}
                        value="False"/>
                        <label>No</label>
                    </div>
                </div>
            </div><hr/>
          </div>

          <Link to="/Terms">
            <Button 
                className="RegFormBtn"  
                onClick={handleFormSubmit}
                >Submit
            </Button>
          </Link>
          
        </Form>
      </Container>
    </div>
  );
}
}

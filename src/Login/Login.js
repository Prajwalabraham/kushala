import React, { Component } from "react";
import "./Login.css";
import Logo from "../Images/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import GooglePlayDownload from "../Images/GooglePlayBtn.png";
import ApplestoreDownload from "../Images/AppStoreBtn.png";
import { Form } from "react-bootstrap";
import Success from "../Success/Success";
import Error from "../Error/Error";
import axios from 'axios';

const LoginStep1 = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    console.log(values);
    axios.post('http://localhost:4000/app/login', values);
    nextStep();
    };

    const navigate = useNavigate();
    const NavigateHome =()=>{
      navigate("/")
    }

  return (
    <div>
      <div className="wrapper">
        <div className="one">
          <div className="LoginLogo">
            <img src={Logo} alt="" onClick={NavigateHome}/>
          </div>
          <div className="Login_FormContent">
            <div className="BackToHomeLink">
              <Link to="/">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </Link>
              <Link to="/">
                <h3>Back to homepage</h3>
              </Link>
            </div>

            <div>
              <Form>
                <h3 className="FormTitlestep1">Welcome to Investz</h3>
                <p>You've been missed!</p>

                <Form.Label className="text-muted">Enter Username</Form.Label>
                <Form.Control
                type="text"
                required
                name="Username"
                label="Username"
                value={values.Username}
                defaultValue={values.Username}
                onChange={handleChange("Username")}
                />
                

                <Form.Label className="text-muted mt-2">Enter Password</Form.Label>
                <Form.Control
                type="password"
                required
                name="Pwd"
                label="Pwd"
                value={values.Pwd}
                defaultValue={values.Pwd}
                onChange={handleChange("Pwd")}
                />


                <button className="ButtonNext" onClick={Continue}>
                  Sign In
                </button>
                <p className="Termstxt text-center pt-4">
                <h5>Dont Have Account?<Link to="/SignUp"> Create Now !</Link></h5>
                  <Link to="#">Investz is secure and private.</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>

        <div className="two">
          <div className="container">
            <div className="ContainerInner">
              <h5>Download Our App</h5>
              <h2>Track and and start investing! </h2>
              <p>
                Commission-free investing, plus the tools you need to put your
                money in motion. Sign up and get your first stock for free.
                Certain limitations and fees apply. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.{" "}
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <div className="btnGrp">

                <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps">
                  <img src={GooglePlayDownload} alt="" />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.apple.com/in/app-store/">
                  <img src={ApplestoreDownload} alt="" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default class Login extends Component {
  state = {
    step: 1,
    Username: "",
    Pwd: "",
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
    const { Username, Pwd } = this.state;
    const values = { Username, Pwd  };

    switch (step) {
      case 1:
        return (
          <LoginStep1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <Success link="/DashboardHome"/>;

      default:
        <Error />
    }
  }
}

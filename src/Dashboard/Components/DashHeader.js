import React, { useState} from "react";
import {Navbar,Modal,Button,Offcanvas, Table, Container} from "react-bootstrap";
import Logo from "../Images/Logo.png";
import Logo2 from "../Images/Logo2.png";
import "./css/DashHeader.css";
import UserProfile from "../Images/UserProfile.png"
import { Link, useNavigate } from "react-router-dom";

export default function DashHeader() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [showing, setShowShowing] = useState(false);
  const handleC = () => {
    setShowShowing(false);
  }
  const handleS = () => setShowShowing(true);

  var navigate = useNavigate();
  const QuickInvestRedirect =()=>{
    navigate("/QuickInvest")
  }
  const UserProfileRedirect =()=>{
    navigate("/UserProfileDetails")
  }


  return (
    <Navbar className="DashTopBar">
      <Container>
        <Navbar.Brand href="#">
        <div className="DashNavLogo">
          <img src={Logo2}  alt="Investz-Logo" />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            
            {/*Sidebar Toggle*/}
            <span className="DashIcon" >
            <i className="fa fa-bars" onClick={handleShow}></i>
            </span>

            {/*Notification Toggle*/}
            <span className="DashIcon" >
            <i className="fa fa-bell" onClick={handleS}></i>
            </span>

             

            
          </Navbar.Text>
        </Navbar.Collapse>

        <div className="">

            {/*SideBar Menu */}
            <Offcanvas className="sidebar" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton variant="white">
            <Offcanvas.Title>
              <img src={Logo} className="DashLogo" alt="Logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="SideBarMenu">
              <ul>
                <div className="QuickInvest pb-3">
                  <Button 
                  className="SidebarButton"
                  onClick={QuickInvestRedirect}
                  >
                    Quick Invest
                  </Button>
                </div>

                <li>
                  <i
                    className="icon-side-menu fa fa-search"
                    aria-hidden="true"
                  ></i>
                  <Link
                    exact
                    to="/Search"
                    className="side-links"
                    onClick={handleClick}
                  >
                    Find Anything
                  </Link>
                </li>

                <li>
                  <i
                    className="icon-side-menu fa fa-question-circle"
                    aria-hidden="true"
                  ></i>
                  <Link
                    exact
                    to="/HelpAndSupport"
                    className="side-links"
                    onClick={handleClick}
                  >
                    Help & Support
                  </Link>
                </li>

                <li>
                  <i
                    className="icon-side-menu fa fa-comments-o"
                    aria-hidden="true"
                  ></i>
                  <Link
                    exact
                    to="/Chats"
                    className="side-links"
                    onClick={handleClick}
                  >
                    Chats
                  </Link>
                </li>
                <hr style={{border:'1px solid white'}}/>
                
                <div className="Side_Sec_title">
                    <p>GENERAL</p>
                </div>

                <li>
                  <i
                    className="icon-side-menu fa fa-home"
                    aria-hidden="true"
                  ></i>

                  <Link
                    exact
                    to="/DashboardHome"
                    className="side-links"
                    onClick={handleClick}
                  >
                  Home
                  </Link>
                </li>

                <li>
                  <i
                    className="icon-side-menu fa fa-bar-chart"
                    aria-hidden="true"
                  ></i>

                  <Link
                    exact
                    to="/Stocks"
                    className="side-links"
                    onClick={handleClick}
                  >
                  Stocks
                  </Link>
                </li>

                <li>
                  <i
                    className="icon-side-menu fa fa-line-chart"
                    aria-hidden="true"
                  ></i>

                  <Link
                    exact
                    to="/InvestingOptions"
                    activeClassName="active"
                    className="side-links"
                    onClick={handleClick}
                  >
                  Investing
                  </Link>
                </li>

                <li>
                <i
                  className="icon-side-menu fa fa-btc"
                  aria-hidden="true"
                ></i>

                <Link
                  exact
                  to="/Cryptos"
                  activeClassName="active"
                  className="side-links"
                  onClick={handleClick}
                >
                Crypto
                </Link>
              </li>


              <li>
                <i
                  className="icon-side-menu fa fa-briefcase"
                  aria-hidden="true"
                ></i>

                <Link
                  exact
                  to="/Portfolio"
                  activeClassName="active"
                  className="side-links"
                  onClick={handleClick}
                >
                Portfolio
                </Link>
              </li>

              <li>
                <i
                  className="icon-side-menu fa fa-university"
                  aria-hidden="true"
                ></i>

                <Link
                  exact
                  to="/BankAndAccount"
                  activeClassName="active"
                  className="side-links"
                  onClick={handleClick}
                >
                Bank and Account
                </Link>
              </li>

              <li>
                <i
                  className="icon-side-menu fa fa-cog"
                  aria-hidden="true"
                ></i>

                <Link
                  exact
                  to="/UserSettings"
                  activeClassName="active"
                  className="side-links"
                  onClick={handleClick}
                >
                Settings
                </Link>
              </li>

            <div className="ProfileContainer mt-4" onClick={UserProfileRedirect}>
              <div>
                <img src={UserProfile} alt=""/>
              </div>
              <div className="">
                <h4>Jhon Doe</h4>
                <p>UID: 1200012563</p>
              </div>
              <div className="LogoutIcon">
                <i className="fa fa-power-off" aria-hidden="true"></i>
            </div>

            </div>

              </ul>
            
             

            </div>
          </Offcanvas.Body>
            </Offcanvas>

            <Modal show={showing} onHide={handleC}>
                    <Modal.Header closeButton>
                      <Modal.Title>Notifications</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/*Add All Notifications Data here*/}
                      <div className='Notification-list'>
                        <Table borderless responsive>
                        <tbody>

                          <tr className='notification'>
                            <td>
                              <i class="fa fa-info" aria-hidden="true"></i>
                            </td>
                            <td>
                              <h6>Notification Heading</h6>
                              <p>Lorem Ipsum is simply dummy text.</p>
                            </td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i></td>
                            <td><i class="fa fa-check" aria-hidden="true"></i></td>
                          </tr>

                          <tr className='notification'>
                            <td>
                              <i class="fa fa-info" aria-hidden="true"></i>
                            </td>
                            <td>
                              <h6>Notification Heading</h6>
                              <p>Lorem Ipsum is simply dummy text.</p>
                            </td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i></td>
                            <td><i class="fa fa-check" aria-hidden="true"></i></td>
                          </tr>
                        
                      </tbody>
                        </Table>
                      </div>
                    <div className='text-center'>
                      <p><span style={{color:"#FC5C04",textDecoration:"none",cursor:"pointer"}}>View All</span></p>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button className='buttonMarkAll' onClick={handleC}>
                        Mark all as read
                      </Button>
                    </Modal.Footer>
                  </Modal>
        </div>
      </Container>
    </Navbar>
  
  );
}

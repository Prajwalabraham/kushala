import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Footer.css"
import Ft_Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'
import GoogleplayDownload from "../Images/GooglePlayBtn.png"
import ApplestoreDownload from "../Images/AppStoreBtn.png"
import 'font-awesome/css/font-awesome.min.css';
import { motion } from 'framer-motion'

export default function Footer() {
  return (

        
    <div className='WebFooter pt-3'>
        <div className='container'>
            <Row>
                <Col sm={3} className=""> 
                    <Link to="/home">
                        <img 
                        src={Ft_Logo} 
                        alt="Investz Logo"
                        className='FtLogo'
                        />
                    </Link><br/>

                    <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps">
                    <img 
                    src={GoogleplayDownload} 
                    alt="Investz Logo"
                    className='FtBtn'
                    /><br/>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.apple.com/in/app-store/">
                    <img 
                    src={ApplestoreDownload} 
                    alt="Investz Logo"
                    className='FtBtn'
                    />
                    </a>

                    <div className='Ft-IconSet'>

                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                        <motion.i 
                            whileHover={{ scale: 1.3 }}
                            className="fa fa-facebook-square Ft-Icon" 
                            aria-hidden="true">
                        </motion.i>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                        <motion.i 
                            whileHover={{ scale: 1.3 }}
                            className="fa fa-linkedin-square Ft-Icon" 
                            aria-hidden="true">
                        </motion.i>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                        <motion.i 
                            whileHover={{ scale: 1.3 }}
                            className="fa fa-instagram Ft-Icon" 
                            aria-hidden="true">
                        </motion.i>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                        <motion.i 
                            whileHover={{ scale: 1.3 }}
                            className="fa fa-twitter-square Ft-Icon" 
                            aria-hidden="true">
                        </motion.i>
                        </a>
                        

                    </div>

                </Col>

                <Col sm={3}>
                    <h4>Company</h4>
                    <div className='Ft-Link-List'> 
                        <Link to="/About" target="_blank">About</Link><br/>                                           
                        <Link to="/Features" target="_blank">Features</Link><br/>                       
                        <Link to="/About" target="_blank">Careers</Link><br/>
                        <Link to="/help" target="_blank">Support</Link><br/>
                        <Link to="/About" target="_blank">Contact Us</Link>
                    </div> 
                </Col>

                <Col sm={3}>
                    <h4>Resources</h4>
                    <div className='Ft-Link-List'> 
                        <Link to="/home" target="_blank">Learn</Link><br/>                                           
                        <Link to="/home" target="_blank">Blog</Link><br/>                       
                        <Link to="/Stocklist" target="_blank">Stocks</Link><br/>
                        <Link to="/Crypto" target="_blank">Crypto</Link><br/>
                        <Link to="/home" target="_blank">Investments</Link>
                    </div> 
                   
                </Col>

                <Col sm={3}>
                    <h4>Support</h4>
                    <div className='Ft-Link-List'> 
                    <Link to="/home" target="_blank">+91-0000000000</Link><br/>                                           
                    <Link to="/home" target="_blank">support@mail.com</Link><br/>                       
                    <Link to="/help" target="_blank">Help</Link><br/>
                </div> 

                </Col>
               
            </Row>
            <Row className='pt-2 pb-2 text-center CP-txt'>
            <p>© Copyright 2022 | All Rights Reserved.</p>
            </Row>
        </div>

        
    </div>

  
  )
}

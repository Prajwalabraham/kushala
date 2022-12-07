import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import "./herosection.css"
import { motion } from "framer-motion"



export default function HeroSection(props) {
    const navigate = useNavigate();

  const SignUpClick =()=>{
    navigate("/SignUp");
    window.scrollTo(0,0)

  }
  const DownloadAppClick =()=>{
    navigate("/AppPage");
    window.scrollTo(0,0)


  }
  return (
    <div className='HeroSection'>
            <Container>
                <Row>
                    <Col sm={6} className="herocol1">
                        <h2 className='HeroH2'>{props.h2Heading}</h2>
                        <h1 className='HeroH1'>{props.h1Heading}</h1>
                        <p className='herop pt-2'>{props.p1}</p>
                        <p className='herop pt-2'> {props.p2} </p>

                        <div className='pt-3'
                        style={{display:"flex"}}>

                            <div>
                                <motion.button 
                                whileHover={{ scale: 1.1 }} 
                                className='ButtonWhite'
                                onClick={SignUpClick}
                                >
                                {props.b1Title}
                                </motion.button>
                            </div>

                            <div>
                                <motion.button 
                                whileHover={{ scale: 1.1 }} 
                                className='ButtonDark'
                                onClick={DownloadAppClick}>
                                {props.b2Title}
                                </motion.button>
                            </div>

                        </div>
                        

                    </Col>
                    <Col sm={6} className='anim_img'>
                        <div>
                            <img src={props.src} alt="animated"/>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

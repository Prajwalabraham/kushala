import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./AppDownloadCTA.css"
import { motion } from "framer-motion"
import GooglePlay from "../Images/GooglePlayBtn.png"
import AppleStore from "../Images/AppStoreBtn.png"
import AppUse from "../Images/IosPortfolio.png"

export default function AppDownloadCTA() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    className='container AppDownloadCTA'>
        <Row>
            <Col sm={6}>
                <h3>Use Investz on the go!</h3>
                <p>Invest, save and track your global portfolio from anywhere. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  <br/>Download our app today</p>
                
                <div className='pt-1'
                style={{display:"flex"}}>

                    <div>
                    <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps">
                       <motion.img 
                       whileHover={{ scale: 1.05 }} 
                       src={GooglePlay} 
                       alt="Google Play Download Button"
                       className='DownloadAppButton'
                       />
                    </a>
                    </div>

                    <div>
                    <a target="_blank" rel="noreferrer" href="https://www.apple.com/in/app-store/">
                        <motion.img 
                        whileHover={{ scale: 1.05 }} 
                        src={AppleStore} 
                        alt="Apple Store Download Button"
                        className='DownloadAppButton'
                        />
                    </a>
                    </div>

                </div>
            </Col>
            <Col sm={6} className="AppUse text-center">
                <img 
                src={AppUse} 
                alt="App using man"
                />
            </Col>
        </Row>
    </motion.div>
  )
}

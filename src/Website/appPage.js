import React from 'react'
import Navigationmenu from './Components/navigation_menu';
import './css/appPage.css'
import HeroSection from './Components/HeroSection'
import Heroimage from './Images/AppPageGeroIMG.png';
import {Row, Col, Container} from "react-bootstrap"
import Footer from './Components/Footer';
import AppDemoMokuup from "./Images/AppDemoMokuup.png"
import GooglePlayDownload from "./Images/GooglePlayBtn.png"
import AppleStoreDownload from "./Images/AppStoreBtn.png"
import { motion } from "framer-motion"
import TrustIcon from "./Images/trust.png"



const AppPage = () => {
  return (
    <div>

    {/*Navinagtion menu */}
    <Navigationmenu />

    {/*Hero Section */}
    <HeroSection 
      src = {Heroimage}
      h2Heading="Investz For All"
      h1Heading="Simplified investing platform."
      p1="Commission-free investing, plus the tools you need to put your money in motion. 
      Sign up and get your first stock for free. Certain limitations and fees apply.
      Lorem Ipsum is simply dummy text of the printing "
      p2="Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free."
      b1Title="Sign up"
      b2Title="Download App"
    />
    
    {/*Focused feature Section 1*/}
    <section>
      <Container>
      <Row>
        <Col sm={6}>
          <img style={{width:"100%"}}src={AppDemoMokuup} alt=""/>
        </Col>
        <Col sm={6}>
          <div className='contentAPPdemo'>
            <h4>Plan your financial life</h4>
            <h2>Track and invest at Zero Commission</h2>
            <p>Pariatur aut provident voluptatem in nulla sapiente. Nemo qui aut et qui rerum nulla eos eum. Temporibus ipsa et et mo Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  
            <div style={{display:"flex"}} className="DownloadButtonsgrp">
            <div>
            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps">
              <motion.img 
              whileHover={{ scale: 1.05 }} 
              src={GooglePlayDownload} 
              alt="Download from google play"/>
            </a>
            </div>
            <div>
            <a target="_blank" rel="noreferrer" href="https://www.apple.com/in/app-store/">
              <motion.img 
              whileHover={{ scale: 1.05 }} 
              src={AppleStoreDownload} 
              alt="Download from apple store"/>
            </a>
            </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </section>

    {/*Focused feature Section 2*/}
    <section style={{backgroundColor:"black"}}>
      <Container>
      <Row>        
        <Col sm={6}>
          <div className='contentAPPdemo2'>
            <h4>Plan your financial life</h4>
            <h2>Invest in crypto instantly.</h2>
            <p>Pariatur aut provident voluptatem in nulla sapiente. Nemo qui aut et qui rerum nulla eos eum. Temporibus ipsa et et mo Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  
            <div style={{display:"flex"}} className="DownloadButtonsgrp">
            <div>
            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps">
              <motion.img 
              whileHover={{ scale: 1.05 }} 
              src={GooglePlayDownload} 
              alt="Download from google play"/>
            </a>
            </div>
            <div>
            <a target="_blank" rel="noreferrer" href="https://www.apple.com/in/app-store/">
              <motion.img 
              whileHover={{ scale: 1.05 }} 
              src={AppleStoreDownload} 
              alt="Download from apple store"/>
            </a>
            </div>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <img style={{width:"100%"}}src={AppDemoMokuup} alt=""/>
        </Col>
      </Row>
      </Container>
    </section>

    {/* Trust CTA section*/}
    <section className='text-center TrustCTA'>
      <img src={TrustIcon} alt="Trust Icon" />
      <h3>Trusted By 2+ Million People.</h3>
      <p>40,00,000 Indians trust their INR 100,000+ Cr Investments on Investz App. Investz is 100% safe & secure.</p>
    </section>

    {/*Footer*/}
    <Footer />

    </div>
  )
}
export default AppPage;
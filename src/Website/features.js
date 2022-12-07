import React from 'react'
import HeroSection from './Components/HeroSection';
import Navigationmenu from './Components/navigation_menu';
import "./css/Features.css"
import HeroFeatures from "./Images/HeroFeatures.gif";
import {Row, Col,Container} from "react-bootstrap"
import FeatureCard from './Components/FeatureCard';
import TransInvest from "./Images/TransInvest.png"
import Support from "./Images/Support.png"
import InvestContext from "./Images/InvestContext.png"
import NoManualNeeded from "./Images/NoManualNeeded.png"
import PlatformShowcase from "./Images/PlatformShowcase.png"
import RealTimeTrade from "./Images/RealTimeTrade.png"
import AppDownloadCTA from "./Components/AppDownloadCTA"
import Footer from "./Components/Footer"


const Features = () => {
  return (
    <div>
      {/* Navigation Menu*/}
      <Navigationmenu />


      {/* Hero Section */}
      <HeroSection 
          src = {HeroFeatures}
          h2Heading="All In One Investz"
          h1Heading="Everything in one place."
          p1="Commission-free investing, plus the tools you need to put your money in motion. 
          Sign up and get your first stock for free. Certain limitations and fees apply.
          Lorem Ipsum is simply dummy text of the printing "
          p2="Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free."
          b1Title="Sign up"
          b2Title="Download App"
      />

      {/* Feature Cards Section */}
      <section className='container FeaturesCardContainer'>
        <div className='text-center'>
            <h2>India’s most popular <span style={{color:"#FC5C04"}}>super money investing app</span></h2>
        </div>

        <Row>
          <Col sm={3}>
            <FeatureCard 
            src={TransInvest}
            heading="Transperent Investing"
            content="We’ve designed our patform from the ground up to
            the next generation of newcomers and experts
            alike"
            />            
          </Col>

          <Col sm={3}>
            <FeatureCard 
            src={Support}
            heading="Fast, friendly support"
            content="We’ve designed our patform from the ground up to
            the next generation of newcomers and experts
            alike"
            />
          </Col>
          <Col sm={3}>
            <FeatureCard 
            src={InvestContext}
            heading="Invest with context"
            content="We’ve designed our patform from the ground up to
            the next generation of newcomers and experts
            alike"
            />
          </Col>
          <Col sm={3}>
            <FeatureCard 
            src={NoManualNeeded}
            heading="No manual needed"
            content="We’ve designed our patform from the ground up to
            the next generation of newcomers and experts
            alike"
            />
          </Col>
        </Row>

      </section>

       {/* Showcase Sub-Expanded Features Section */}
       <section className='text-center Showcase'>
          <h3>More than just an investment platform - a smart companion</h3>
          <div className='PlatformShowcase'>
            <img src={PlatformShowcase} alt="Platform Showcase"/>
          </div>
       </section>

       <section className='ExtededFeature'>
        <Container>

          <Row className='gx-5'>
            <Col sm={6} className="ContentCol">
              <div>
                <h4>Trade in real-time</h4>
                <hr />
                <p>Get live prices, latest news, analyst opinions and other relevant updates on the stocks and ETFs you would like to research updates on the stocks and ETFs you would like to research</p>
                <p>Get live prices, latest news, analyst opinions and other relevant updates on the stocks and ETFs you would like to research updates on the stocks and ETFs you would like to research</p>
              </div>
            </Col>

            <Col sm={6}>
              <img src={RealTimeTrade} alt="Real Time Trade"/>
            </Col>
          </Row>

          <Row className='gx-5 pt-4'>
            <Col sm={6}>
              <img src={RealTimeTrade} alt="Real Time Trade"/>
            </Col>

            <Col sm={6} className="ContentCol">
              <div>
                <h4>Trade in real-time</h4>
                <hr />
                <p>Get live prices, latest news, analyst opinions and other relevant updates on the stocks and ETFs you would like to research updates on the stocks and ETFs you would like to research</p>
                <p>Get live prices, latest news, analyst opinions and other relevant updates on the stocks and ETFs you would like to research updates on the stocks and ETFs you would like to research</p>
              </div>
            </Col>
          </Row>

        </Container>
       </section>

      {/* App Download CTA */}
       <section>
          <AppDownloadCTA />
       </section>

      {/*Footer*/}
      <Footer />


    </div>
  )
}
export default Features;
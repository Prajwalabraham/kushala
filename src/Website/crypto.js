import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppDownloadCTA from './Components/AppDownloadCTA';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navigationmenu from './Components/navigation_menu';
import "./css/Crypto.css"
import Cryptogif from "./Images/cryptoportfolio.gif"
import BTC from "./Images/CryptoLogos/BTC.png"

const SubFeatureCard =(props)=>{
  return(
    <div className='SubFeatureCard'>
    <i class={props.icon} aria-hidden="true"></i>
      <h4>{props.title}</h4>
      <p>{props.dec}</p>
    </div>
  )
}

const CryptoTable=()=>{
  return(
    <div className='DirTableDIV'>
      <Table responsive className='DirTable'>

        <thead>
        <tr>
         <th><i className="fa fa-sort" aria-hidden="true"></i></th>
         <th style={{width:"40%"}}>Name</th>
         <th><i className="fa fa-sort" aria-hidden="true"></i> Price</th>
         <th>24h Change</th>
         <th>Action</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td><img src={BTC} alt="" /></td>
          <td>
            <p className='assetname'>
              <span>BTC</span>
              <br/>Bitcoin
            </p>
          </td>
          <td className='info'>$24,399.59</td>
          <td className='info'>+1.63%</td>
          <td className='infoLink'><Link to="#">Trade</Link></td>
        </tr>

        <tr>
          <td><img src={BTC} alt="" /></td>
          <td>
            <p className='assetname'>
              <span>BTC</span>
              <br/>Bitcoin
            </p>
          </td>
          <td className='info'>$24,399.59</td>
          <td className='info'>+1.63%</td>
          <td className='infoLink'><Link to="#">Trade</Link></td>
        </tr>
        </tbody>

      </Table>
    </div>
  )
}
const Crypto = () => {
  return (
    <div>
    {/*Navigation menu*/}
    <Navigationmenu/>
    
    {/*Hero Section*/}
    <HeroSection 
    src = {Cryptogif}
    h2Heading="All In One Investz"
    h1Heading="Invest in crypto instantly."
    p1="Commission-free investing, plus the tools you need to put your money in motion. 
    Sign up and get your first stock for free. Build and diversify your portfolio with a growing collection of 30 cryptos. Certain limitations and fees apply."
    p2="Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free."
    b1Title="Sign Up"
    b2Title="Download App"
    />

    {/*Sub Features Section*/}
    <section>
      <div className='SectionFocusedFeatures'>
        <h3>Accessible to anyone</h3>
        <p>Lightning fast transactions. buy and sell with easy and peace of mind.
        lnvest in cryptocurrency today with just few clicks
        </p>
      </div>
      <Container>
      <Row className='text-center pb-5'>
        <Col sm={4}>
          <SubFeatureCard
            icon="SubFetureicon fa fa-bolt"
            title="lnstant trading"
            dec="Real-time balance updates and notifications"
          />
        </Col>
        <Col sm={4}>
          <SubFeatureCard
            icon="SubFetureicon fa fa-usd"
            title="Low & transparent fees"
            dec="All our fees are transparent, upfront and listed when you make a trade."
          />
        </Col>
        <Col sm={4}>
          <SubFeatureCard
            icon="SubFetureicon fa fa-building-o"
            title="India based"
            dec="headquartered in India, Lightning fast transactions"
          />
        </Col>
        <Col sm={4}>
          <SubFeatureCard
            icon="SubFetureicon fa fa-question-circle"
            title="24/7 Support"
            dec="Our support staff is available 24 hours a day to help"
          />
        </Col>
        <Col sm={4}>
          <SubFeatureCard
            icon="SubFetureicon fa fa-shield"
            title="Secure storage"
            dec="To keep your funds secure, we store 98% of digital funds in an offline, secure wallet."
          />
        </Col>
        <Col sm={4}>
          <SubFeatureCard
            icon="SubFetureicon fa fa-lock"
            title="Trade with peace of mind"
            dec="2FA, Browser, Session and Device Management, and more. "
          />
        </Col>
      </Row>
      </Container>      
    </section>

    {/*Crypto directory*/}
    <section>
      <div className='DirectoryDIV'>
        <h3>Crypto Directory</h3>
      </div>
      <Container className='text-center'>
      <div class="sb-example-1">
         <div class="search">
            <input type="text" class="searchTerm" placeholder="Search here..."/>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
           </button>
        </div>
      </div>
      </Container>

      <Container>
        <CryptoTable/>
      </Container>
      
    </section>

    {/*App Download CTA*/}
    <AppDownloadCTA />

    {/*Footer*/}
    <Footer />

    
    </div>
  )
}
export default Crypto;
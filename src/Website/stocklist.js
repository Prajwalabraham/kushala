import React from 'react'
import Navigationmenu from './Components/navigation_menu';
import Footer from './Components/Footer';
import "./css/Stocklist.css"
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col} from 'react-bootstrap';
import StockCard from './Components/StockCard';
import AAPL from './Images/StockLogos/AAPL.png'
import MSFT from './Images/StockLogos/MSFT.jpg'
import GOOG from './Images/StockLogos/GOOG.jpg'
import META from './Images/StockLogos/FB.jpg'
import NVDA from './Images/StockLogos/NVDA.jpg'
import INFY from './Images/StockLogos/INFY.jpg'
import AppDownloadCTA from './Components/AppDownloadCTA';
import Tech from './Images/Categories/Tech.png'
import Financial from './Images/Categories/Financial.png'
import Energy from './Images/Categories/Energy.png'
import FAANG from './Images/Categories/FAANG.png'
import Hot from './Images/Categories/Hot.png'
import TopGainers from './Images/Categories/TopGainers.png'
import GooglePlay from "./Images/GooglePlayBtn.png"
import AppleStore from "./Images/AppStoreBtn.png"



const CategoryCard =(props)=>{
  return(
    <div className='CatCard'>
      <div><img src={props.src} alt="Category Icon"/></div>
      <div className='textContainer'>
        <p>Invest in</p>
        <h5>{props.CatTitle}</h5>
      </div>
    </div>
  )
}

const StockList = () => {
  const navigate = useNavigate();

  const ExploreStock =()=>{
    navigate("/StockSearch");
    window.scrollTo(0,0)
  }
  const SignUPClick =()=>{
    navigate("/Signup");
    window.scrollTo(0,0)
  }

  return (
    <div>
    {/* Navigation Menu */}
    <Navigationmenu/>

    {/* Hero Section */}
    <section className='text-center StockHeroSection'>
      <div>
        <h2>Simplified investing platform for all.</h2>
        <p>Invest in companies that operate in markets and regions all across the world</p>
      </div>
      <div className='BtnGrp'>

        <div>
          <motion.button
          className='button-lite'
          whileHover={{scale:1.05}}
          onClick={ExploreStock}>
            Explore
          </motion.button>
        </div>

        <div>
          <motion.button
          className='button-dark'
          whileHover={{scale:1.05}}
          onClick={ExploreStock}>
            Us Stocks
          </motion.button>
        </div>

      </div>
    </section>

    {/* Stock Listing Cards Section */}
    <section className='StocksCardListing'>
      <Container>
        <Row>

          <Col sm={6}>
          <h4>Most Popular Stocks</h4>
          </Col>

          <Col sm={6} className="ExploreLink">
            <Link 
            to="/StockSearch"
            className='pull-right'
            >
              Explore All
            </Link>
          </Col>
          
        </Row>

        <Row className='StockCardROW'>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={AAPL}
          Status="StatusUp"
          title="Apple Inc (AAPL)"
          price="$172.1"
          stats="+2.14%"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={MSFT}
          Status="StatusUp"
          title="Microsoft Corporation (MSFT)"
          price="$291.91"
          stats="+1.7%"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={GOOG}
          title="Alphabet Inc - Class C (GOOG)"
          price="$122.65"
          stats="+2.36%"
          Status="StatusUp"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={META}
          title="Facebook Inc - Class A (META)"
          price="$180.5"
          stats="+1.7%"
          Status="StatusUp"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={NVDA}
          title="Infosys Ltd - ADR (INFY)"
          price="$187.09"
          stats="+4.27%"
          Status="StatusUp"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={INFY}
          title="Infosys Ltd - ADR (INFY)"
          price="$20.11"
          stats="-0.2%"
          Status="StatusDown"
          icon="fa fa-caret-down"/> 
          </Col>

          
        </Row>
      </Container>
    </section>


    <section className='StocksCardListing'>
      <Container>
        <Row>

          <Col sm={6}>
          <h4>Top Tech Stocks</h4>
          </Col>

          <Col sm={6} className="ExploreLink">
            <Link 
            to="/StockSearch"
            className='pull-right'
            >
              Explore All
            </Link>
          </Col>
          
        </Row>

        <Row className='StockCardROW'>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={AAPL}
          Status="StatusUp"
          title="Apple Inc (AAPL)"
          price="$172.1"
          stats="+2.14%"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={MSFT}
          Status="StatusUp"
          title="Microsoft Corporation (MSFT)"
          price="$291.91"
          stats="+1.7%"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={GOOG}
          title="Alphabet Inc - Class C (GOOG)"
          price="$122.65"
          stats="+2.36%"
          Status="StatusUp"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={META}
          title="Facebook Inc - Class A (META)"
          price="$180.5"
          stats="+1.7%"
          Status="StatusUp"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={NVDA}
          title="Infosys Ltd - ADR (INFY)"
          price="$187.09"
          stats="+4.27%"
          Status="StatusUp"
          icon="fa fa-caret-up"/> 
          </Col>

          <Col sm={3} xs={6} md={3} lg={2} className="pt-4"> 
          <StockCard
          StockImg={INFY}
          title="Infosys Ltd - ADR (INFY)"
          price="$20.11"
          stats="-0.2%"
          Status="StatusDown"
          icon="fa fa-caret-down"/> 
          </Col>

          
        </Row>
      </Container>
    </section>

    {/* Us Stock Search Categories */}
    <section className='StockSearchCategories'>
      <Container>
      <h3>Explore US Stocks</h3>
        <Row>

          <Col sm={6} xs={6} md={6} lg={3}>
            <CategoryCard
            src={Tech}
            CatTitle="Top Tech Stocks"
            />
            <CategoryCard
            src={Financial}
            CatTitle="Financial Stocks"
            />
            <CategoryCard
            src={FAANG}
            CatTitle="FAANG Stocks"
            />
          </Col>

          <Col sm={6} xs={6} md={6} lg={3}>
            <CategoryCard
            src={Hot}
            CatTitle="Hot Stocks"
            />
            <CategoryCard
            src={TopGainers}
            CatTitle="Top Gainers Stocks"
            />
            <CategoryCard
            src={Energy}
            CatTitle="Top Energy Stocks"
            />
          </Col>

          <Col sm={12} xs={12} md={12} lg={6}>
            <div className='bg-light sideCTA' style={{borderRadius:"10px", padding:"30px"}}>
              <h4>Own your future. Build your portfolio.</h4>

              <p>Invest in stocks, and crypto. Sign up now to claim free stock on us. Start investing today.</p>

              <motion.button
                className='button-lite'
                whileHover={{scale:1.05}}
                onClick={SignUPClick}>
                Sign Up
              </motion.button>

              <p className='pt-2'>Or simply download our app and start investing.</p>

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

            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Download App CTA */}
    <AppDownloadCTA />

    {/* Footer */}
    <Footer />
    
   </div>
  )
}
export default StockList;
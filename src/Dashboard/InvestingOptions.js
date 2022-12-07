import React from "react";
import "./Components/css/Dashboard.css";
import StocksQuickValuesSlide from "./Components/StocksQuickValuesSlide";
import DashHeader from "./Components/DashHeader";
import StocksCardSlider from "./Components/StocksCardSlider";
import { Col, Container, Row, Table } from "react-bootstrap";
import BTC from "../Dashboard/Images/CryptoLogos/BTC.png"
import { Link } from "react-router-dom";
import Tech from '../Website/Images/Categories/Tech.png'
import Financial from '../Website/Images/Categories/Financial.png'
import Energy from '../Website/Images/Categories/Energy.png'
import FAANG from '../Website/Images/Categories/FAANG.png'
import Hot from '../Website/Images/Categories/Hot.png'
import TopGainers from '../Website/Images/Categories/TopGainers.png'


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




export default function InvestingOptions() {
  return (
    <div>
      {/*Dashboard Header */}
      <DashHeader />

      {/*Stocks slide loop */}
      <Container>
        <StocksQuickValuesSlide />
      </Container>

      {/*Populer Stocks */}
      <Container>
        <h5 className="titleExplore">Explore popular stocks</h5>        
      </Container>
      <StocksCardSlider />

      {/*Crypto list and categories to explore*/}
      <Container className="pt-2">
        <Row>
          <Col sm={6}>
            <h5 className="titleExplore">Crypto Assets</h5>
            <Link to="/Cryptos" className="pull-right Listlinkleft">
                <i class="fa fa-ellipsis-h" aria-hidden="true" style={{fontSize:"25px", color:"#fc5c04"}}></i>
            </Link>
            <div className="CryptoListTable">
                <Table responsive>
                <tbody>
                <tr>
                    <td style={{width:"12%"}}><img src={BTC} alt="crypto icon"/></td>
                    <td style={{width:"70%"}}><span>BTC</span><br/>Bitcoin</td>
                    <td>+ 6.23%</td>
                </tr>
                <tr>
                    <td><img src={BTC} alt="crypto icon"/></td>
                    <td><span>BTC</span><br/>Bitcoin</td>
                    <td>+ 6.23%</td>
                </tr>
                <tr>
                    <td><img src={BTC} alt="crypto icon"/></td>
                    <td><span>BTC</span><br/>Bitcoin</td>
                    <td>+ 6.23%</td>
                </tr>
                <tr>
                    <td><img src={BTC} alt="crypto icon"/></td>
                    <td><span>BTC</span><br/>Bitcoin</td>
                    <td>+ 6.23%</td>
                </tr>
                <tr>
                    <td><img src={BTC} alt="crypto icon"/></td>
                    <td><span>BTC</span><br/>Bitcoin</td>
                    <td>+ 6.23%</td>
                </tr>
                </tbody>
                </Table>
            </div>
          </Col>
          
          <Col sm={6} xs={6} md={6} lg={3} className="pt-4">
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

        <Col sm={6} xs={6} md={6} lg={3} className="pt-4">
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
        </Row>
      </Container>
    </div>
  );
}

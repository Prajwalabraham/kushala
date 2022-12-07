import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import DashHeader from './Components/DashHeader'
import "./Components/css/Dashboard.css"
import { Link } from 'react-router-dom';
import AAPL from "../Website/Images/StockLogos/AAPL.png"
import BTC from "../Website/Images/CryptoLogos/BTC.png"
import TopStocksCardSlider from './Components/TopStocksCardSlider';
import ActionCard from './Components/ActionCard';

export default function DashboardHome() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div>
    {/*Dashboard Header */}  
    <DashHeader/>

    {/*User Welcome */}  
    <Container className='pt-4 welcometxt'>
      <h4>Hello, <span>Jhon Doe</span></h4>
    </Container>


    {/*Portfolio Numbers */}
    <Container>
      <Row>
      
        <Col className='PortfolioNumbers' xl={3} sm={3} xs={6}>
          <h5>My Net Worth</h5>
          <h6>$10.0</h6>
          <p>Last Updated: {date}</p>
        </Col>

        <Col className='PortfolioNumbers' xl={3} sm={3} xs={6}>
          <h5>Total Investment</h5>
          <h6>$100.0</h6>
          <p>Last Updated: {date}</p>
        </Col>

        <Col className='PortfolioNumbers' xl={3} sm={3} xs={6}>
          <h5>Total Earnings</h5>
          <h6>$10.0</h6>
          <p>Last Updated: {date}</p>
        </Col>

        <Col className='PortfolioNumbers' xl={3} sm={3} xs={6}>
          <h5>Total Loss</h5>
          <h6>$90.0</h6>
          <p>Last Updated: {date}</p>
        </Col>
        
      </Row>
    </Container>  

    {/*Stocks Crypto Listing */}
    <Container>
      <Row>

        <Col sm={6} className="StocksCryptoList">
          <div>
            <div><h6>Top Stocks</h6></div>
            <div className='Listlinkleft'><Link to="/Stocks">View all</Link></div>
          </div>
          <Table responsive className='StocksTable'>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Last Price</th>
          <th>Change</th>
          <th>%Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={AAPL} alt="Stock symbol" /></td>
          <td><span className='Stockshortname'>AAPL</span><p className='Stockname'>Apple Inc.</p></td>
          <td className='stockdetail'>$150.04</td>
          <td className='stockdetail'>+93.75</td>
          <td className='stockdetail'>1.06% ▲</td>
        </tr>
      </tbody>
    </Table>
        </Col>

        <Col sm={6} className="StocksCryptoList">
          <div>
            <div><h6>Top Cryptos</h6></div>
            <div className='Listlinkleft'><Link to="/Cryptos">View all</Link></div>
          </div>
          <Table responsive className='StocksTable'>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Last Price</th>
          <th>%Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={BTC} alt="Stock symbol" /></td>
          <td><span className='Stockshortname'>BTC</span><p className='Stockname'>Bitcoin</p></td>
          <td className='stockdetail'>$21,398.62</td>
          <td className='stockdetail'>0.24% ▲</td>
        </tr>
      </tbody>
    </Table>
        </Col>

      </Row>
    </Container>


    {/*Action Section */}
    <Container>
      <Row className='ActionCards'>
        <h5>Actions</h5>

        <ActionCard 
        className="ActionIcon fa fa-exclamation-triangle"
        ActionTitle="Verify your profile"
        Dec="Lorem ipsum is a placeholder text commonly used to demonstrate"
        btnclass="ActionButton"
        Button="Verify Now"
        />

        <ActionCard 
        className="ActionIcon fa fa-circle-o-notch"
        ActionTitle="No Actions"
        Dec="No pending action items available at this moment."
        btnclass="ActionButton disabled"
        Button="No Action"
        />
      </Row>  
    </Container>

    {/*Trending Stocks Card Slider */}
    <TopStocksCardSlider/>

    </div>
  )
}

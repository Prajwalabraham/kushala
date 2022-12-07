import React from 'react'
import "./Components/css/Dashboard.css"
import DashHeader from './Components/DashHeader'
import { Col, Container, Row, Table } from 'react-bootstrap'
import AAPL from "../Website/Images/StockLogos/AAPL.png"
import BTC from "../Website/Images/CryptoLogos/BTC.png"
import { Link } from 'react-router-dom';
import StocksCardSlider from './Components/StocksCardSlider'
import CryptoCardSlider from './Components/CryptoCardSlider'



export default function QuickInvest() {
  return (
    <div>

      {/*Dashboard Header */}
      <DashHeader/>

      {/*User Welcome */}  
      <Container className='pt-4 welcometxt'>
          <h4>Top Movers</h4>
      </Container>

      {/*To Stocks and Crypto */}
      <Container>
        <Row>

          <Col sm={6} className="StocksCryptoList">
            <div>
              <div><h6>Stocks</h6></div>
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
              <div><h6>Cryptos</h6></div>
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

      {/*Popularly traded stocks */}
      <Container>
      <div className='PopularListing pt-3'>
        <h5>Popularly Traded Stocks</h5>
        <Link to="/Stocks">View All</Link>
      </div>
      </Container>
      <StocksCardSlider />



      {/*Popularly traded Cryptos */}
      <Container>
      <div className='PopularListing pt-3'>
        <h5>Top Crypto Gainers</h5>
        <Link to="/Cryptos">View All</Link>
      </div>
      </Container>
      <CryptoCardSlider />
    </div>
  )
}

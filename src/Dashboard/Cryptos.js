import React from 'react'
import { Col, Container, Row, Table} from 'react-bootstrap'
import DashHeader from './Components/DashHeader'
import BTC from './Images/CryptoLogos/BTC.png'

const CryptoCard =()=>{
  return(
    <Col className='CardStock' sm={2} xs={6} md={3} lg={2}>
      <img src={BTC} alt="Stock Logo"/>
      <h5>BTC</h5>
      <p className='title'>Bitcoin</p>
      <hr/>
      <p className='Price'>USD 150.01</p>
      <p className='Rate'>USD+1.53 (+1.03%)</p>
    </Col>
  )
}

export default function Cryptos() {

  return (
    <div>
    {/*Dashboard Header */}
    <DashHeader/>

    {/*User Holding Stocks Cards */}
    <Container>
      <Row>
        <h4 className='StocksDashTitle pt-3'>Your Stocks Portfolio</h4>
          <div className='Menupopup'>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>


        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
      </Row>
    </Container>
    
    {/*Wishlist Stock and their details */}
    <Container className='Wishlist'>
      <h6 className='pt-2 WishlistTitle'>Stock Watchlist</h6>
      <Row>
        <Col sm={9}>Chart</Col>
        <Col sm={3} className="StocksDetails">

          <h6 className='CryptoDecTitle'>About Bitcoin (BTC)</h6>
          <p className='CryptoDectext'>Bitcoin is a new electronic payment system that removes the need for third party financial institutions. It speeds up transactions while reducing costs and minimizing the potential for fraud. The name “cryptocurrency” points to how it uses “cryptographic proof” to work, AKA a blockchain.</p>
          <Table responsive>
          <thead>
            <tr>
              <th>Bitcoin Stats</th>
              <th></th>
            </tr>
          </thead>
            
          <tbody>
            <tr>
              <td className='cryptovaluelabel'>Market Capitalization</td>
              <td className='cryptovalue'>$ 423.82B</td>
            </tr>
            <tr>
              <td className='cryptovaluelabel'>24h Trading Volume</td>
              <td className='cryptovalue'>$ 710,079,866.90</td>
            </tr>
            <tr>
              <td className='cryptovaluelabel'>Current Supply</td>
              <td className='cryptovalue'>Ƀ 19,096,618.0</td>
            </tr>
            <tr>
              <td className='cryptovaluelabel'>24h Trading Volume</td>
              <td className='cryptovalue'>Ƀ 33,312.2</td>
            </tr>
          </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

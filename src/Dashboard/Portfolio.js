import React from 'react'
import DashHeader from './Components/DashHeader'
import { Col, Container, Row, Table } from 'react-bootstrap'
import "./Components/css/Dashboard.css"
import AAPL from "./Images/StockLogos/AAPL.png"
import BTC from "./Images/CryptoLogos/BTC.png"
import NVDA from "./Images/StockLogos/NVDA.jpg"




export default function Portfolio() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div>
    <DashHeader/>


    {/*Portfolio Numbers */}
    <Container>
      <h5 className='pt-4 portfoliopagetitle' >Portfolio Overview</h5>
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

    {/*User Holding And Assets */}
    <Container className='pt-1'>
      <Row>
        <Col xl={6} sm={6} xs={12} className='UserCollectionTable'>
          <h6 className='UserCollectionTitle pb-2'>My Stock Holdings</h6>
          <Table responsive>
            <tbody>
              <tr className='trholdingrow'>
                <td><img src={AAPL} alt='' className='Stockimg'/></td>
                <td className='identitiy'>Apple Inc<p>AAPL</p></td>
                <td>+ 4.46%</td>
              </tr>
              <tr className='trholdingrow'>
                <td><img src={AAPL} alt='' className='Stockimg'/></td>
                <td className='identitiy'>Apple Inc<p>AAPL</p></td>
                <td>+ 4.46%</td>
              </tr>
              
            </tbody>
          </Table>
        </Col>

        <Col xl={6} sm={6} xs={12} className='UserCollectionTable'>
          <h6 className='UserCollectionTitle pb-2'>My Crypto Assets</h6>
          <Table responsive>
            <tbody>
              <tr className='trholdingrow'>
                <td><img src={BTC} alt='' className='Stockimg'/></td>
                <td className='identitiy'>Bitcoin<p>BTC</p></td>
                <td>+ 4.76%</td>
              </tr>
              <tr className='trholdingrow'>
                <td><img src={BTC} alt='' className='Stockimg'/></td>
                <td className='identitiy'>Bitcoin<p>BTC</p></td>
                <td>+ 4.76%</td>
              </tr>
              
            </tbody>
          </Table>
        </Col>
        
      </Row>
    </Container>


     {/*Recommendations */}
     <Container className='pt-1'>
     <Row>
       <Col xl={6} sm={6} xs={12}> 
       <h6 className='UserCollectionTitle pt-2' >Recommended stocks to buy</h6>

          <Row>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={NVDA} alt="" />
                <p>NVDA</p>
              </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={NVDA} alt="" />
                <p>NVDA</p>
              </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
            <div className='text-center Recommended'>
              <img src={NVDA} alt="" />
              <p>NVDA</p>
            </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={NVDA} alt="" />
                <p>NVDA</p>
              </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
            <div className='text-center Recommended'>
              <img src={NVDA} alt="" />
              <p>NVDA</p>
            </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={NVDA} alt="" />
                <p>NVDA</p>
              </div>
            </Col>
          </Row>
       </Col>
        
       <Col xl={6} sm={6} xs={12}>  
       <h6 className='UserCollectionTitle pt-2' >Recommended Cryptos to buy</h6>

          <Row>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={BTC} alt="" />
                <p>BTC</p>
              </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={BTC} alt="" />
                <p>BTC</p>
              </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
            <div className='text-center Recommended'>
              <img src={BTC} alt="" />
              <p>BTC</p>
            </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={BTC} alt="" />
                <p>BTC</p>
              </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
            <div className='text-center Recommended'>
              <img src={BTC} alt="" />
              <p>BTC</p>
            </div>
            </Col>
            <Col sm={4} xl={2} xs={4} className="recoBox">
              <div className='text-center Recommended'>
                <img src={BTC} alt="" />
                <p>BTC</p>
              </div>
            </Col>
          </Row>

       </Col> 
     </Row>
   </Container>


    </div>
  )
}

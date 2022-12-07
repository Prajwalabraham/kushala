import React from 'react'
import { Col, Container, Row, Table} from 'react-bootstrap'
import DashHeader from './Components/DashHeader'
import AAPL from './Images/StockLogos/AAPL.png'




const StockCard =()=>{
  return(
    <Col className='CardStock' sm={2} xs={6} md={3} lg={2}>
      <img src={AAPL} alt="Stock Logo"/>
      <h5>AAPL</h5>
      <p className='title'>Apple Inc.</p>
      <hr/>
      <p className='Price'>USD 150.01</p>
      <p className='Rate'>USD+1.53 (+1.03%)</p>
    </Col>
  )
}


export default function Stocks() {


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


        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
      </Row>
    </Container>
    
    {/*Wishlist Stock and their details */}
    <Container className='Wishlist'>
      <h6 className='pt-2 WishlistTitle'>Stock Watchlist</h6>
      <Row>
        <Col sm={9}>Chart</Col>
        <Col sm={3} className="StocksDetails">
          <Table responsive>
          <thead>
            <tr>
              <th>Market Stats</th>
              <th></th>
            </tr>
          </thead>
            
          <tbody>
            <tr>
              <td>Previous Close</td>
              <td className='Datavalue'>$148.47</td>
            </tr>
            <tr>
              <td>Open</td>
              <td className='Datavalue'>$149.78</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td className='Datavalue'>75.6M</td>
            </tr>
            <tr>
              <td>Market Cap</td>
              <td className='Datavalue'>75.6M</td>
            </tr>
          </tbody>
          </Table>


          <Table responsive>
          <thead>
            <tr>
              <th>Returns</th>
              <th></th>
            </tr>
          </thead>
            
          <tbody>
            <tr>
              <td>1 month return</td>
              <td className='Datavalue'>+14.15%</td>
            </tr>
            <tr>
              <td>3 month return</td>
              <td className='Datavalue'>-9.03%</td>
            </tr>
            <tr>
              <td>1 year return</td>
              <td className='Datavalue'>+2.3%</td>
            </tr>
            <tr>
              <td>5 year return</td>
              <td className='Datavalue'>+275.75%</td>
            </tr>
          </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

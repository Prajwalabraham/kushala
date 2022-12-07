import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DashHeader from './Components/DashHeader'
import StocksCardSlider from './Components/StocksCardSlider'
import CryptoCardSlider from './Components/CryptoCardSlider'




const FaqCard =()=>{
  return(
    <Col sm={3} xl={2} xs={6} className="FaqCard">
      <i class="fa fa-info" aria-hidden="true"></i>
      <h5>How does it work?</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </Col>
  )
}


export default function Search() {
  return (
    <div>

    {/* Dashboard header */}
    <DashHeader />

    {/* Search component */}
    <Container className="text-center">
    <div class="form-group has-search mt-4">
      <span class="fa fa-search form-control-feedback"></span>
      <input type="text" class="form-control" placeholder="Search"/>
    </div>
    </Container>

    {/* FAQ Cards */}
    <Container>
      <Row className='mt-4'>
      <Col><h5 className='FaqTitle'>Have some unanswered questions?</h5></Col>
      <Col><Link to="/Help" className='pull-right AllHelpLink'>See More</Link></Col>
      </Row>
      <Row className='mt-1'>
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
      </Row>
    </Container>


    {/* Top Stocks Recommendations */}
    <Container className='mt-2'>
      <Row>
        <Col onSubmit={6}>
        <h5 className='FaqSubTitle'>Recommended Top Stocks For You</h5>
        <StocksCardSlider />
        </Col>
        <Col onSubmit={6}>
        <h5 className='FaqSubTitle'>Recommended Top Cryptos For You</h5>
        <CryptoCardSlider />
        </Col>
      </Row>
      
    </Container>

    


    </div>
  )
}

import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import DashHeader from './Components/DashHeader'



export default function HelpSupport() {
  return (
    <div>
    <DashHeader/>
    
    {/* Search quey section */}
    <Container className="text-center divsearch">
      <h4>How we can help you? </h4>
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search"/>
      </div>
    </Container>

    {/* Contact CTA */}
    <Container>
      <Row>
        <Col sm={6} className="CTAdivided text-center">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <h6>Give us a call </h6>
          <p>Talk to us over the phone for additional help</p>
          <Button className='CTAdividedbutton'>Call Now</Button>
        </Col>
        <Col sm={6} className="CTAdivided text-center">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <h6>Drop us a mail</h6>
          <p>Talk to us over the phone for additional help</p>
          <Button className='CTAdividedbutton'>Mail Us</Button>
        </Col>
      </Row>
    </Container>


    </div>
  )
}

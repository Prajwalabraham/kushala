import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import DashHeader from './Components/DashHeader'
import AAPL from "./Images/StockLogos/AAPL.png"


export default function BankAndAccount() {
  return (
    <div>
    {/*Dashboard Header */}
    <DashHeader/>

    {/*Linked Bank Account */}
    <Container className='pt-3'>
      <Row>
        <Col>
        <h5 className='BankPageTitle'>Linked Bank Account</h5>
        </Col>
        <Col>
          <Button className='buttonEditBankDetails float-right'>Edit Details</Button>
        </Col>
        <div className='DetailsDisplay'>
          <div className='BankDetails'>
            <img src={AAPL} alt=""/>
            <div>
              <span className='Banktitle'>Bank Name</span>
              <p className='BankAccType'>Savings Account</p>
            </div>
          </div>
          <hr/>
          <div className='UserAccDetails'>
          <p><b>Account Holder Name : </b>User Full Name</p>
          <p><b>Account Number : </b>1234567890</p>
          <p><b>IFSC Code : </b>IFS0012458</p>
          </div>
        </div>
      </Row>
    </Container>
    </div>
  )
}

import React from 'react'
import "./StockCard.css"
import { Card } from 'react-bootstrap'

export default function StockCard(props) {

  return (
    <div>
    <Card className='StockCard'>
    <Card.Img
    style={{marginLeft:'15px',marginTop:'15px'}}
    src={props.StockImg} 
    alt="Stock logo"
    className='StockImage'/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ position: "absolute", bottom: '10px', left: '15px'}}>
        {props.price} <br/>
        <span className={props.Status}>
          {props.stats} <i className={props.icon} aria-hidden="true"></i>
        </span>
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  )
}

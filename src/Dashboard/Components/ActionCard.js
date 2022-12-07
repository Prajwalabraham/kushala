import { Button, Col} from 'react-bootstrap'
import React from 'react'
import "./css/Dashboard.css"

export default function ActionCard(props) {
  return (
    <Col sm={4} xs={12} md={6} xl={3} className="ActionCard">
      <i className={props.className} aria-hidden="true"></i>
      <h6>{props.ActionTitle}</h6>
      <p>{props.Dec}</p>
      <Button className={props.btnclass}>{props.Button}</Button>
    </Col>
  )
}

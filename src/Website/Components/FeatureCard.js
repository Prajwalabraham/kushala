import React from 'react'
import "./FeatureCard.css"




export default function FeatureCard(props) {
  return (
    <div className='Card'>
        <img src={props.src} alt="Feature Icon"/>
        <h4>{props.heading}</h4>
        <p>{props.content}</p>
    </div>
  )
}

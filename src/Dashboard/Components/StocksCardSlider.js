import React from 'react'
import { Container } from 'react-bootstrap'
import "./css/TopStocksCardSlider.css"
import Carousel from 'react-elastic-carousel';
import AAPL from "../Images/StockLogos/AAPL.png"



const Item =()=>{
    return(
        <div className='SlideStockCard'>   

                <img src={AAPL} alt="StockImg" className='StockLogo'/>
                <h6 className='CardT'>AAPL</h6>
                <p className='CardT2'>Apple Inc. </p>
                <hr/>
                <p className='CardP'>$150.04</p>
                <p className='CardR'>USD+1.53 (+1.03%) </p>        
        </div>
    )
}
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 800, itemsToShow: 2},
    { width: 900, itemsToShow: 4 },
    { width: 1000, itemsToShow: 5 },
    { width: 1200, itemsToShow:6 }
  ];

export default function StocksCardSlider() {
   




  return (
    <Container className='SliderContainer'>
        <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints} autoPlaySpeed={2000}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </Carousel>
        </div>
    </Container>
  )
}

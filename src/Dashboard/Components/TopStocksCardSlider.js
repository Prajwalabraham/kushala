import React from 'react'
import { Container } from 'react-bootstrap'
import "./css/TopStocksCardSlider.css"
import Carousel from 'react-elastic-carousel';
import AAPL from "../Images/StockLogos/AAPL.png"



const Item =()=>{
    return(
        <div className='SlideStockCard'>   
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <img src={AAPL} alt="StockImg" className='StockLogo'/>
                <div>
                    <p className='price'>$150.04</p><br />
                    <p className='rate'>1.60% </p>
                </div>
            
            </div>

            <div><p>Apple Inc. </p></div>
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

export default function TopStocksCardSlider() {
   




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

import React from 'react'
import "./css/StocksQuickValuesSlide.css"

const StockItem =(Props)=>{
    return(
        <div className='d-flex'>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
            <span style={{paddingRight:"30px"}}> </span>
            <span>{Props.name}: {Props.change}</span>
        </div>
    )
}

export default function StocksQuickValuesSlide() {
  return (
    <div className="scroll">
        <div className="m-scroll">
            <div className='spann'><StockItem name="AAPL" change="+ 0.10%" /></div>
            <div className='spann'><StockItem name="AAPL" change="+ 0.10%" /></div>
        </div>
    </div>
  )
}

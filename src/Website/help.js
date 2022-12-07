import React from 'react'
import Navigationmenu from './Components/navigation_menu';
import "./css/help.css"
import {Tabs, Tab, Container} from "react-bootstrap"
import Footer from "./Components/Footer"


const Tab1 =()=>{
  return(
    <div className='TabContent'>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. </p>
  </div>
  )
}

const Tab2 =()=>{
  return(
    <div className='TabContent'>
    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. </p>
  </div>
  )
}


const Help = () => {
  return (
    <div style={{backgroundColor:"#000000"}}>

    {/*Navigation menu*/}
    <Navigationmenu/>

    {/*Info Tabs*/}
    <div className='text-center HeroTitle'>
        <h2>Customer Help</h2>
    </div>
    <Container className='mt-4 TabContainer'>
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3">

      <Tab eventKey="home" title="Account" className='TabTitle'>
        <Tab1 />
      </Tab>

      <Tab eventKey="tab2" title="Bank A/c">
        <Tab2 />
      </Tab>

    </Tabs>
    </Container>
    
    
    {/*Footer*/}
    <Footer />

    </div>
  )
}
export default Help;
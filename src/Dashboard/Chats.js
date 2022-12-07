import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashHeader from './Components/DashHeader'
import "./Components/css/chats.css"
import UserProfile from "../Dashboard/Images/User/user-default.png"



export default function Chats() {
  return (
    <div>
    {/*Dashboard Header */}
    <DashHeader/>

    {/*Chat System Container */}
    <Container className='ChatSystemContainer'>
      <Row>
        <Col sm={4} className="StickSideBar">
          <div className="SidebarTop">
          </div>
          <div className='ChatBox'>
            <div className='UserProfile'><img src={UserProfile} alt=""/>
            </div>
            <div className='UserInfo'>
              <span className='UserName'>Sagar Chatur</span>
              <p className='RecentChats'>recent chats data shown here</p>
            </div>
          </div>

          <div className='ChatBox'>
            <div className='UserProfile'><img src={UserProfile} alt=""/>
            </div>
            <div className='UserInfo'>
              <span className='UserName'>Sagar Chatur</span>
              <p className='RecentChats'>recent chats data shown here</p>
            </div>
          </div>

          <div className='ChatBox'>
            <div className='UserProfile'><img src={UserProfile} alt=""/>
            </div>
            <div className='UserInfo'>
              <span className='UserName'>Sagar Chatur</span>
              <p className='RecentChats'>recent chats data shown here</p>
            </div>
          </div>

          <div className='ChatBox'>
            <div className='UserProfile'><img src={UserProfile} alt=""/>
            </div>
            <div className='UserInfo'>
              <span className='UserName'>Sagar Chatur</span>
              <p className='RecentChats'>recent chats data shown here</p>
            </div>
          </div>

          <div className='ChatBox'>
            <div className='UserProfile'><img src={UserProfile} alt=""/>
            </div>
            <div className='UserInfo'>
              <span className='UserName'>Sagar Chatur</span>
              <p className='RecentChats'>recent chats data shown here</p>
            </div>
          </div>

          <div className='ChatBox'>
            <div className='UserProfile'><img src={UserProfile} alt=""/>
            </div>
            <div className='UserInfo'>
              <span className='UserName'>Sagar Chatur</span>
              <p className='RecentChats'>recent chats data shown here</p>
            </div>
          </div>

          <div className='ChatBox'>
          <div className='UserProfile'><img src={UserProfile} alt=""/>
          </div>
          <div className='UserInfo'>
            <span className='UserName'>Sagar Chatur</span>
            <p className='RecentChats'>recent chats data shown here</p>
          </div>
        </div>

        <div className='ChatBox'>
          <div className='UserProfile'><img src={UserProfile} alt=""/>
          </div>
          <div className='UserInfo'>
            <span className='UserName'>Sagar Chatur</span>
            <p className='RecentChats'>recent chats data shown here</p>
          </div>
        </div>

        <div className='ChatBox'>
          <div className='UserProfile'><img src={UserProfile} alt=""/>
          </div>
          <div className='UserInfo'>
            <span className='UserName'>Sagar Chatur</span>
            <p className='RecentChats'>recent chats data shown here</p>
          </div>
        </div>

        <div className='ChatBox'>
          <div className='UserProfile'><img src={UserProfile} alt=""/>
          </div>
          <div className='UserInfo'>
            <span className='UserName'>Sagar Chatur</span>
            <p className='RecentChats'>recent chats data shown here</p>
          </div>
        </div>

        <div className='ChatBox'>
          <div className='UserProfile'><img src={UserProfile} alt=""/>
          </div>
          <div className='UserInfo'>
            <span className='UserName'>Sagar Chatur</span>
            <p className='RecentChats'>recent chats data shown here</p>
          </div>
        </div>
         
        </Col>



        <Col sm={8}>dfhg</Col>



      </Row>
    </Container>
    
    </div>
  )
}

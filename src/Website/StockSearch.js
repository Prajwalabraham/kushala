import React from 'react'
import "./css/StockSearch.css"
import NavigationMenu from "./Components/navigation_menu"
import { Container, Row, Col, Form, Table } from 'react-bootstrap'
import StockIcon from "./Images/StockLogos/AAPL.png"
import Footer from "./Components/Footer"
import AppDownloadCTA from "./Components/AppDownloadCTA"
import { Link } from 'react-router-dom'



const options = [
    { value: 'All Stocks', label: 'All Stocks' },
    { value: 'Us Stocks', label: 'Us Stocks' },
    { value: 'Tech Stocks', label: 'Tech Stocks' },
    { value: 'Energy Stocks', label: 'Energy Stocks' },
    { value: 'Financial Stocks', label: 'Financial Stocks' },
    { value: 'FAANG Stocks', label: 'FAANG Stocks' },
    { value: 'Hot Stocks', label: 'Hot Stocks' },
    { value: 'Top Gainers', label: 'Top Gainers' },
  ];

  

  

export default function StockSearch() {


    
  return (
    <div>
    
    {/* Navigation Menu */}
    <NavigationMenu />

    {/* Stock Search Section */}
    <section className='StockSearchSection'>

        <Container>
            <Row>
                <Col sm={6} xs={6}>
                <div className="BackWithTitle">
                    <Link to="/Stocklist">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h3>All Stocks</h3>
                </div>
                
                </Col>
                <Col sm={6}  xs={6}>
                    <div className='CategorySortDropdown'>
                    <Form.Select>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Form.Select>
                        
                    </div>
                </Col>
            </Row>  
        </Container>

        <Container className='HeaderContent pb-5'>
            <Row>
                <h4>All Stocks</h4>
                <p>Search across all stocks categories and get to know all stocks price</p>
            </Row>
            
            <Table responsive className='StockTable'>
                <thead>
                    <tr>
                    <th style={{width:"100px"}}>#</th>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Volume</th>
                    <th>Market</th>
                    <th></th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <div className='StockIcon'>
                            <img src={StockIcon} alt="Stock Icon"/>
                        </div>
                    </td>
                    <td>Apple, Inc.</td>
                    <td>AAPL</td>
                    <td>$147.04</td>
                    <td>+0.47</td>
                    <td>3,871,328</td>
                    <td>2.38T</td>
                    <td><i className="fa fa-chevron-right linkIcon" aria-hidden="true"></i></td>
                    
                    </tr>

                    <tr>
                    <td>
                        <div className='StockIcon'>
                            <img src={StockIcon} alt="Stock Icon"/>
                        </div>
                    </td>
                    <td>Apple, Inc.</td>
                    <td>AAPL</td>
                    <td>$147.04</td>
                    <td>+0.47</td>
                    <td>3,871,328</td>
                    <td>2.38T</td>
                    <td><i className="fa fa-chevron-right linkIcon" aria-hidden="true"></i></td>
                    
                    </tr>

                    <tr>
                    <td>
                        <div className='StockIcon'>
                            <img src={StockIcon} alt="Stock Icon"/>
                        </div>
                    </td>
                    <td>Apple, Inc.</td>
                    <td>AAPL</td>
                    <td>$147.04</td>
                    <td>+0.47</td>
                    <td>3,871,328</td>
                    <td>2.38T</td>
                    <td><i className="fa fa-chevron-right linkIcon" aria-hidden="true"></i></td>
                    
                    </tr>
                </tbody>
            </Table>

        </Container>

    <AppDownloadCTA/>   

    </section>

    {/*Footer */}
    <Footer />

    </div>
  )
}

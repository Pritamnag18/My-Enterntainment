import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsAlignEnd } from "react-icons/bs";

import {Link} from 'react-router-dom'; //-It generate the link of the router

const HeaderComponents = () => {
    // const navData = [ 
    //     // {name:'Home', link:'/'},
     
    // ]
  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
           <Navbar.Brand link='/' >My Entertainment</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
            <Nav className='me-auto my-2 my-lg-0'
            style={{maxHeight:'100px'}}
            navbarScroll>
                {
                    // navData.map((item)=>{  //-Callback Function
                    //      return(
                    //         <Nav key={item.name}>
                    //            <Link to={item.link}>
                    //            {item.name}
                    //            </Link>
                    //         </Nav>
                    //      )
                    // })
                }
                <button style={{display: 'flex',borderRadius: '20px'}}>Camera</button>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default HeaderComponents;

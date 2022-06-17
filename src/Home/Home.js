import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container , Row, Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import image from '../images/sivas.jpg';
import './Home.css';
import About from "../About/About";
import ReactTypingEffect from 'react-typing-effect';


class Home extends React.Component{
    about=()=>{
        window.scrollBy(0, 999)
}
    render(){
        return(
            <Container fluid>
                 <div className="largeHeader" >
                    <Navbar expand="lg"  className="nav">
                        <Navbar.Brand>
                            <img className="logo" src={image}/>
                        </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mainNav">
                            <Nav.Link className="navbars">Home</Nav.Link>
                            <Nav.Link className="navbars">About</Nav.Link>
                            <Nav.Link className="navbars">Resume</Nav.Link>
                            <Nav.Link className="navbars">Portfolio</Nav.Link>
                            <Nav.Link className="navbars">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    <div className="myName">
                        <h1 className="name">Siva Prakash</h1><br/>
                    </div>
                    <ReactTypingEffect
                    className="typedText"
                    text={["I'm Full Stack Developer","Handling Front End","Handling Back End"]}
                    />
                 </div>
                 <About className="about"/>
            </Container>
            // <Container>
            //     <Row>
            //         <Col sm={12} md={12} lg={12}>
            //              <div className="largeHeader" >
            //                  <div className="header">
            //                     <img className="logo" src={image}/>
            //                         {/* <i class="fa-solid fa-bars"></i> */}
            //                         <span className="content">Contact</span>
            //                         <span className="content">Portfolio</span>
            //                         <span className="content">Resume</span>
            //                         <span className="content" onClick={this.about}>About</span>
            //                        <span className="content">Home</span>
            //                  </div>
            //                  <div className="myName">
            //                         <h1 className="name">Siva Prakash</h1><br/>
            //                  </div>
            //                  <ReactTypingEffect
            //                  className="typedText"
            //                              text={["I'm Full Stack Developer","Handling Front End","Handling Back End"]}
            //                          />
            //              </div>
            //              <About className="about"/>
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
}

export default Home;
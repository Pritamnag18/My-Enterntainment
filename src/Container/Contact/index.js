// import  React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
// import './style.css';


// const  ContactContainer = ()=>{
//     const myData = [
//         {name:'Facebook', link:'https://www.facebook.com', text:'Follow to my facebook.'},
//         {name:'Linkedin', link:'www.linkedin.com/in/pritam-nag-4b22701b5', text:'Follow to my linkedin.'},
//         {name:'Twitter', link:'https://twitter.com', text:'Follow to my twitter.'},
//         {name:'StackOverFlow', link:'https://stackoverflow.com', text:'Check out to my stackoverflow account.'},
//         {name:'Blog', link:'https://blogspot.com/', text:'Follow to my blog.'},
//         {name:'GitHub', link:'https://github.com/Pritamnag18', text:'Follow to my github account.'},
//         {name:'YouTube', link:'https://www.youtube.com', text:'Follow to my youtube channel.'},
//         {name:'Email', link:'mailto:pritmnag18@gmail.com',  text:'write to me a mail'}
//     ]
//     return (
//         <div className='contactWrap'>
//         <Container>
//             <Row>
//                 <Col>
//                     <p>CONNECT WITH US</p>
//                     <h1>Get in Touch</h1>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col className='conectIcon'>
//                     <ul className='socialIconsList'>
//                         <li>
//                             <a rel="noreferrer" href="https://www.facebook.com" target="_blank">
//                                 <BsFacebook />
//                             </a>
//                         </li>
//                         <li>
//                             <a rel="noreferrer" href="https://www.linkedin.com/in/pritam-nag-4b22701b5/" target="_blank">
//                                 <BsLinkedin />
//                             </a>
//                         </li>
//                         <li>
//                             <a rel="noreferrer" href="https://twitter.com/rohitazad" target="_blank">
//                                 <BsTwitter />
//                             </a>
//                         </li>
//                         <li>
//                             <a rel="noreferrer" href="https://stackoverflow.com/users/1365428/rohit-azad-malik" target="_blank">
//                                 <BsStackOverflow />
//                             </a>
//                         </li>
//                         <li>
//                             <a rel="noreferrer" href="https://rohitazadmalik.blogspot.com/" target="_blank">
//                                 <BsGoogle />
//                             </a>
//                         </li>
//                         <li>
//                             <a rel="noreferrer" href="https://github.com/Pritamnag18" target="_blank">
//                                 <BsGithub />
//                             </a>
//                         </li>
//                         <li>
//                             <a rel="noreferrer" href="https://www.youtube.com/c/AzadMalikRohit" target="_blank">
//                                 <BsYoutube />
//                             </a>
//                         </li> 
//                     </ul>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <ListGroup className='contactList'>
//                         {
//                             myData && myData.length > 0 ? myData.map((item)=>{
//                                 return (
//                                     <ListGroup.Item key={item.name}>
//                                         <span>{item.text}</span>
//                                         <a href={item.link} rel="noreferrer"  target="_blank">
//                                             {item.link}
//                                         </a>
//                                     </ListGroup.Item>
//                                 )
//                             }) : ''
//                         }
                        
//                     </ListGroup>
//                 </Col>
//             </Row>
//         </Container>
//         </div>
//     )
// }

// export default ContactContainer;
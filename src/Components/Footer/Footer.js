
import './Footer.css'
import FooterIcon from './FooterIcon'
import 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer ()
{    
    return(

        <div className="mainFooter bg-secondary bg-gradient">
            <h1 class ="brand"> 
            Dragos News
            </h1>
            <Row>
                <Col>
                <h3></h3>
                <p>Customer Center</p>
                <p>Contact Us</p>
                <p>Cancel My Subscription</p>
                </Col>
                <Col>
                <p>About US</p>
                <p>News Archive</p>
                <p>Corrections</p>
                </Col>
                <Col>
                <p>Terms of Use</p>
                <p>Bring your Ad</p>
                <p>Recruitment</p>
                </Col>
            </Row>
            <div className='socialLinks'>
                < a href ="#">
                    <FooterIcon brand="facebook" hoverColor="#6441a5"> </FooterIcon>
                </a>
                < a href ="#">
                    <FooterIcon brand="instagram" hoverColor="#6441a5"> </FooterIcon>
                </a>
                < a href ="#">
                    <FooterIcon brand="youtube" hoverColor="#6441a5"> </FooterIcon>
                </a>
                < a href ="#">
                    <FooterIcon brand="twitter" hoverColor="#6441a5"> </FooterIcon>
                </a>
                < a href ="#">
                    <FooterIcon brand="amazon" hoverColor="#6441a5"> </FooterIcon>
                </a>

            </div>
            <p className='copyright'> @Copyrights DragosNews2023</p>
        </div>
    )
}
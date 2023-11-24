
import './Home.css'
import Carousel from '../../Components/Carousel/Carousel'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarouselData from "../../Components/Carousel/CarouselData.json"
import NewsData from "../News/NewsData.json"
import Cards from "../../Components/Cards/Cards"
import CardsData from "../../Components/Cards/Cardsdata.json"

export default function Home ()
{
    const data = NewsData.categories
    console.log(CarouselData.slides[2].src)
    return (
        <div className='homecontainer'>
            <Row className = "topPart">
                <Col>
                {
                    data.map((item,idx) =>{
                        return <a href={item.link} className='newslinks'>{item.cat}</a>
                    })
                }
                </Col>
                <Col xs={6}>
                    <Carousel data={CarouselData.slides} />
                </Col>
                <Col>
                <div className ="ad">
                    Get your Advertisment here
                </div>
                </Col>
            </Row>
            <Cards data={CardsData.information}/>
            </div>    
    )
}
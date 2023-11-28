
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Cards.css'

export default function Cards({data})
{
    console.log(data)
    return(
        <div className='homecards'>
            {
                data.map((item,idx) => {
                    return (

                    <Card className="homecard light mb-3 bg-secondary bg-gradient" key={idx} >
                    <Card.Img className='homecard-img-top' variant="top" src={item.src} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.text}
                      </Card.Text>
                      <Button href={item.href} variant="primary">{item.button}</Button>
                    </Card.Body>
                  </Card>
                
                )})
            }
        </div>
    )
}
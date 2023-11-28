import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './NewsCards.css'
export default function DarkCard({data}) {
  return (
        <div class="cardscontainer">
    {
    data.map((item,idx) => {
        return(
              <Card className="newscard">
                <div class="row">
                  <div class="col-md-4">
                    <a className='newslink' href={item.href}>
                <Card.Img className="newsimg" variant="top" src={item.main_photo_src} alt={item.alt} key={idx}/>
                </a>
                </div> 
                <Card.Body className="newsbody col-md-6">
                  <Card.Title className="newstitle">{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 small">
                    <time dateTime={item.time}>
                      {item.calendar}
                    </time>
                  </Card.Subtitle>
                  <div className="newsbar" />
                  <Card.Text className="newstext">
                    {item.subtitle}
                  </Card.Text>
                </Card.Body>
                <div className='col-md-2'>
                  <ul className="newstagbox">
                    <li className="tag__item"><i className="fa fa-tag mr-2"></i>{item.type}</li>
                    <li className="tag__item"><i className="fa fa-clock mr-2"></i>Reading time : {item.reading}</li>
                    <li className="tag__item play ">
                      <a href={item.href} className='newslink'><i className="fa fa-fire"></i>Read</a>
                    </li>
                  </ul>
                  </div>
                  </div>
              </Card>   
        )
    })
   }
   </div>
  )
};
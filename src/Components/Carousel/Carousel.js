
import "./Carousel.css"

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const Carousel=({data}) =>{
    const [slide,SetSlide] = useState(0);
    if (!Array.isArray(data)) {
        console.error("Invalid data provided to Carousel:", data);
        return null; 
      }
      const length = data.length
    const PrevSlide = () =>
    {
        if(slide === 0 )
        SetSlide(length-1)
        else SetSlide (slide-1)
    }
    const NextSlide = () =>
    {
        if(slide === length-1)
        SetSlide(0)
        else
        SetSlide(slide + 1) 
    }
    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={PrevSlide} className="arrow arrow-left" />
            {data.map((item,idx)=>{
                return ( <>
                <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}></img>
                <p className={ slide === idx ? "text" : "slide slide-hidden" }> {item.text}</p>
                </>
                )
            })}
            <BsArrowRightCircleFill onClick={NextSlide} className="arrow arrow-right"/>
            <span className="indicators">
            {data.map((item,idx)=>{
                return <button key={idx} onClick={() => SetSlide(idx)} className={ slide === idx ? "indicator" : "indicator indicator-inactive"}>
            </button>
        })}
        </span>
        </div>
        )
    }

export default Carousel
import { useState } from "react";

import './FooterIcon.css';
export default function FooterIcon(props){
    
    const hoverColor = props.hoverColor
    const [hover,setHover] = useState(false)

    const IsHoverOn =() =>
    {
        setHover(true)
    }
    const isHoverOff = () =>
    {
        setHover(false)
    }
    const hoverStyle = 
    {
        color : hover ? hoverColor : "#CCFFFF"
    }
    return(
        <span onMouseEnter={IsHoverOn}
        onMouseLeave={isHoverOff}
        style={hoverStyle}
        className ="fa-stack fa-1x item">
            <i class="fa fa-circle fa-stack-2x circle" aria-hidden="false"></i>
            <i className={`fa fa-${props.brand} fa-stack-1x icon`} ></i>
        </span>
    )

}
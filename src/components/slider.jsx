import "../style.css"
import { sliderItems } from "../data"
import React, { useState } from "react"
import styled from "styled-components"

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }  
    };
    const Wrapper = styled.div`
       height: 100%;
       display: flex;
       transition: all 1.5s ease;
       transform: translateX(${(props) => props.slideIndex * -100}vw);
    `;
    return (
        <div className="slider-container">
            <div className="arrow dirLeft" direction="left" onClick={()=>handleClick("left")}>
                <i className="fas fa-chevron-left"></i>
            </div>
            <Wrapper slideIndex={slideIndex} >
               {sliderItems.map((item)=>(
                    <div className="slide" key = {item.id} >
                      <div className="img-container">
                          <img className="img-slide" src={item.img} alt="" />
                      </div>
                      <div className="info-container">
                          <h1 className="title">{item.title}</h1>
                          <p className="desc">{item.desc}</p>
                          <button className="btn info-btn">Khám phá ngay</button>
                      </div>    
                    </div>
               ))}
               
            </Wrapper>

            <div className="arrow dirRight"  direction="right" onClick={()=>handleClick("right")}>
                <i className="fas fa-chevron-right"></i>
            </div>
        </div>
    )
}

export default Slider

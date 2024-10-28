import { useState } from 'react';
import React from "react";
import {ArrowLeftCircleFill, ArrowRightCircleFill} from 'react-bootstrap-icons';

const CarouselAR = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.slidesAR.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.slidesAR.length - 1 : slide - 1);
    };

    return(
        <div className="carousel">
            <ArrowLeftCircleFill className = "arrow arrow-left" onClick={prevSlide}/>
            {data.slidesAR.map((item,idx) => {
               return <img className = {slide === idx ? 'slides' : 'slides slides-hidden'} src = {require(`${item.src}`)} alt = {item.alt} key={idx}/>

            })}
            <ArrowRightCircleFill className = "arrow arrow-right" onClick={nextSlide}/>
            <span className ="indicators">
                {data.slidesAR.map((_,idx) => {
                    return <button className = {slide === idx ? 'indicator' : 'indicator indicator-inactive'} key = {idx} onClick={() => setSlide(idx)}></button>
                })}

            </span>
        </div>
    )
}

export default CarouselAR;
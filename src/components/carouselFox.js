import { useState } from 'react';
import React from "react";
import {ArrowLeftCircleFill, ArrowRightCircleFill} from 'react-bootstrap-icons';

const CarouselFox = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.foxVideos.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.foxVideos.length - 1 : slide - 1);
    };

    /*const beforeChange = (cur, next) => {
        if(data.foxVideos.cur[cur]){
            data.foxVideos.length.cur[cur].pause();
        }
    };*/

    return(
        <div className="carousel">
            <ArrowLeftCircleFill className = "arrow arrow-left" onClick={prevSlide}/>
            {data.foxVideos.map((item,idx) => {
               return <video className = {slide === idx ? 'slides' : 'slides slides-hidden'} src = {require(`${item.src}`)} alt = {item.alt} key={idx} controls/>

            })}
            <ArrowRightCircleFill className = "arrow arrow-right" onClick={nextSlide}/>
            <span className ="indicators">
                {data.foxVideos.map((_,idx) => {
                    return <button className = {slide === idx ? 'indicator' : 'indicator indicator-inactive'} key = {idx} onClick={() => setSlide(idx)}></button>
                })}

            </span>
        </div>
    )
}

export default CarouselFox;
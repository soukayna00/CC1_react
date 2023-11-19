import React, { useState, useContext } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'
import { ThemeContext } from '../Theme/Context/themeContext';


export default function Slider() {   
//declaration du state 
    const [index,setindex]=useState(1); 
    const { theme } = useContext(ThemeContext);

    const nextSlide = () => {
    if(index !== dataSlider.length ){
        setindex(index + 1)     
    }
    else if (index === dataSlider.length ){
        setindex(1)
    }
}
    const prevSlide = () => {
        if(index !== 1 ){            setindex(index-1)       }
        else if (index === 1 ){            setindex(5)        }
  }   

    return (

        <div  className={theme ? "container-slider" : "container-slider-dark"}>
            {dataSlider.map((obj) => {             
                return (
                    <div   key={obj.id}          className={"slide"}    >

       <h1>Pick a background image</h1>
                        <button className='download-button' onClick={() => window.open(process.env.PUBLIC_URL + `/Imgs/img${index}.jpg`, "_blank")
                        }
                        >
  Download
</button>

            
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index}.jpg`} alt="" />
                      
                    </div>
                    
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction="next"/>
            <BtnSlider moveSlide={prevSlide} direction="prev"/>

           


           
        </div>
    )
}


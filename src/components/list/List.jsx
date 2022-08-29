import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import { useState } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"


function List() {

const [isMoved,setIsMoved] = useState(false);
const [slideNumber,setSlideNumber] = useState(0);
const listRef = useRef();


const handleClick = (direction) => {
  setIsMoved(true);
  let distance = listRef.current.getBoundingClientRect().x-50;
if(direction === "left" && slideNumber>0){
  setSlideNumber(slideNumber-1)
 listRef.current.style.transform = `translateX(${210 + distance}px)` //you must the value is 230 because the width is 225px and margin right 5px but Iam use 210 because this value is the good for screens 230px +- 20px
};
if(direction === "right" && slideNumber<5){
  setSlideNumber(slideNumber+1)
  listRef.current.style.transform = `translateX(${-210 + distance}px)`
 };
console.log(distance);
console.log(slideNumber);
}



  return (
    <div className='list'>
     <span className="listTitle">Continue to watch</span>
     <div className="wrapper">
        <ArrowBackIosNewOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display:!isMoved && "none"}} />
        <div className="container" ref={listRef} >
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right"  onClick={() => handleClick("right")}/>
     </div>
    </div>
  )
}

export default List
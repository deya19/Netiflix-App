import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./watch.scss"

function Watch() {
  return (
    <div className='watch'>
      <div className="back">
        <Link className='link' to ="/"><ArrowBackOutlined/></Link>
        Home 
        </div>
        <video 
        className='video'
         autoPlay 
         progress
         controls 
         src="/assets/vedio.mp4"
         />
      </div>
  );
}

export default Watch
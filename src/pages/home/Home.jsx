import React, { useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"

function Home() {
  const [type,setType] = useState("")
  return (
    <div className='home'>
        <Navbar setType = {setType}/>
        <Featured type = {type}/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home
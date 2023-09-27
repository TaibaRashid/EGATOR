import React from 'react'
import '../Styles/Home.css'
import NavBar from '../Components/NavBar'
import Aside from '../Components/Aside'
import Middle from '../Components/Middle'
import Right from '../Components/Right'


const Home = () => {
  return (
    <>
    <div className='grid-container'>
    <NavBar className='nav2'/>
    <Aside className='aside2'/>
    <Middle className='main'/>
    <Right className='right'></Right>
    </div>
    </>
  )
}

export default Home
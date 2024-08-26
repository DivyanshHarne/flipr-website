import React from 'react'
import Reveal from '../utils/Reveal'

const Home = () => {
  return (
    <>
    
    <div id='hero'>
    <div id='home1'></div>
    
    <Reveal><div className='home-main-text'>
                <h3 className='first-subline'>POSTED ON <b>STARTUP</b></h3>
                
                <h1>
                  Step-by-step guide to choosing
                  <br className='sm:block hidden'/>{" "}
                  great font pairs {" "}
                  {" "}
                </h1>

                <h3 className='main-subline'>By <span>James West</span>  |  May 23, 2022</h3>
                <h3 className='third-subline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem reprehenderit<br/> nisi, enim molestias veritatis provident eum consectetur, vitae !</h3>
                <a href='https://discord.gg/JwVQFDVSv2'><button >Read More</button></a>

        </div></Reveal>
    </div>
    </>
  )
}

export default Home
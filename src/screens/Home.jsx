import React from 'react'
import Reveal from '../utils/Reveal'
import one from '../assets/images/white-concrete-building-1838640.svg'

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
    <div id='home-part-2'>
      <div id='home-part-2l'>
        <h2>Featured Post</h2>
        <div id='component-1'>
          <img src={one}/>
          <p>By John Doe  |  May 23,2022</p>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, distinctio laborum eveniet ratione mollitia impedit.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate inventore, deleniti nihil repudiandae officiis nam nisi perspiciatis non, iusto, omnis ea! Dolor quae unde delectus laborum mollitia a dignissimos earum.</p>
          <a href='https://discord.gg/JwVQFDVSv2'><button >Read More</button></a>
        </div>
      </div>
      <div id='home-part-2r'>
        <h3>All Posts</h3>
        <div id='all-posts'>
          <div className='each-post'>
            <p>By John Doe  |  Aug 23,2021</p>
            <h3>8 Figma Design systems that you can download for free today.</h3>
          </div>
          <div className='each-post'>
            <p>By John Doe  |  Aug 23,2021</p>
            <h3>8 Figma Design systems that you can download for free today.</h3>
          </div>
          <div className='each-post'>
            <p>By John Doe  |  Aug 23,2021</p>
            <h3>8 Figma Design systems that you can download for free today.</h3>
          </div>
          <div className='each-post'>
            <p>By John Doe  |  Aug 23,2021</p>
            <h3>8 Figma Design systems that you can download for free today.</h3>
          </div>
        </div>

      </div>
      <div></div>
    </div>
    </>
  )
}

export default Home
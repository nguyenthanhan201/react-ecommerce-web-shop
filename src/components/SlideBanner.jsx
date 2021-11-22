import React from 'react'

import banner from '../assets/images/banner.png'

const SlideBanner = () => {
  return (
    <>
    <div className="center">
  <div className="carousel-wrapper">
    
    <input id="slide1" type="radio" name="controls" defaultChecked={true}/>
    <input id="slide2" type="radio" name="controls" />
    <input id="slide3" type="radio" name="controls" />
    <input id="slide4" type="radio" name="controls" />
    <input id="slide5" type="radio" name="controls" />

    
    <label htmlFor="slide1" className="nav-dot"></label>
    <label htmlFor="slide2" className="nav-dot"></label>
    <label htmlFor="slide3" className="nav-dot"></label>
    <label htmlFor="slide4" className="nav-dot"></label>
    <label htmlFor="slide5" className="nav-dot"></label>

    
    <label htmlFor="slide1" className="left-arrow"> {'<'} </label>
    <label htmlFor="slide2" className="left-arrow"> {'<'} </label>
    <label htmlFor="slide3" className="left-arrow"> {'<'} </label>
    <label htmlFor="slide4" className="left-arrow"> {'<'} </label>
    <label htmlFor="slide5" className="left-arrow"> {'<'} </label>

    <label htmlFor="slide1" className="right-arrow"> {'>'} </label>
    <label htmlFor="slide2" className="right-arrow"> {'>'} </label>
    <label htmlFor="slide3" className="right-arrow"> {'>'} </label>
    <label htmlFor="slide4" className="right-arrow"> {'>'} </label>
    <label htmlFor="slide5" className="right-arrow"> {'>'} </label>

    <div className="carousel">
      <ul>
        <li>
          <img src={banner} alt=""/>
        </li>
        <li>
          <img src="https://p.pstatp.com/origin/fe9600023ff5d4e7ec51" alt="" />
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/osef-art/ministick/main/data/img/main/ministick-clip-3.gif" alt=""/>
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/smoke.jpg" alt=""/>
        </li>
        <li>
          <img src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-157575/d224d518da6c26515a470a9b7e490df8/157575-honey-bun-baby.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt=""/>
        </li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default SlideBanner

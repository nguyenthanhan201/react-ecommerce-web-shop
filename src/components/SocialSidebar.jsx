import React from 'react'
//? File nay code cho chuc nang social sidebar
const SocialSidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/#">
              <i className='bx bxl-facebook-circle'><span>Facebook</span></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className='bx bxl-github' ><span>Github</span></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className='bx bxl-youtube' ><span>Youtube</span></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className='bx bxl-instagram' ><span>Instagram</span></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className='bx bxl-linkedin' ><span>Linkedin</span></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SocialSidebar

import React from 'react'
import "./Campus.css"
import gallery_1 from "../../assets/gallery-1.png"
import gallery_2 from "../../assets/gallery-2.png"
import gallery_3 from "../../assets/gallery-3.png"
import gallery_4 from "../../assets/gallery-4.png"
import gallery_5 from "../../assets/gallery-5.png"
import gallery_6 from "../../assets/gallery-6.png"
import icon from "../../assets/white-arrow.png"

function Campus() {
  return (
    <div className='gallery container'id='campus'>
        <div className="images">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_5} alt="" />
            <img src={gallery_6} alt="" />
        </div>
        <div className="more">
            <p>See more here</p>
            <img src={icon} alt="" />
        </div>
    </div>
  )
}

export default Campus

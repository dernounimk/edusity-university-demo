import React, { useRef } from 'react'
import './Testimonials.css'
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import backIcon from "../../assets/back-icon.png"
import nextIcon from "../../assets/next-icon.png"

function Testimonials() {

    const slider = useRef();
    let tmp = 0;

    function nextSlide() {
        if (tmp > -50) {
            tmp -= 25;
            slider.current.style.transform = `translateX(${tmp}%)`
        }
        else {
            tmp = 0;
            slider.current.style.transform = `translateX(${tmp}%)`
        }
    }

    function backSlide() {
        if (tmp < 0) {
            tmp += 25;
            slider.current.style.transform = `translateX(${tmp}%)`
        }
        else {
            tmp = -50;
            slider.current.style.transform = `translateX(${tmp}%)`
        }
    }

  return (
    <div className='testimonials container' id='testimonials'>
        <img className='back-icon' onClick={backSlide} src={backIcon} alt="" />
        <img className='next-icon' onClick={nextSlide} src={nextIcon} alt="" />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Liza Rodri</h3>
                                <span>Edusity, Algeria</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum saepe sed laudantium fugit minima,
                            eligendi recusandae iure
                            . Odio nisi at aliquam reiciendis unde eveniet dicta dolorem. Corrupti, eius corporis.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Lucas Alba</h3>
                                <span>Edusity, Algeria</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum saepe sed laudantium fugit minima,
                            eligendi recusandae iure
                            . Odio nisi at aliquam reiciendis unde eveniet dicta dolorem. Corrupti, eius corporis.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sia Fernandez</h3>
                                <span>Edusity, Algeria</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum saepe sed laudantium fugit minima,
                            eligendi recusandae iure
                            . Odio nisi at aliquam reiciendis unde eveniet dicta dolorem. Corrupti, eius corporis.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Toni Rose</h3>
                                <span>Edusity, Algeria</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum saepe sed laudantium fugit minima,
                            eligendi recusandae iure
                            . Odio nisi at aliquam reiciendis unde eveniet dicta dolorem. Corrupti, eius corporis.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials

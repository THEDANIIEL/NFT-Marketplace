import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import Image from 'next/image';

import Style from './Subscribe.module.css';
import images from '../../img';

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
        <div className={Style.subscribe_box}>
            <div className={Style.subscribe_box_left}>
                <h2>Never miss a drop</h2>
                <p>subscribe to oue newsstellar for getting notice for every drop</p>
                <div className={Style.subscribe_box_left_box}>
                    <span>01</span>
                    <small>get more discount</small>
                </div>
                <div className={Style.subscribe_box_left_box}>
                    <span>02</span>
                    <small>premium discount</small>
                </div>
                <div className={Style.subscribe_box_left_input}>
                    <input type="email" placeholder='enter your email'/>
                    <RiSendPlaneFill className={Style.subscribe_box_left_input_icon}/>
                </div>
            </div>
            <div className={Style.subscribe_box_right}>
                <Image 
                src={images.update} 
                alt="get update" 
                height={600} 
                width={800}
                />
            </div>
        </div>
    </div>
  )
}

export default Subscribe
import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';


import Style from './DayComponent.module.css';
import images from '../../../img';

const DayComponent = ({el, i}) => {
  return (
    <div className={Style.dayscomponent}>
        <div className={Style.dayscomponent_box}>
            <div className={Style.dayscomponent_box_img}>
                <Image 
                src={el.background} 
                className={Style.dayscomponent_box_img_img} 
                alt="profile image" 
                width={500} 
                height={300} 
                objectFit='covers'
                />
            </div>
            <div className={Style.dayscomponent_box_profile}>
                <Image 
                src={images.creatorbackground2} 
                alt="profile" 
                width={200} 
                height={200} 
                className={Style.dayscomponent_box_img_1}
                objectFit='covers'
                />
                <Image 
                src={images.creatorbackground2} 
                alt="profile" 
                width={200} 
                height={200} 
                className={Style.dayscomponent_box_img_2}
                objectFit='covers'
                />
                <Image 
                src={images.creatorbackground2} 
                alt="profile" 
                width={200} 
                height={200} 
                className={Style.dayscomponent_box_img_3}
                objectFit='covers'
                />
            </div>
            <div className={Style.dayscomponent_box_title}>
                <h2>Amazing Collection</h2>
                <div className={Style.dayscomponent_box_title_info}>
                    <div className={Style.dayscomponent_box_title_info_profile}>
                        <Image 
                        src={el.user} 
                        alt="profile" 
                        width={30} 
                        height={30}
                        className={Style.dayscomponent_box_title_info_profile_img}
                        objectFit='covers'
                        />
                        <p>Creator
                            <span>Daniel Robusto
                                <small>
                                    <MdVerified/>
                                </small>
                            </span>
                        </p>
                    </div>
                    <div className={Style.dayscomponent_box_title_info_profile}>
                        <small>1.5 ETH</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DayComponent
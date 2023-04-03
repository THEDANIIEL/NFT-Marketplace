import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Style from './SlideCard.module.css';
import images from '../../../img';
import { LikeProfile } from '@/components/componentindex';

const SliderCard = ({el, i}) => {
  return (
    <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
            <motion.div className={Style.sliderCard_box_img}>
                <Image 
                src={el.background} 
                className={Style.sliderCard_box_img_img}
                alt="slider profile" 
                width={500} 
                height={300} 
                objectFit='cover'
                />
            </motion.div>
            <div className={Style.sliderCard_box_title}>
                <p>NFT video</p>
                <div className={Style.sliderCard_box_title_like}>
                    <LikeProfile/>
                    <small>1 of 100</small>
                </div>
            </div>
            <div className={Style.sliderCard_box_price}>
                <div className={Style.sliderCard_box_price_box}>
                    <small>Current Bid</small>
                    <p>1 ETH</p>
                </div>
                <div className={Style.sliderCard_box_price_time}>
                    <small>Reaming time</small>
                    <p>3h : 20m : 15s</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default SliderCard
import React from 'react';
import Image from 'next/image';

import Style from './Video.module.css';
import images from '../../img';

const Video = () => {
  return (
    <div className={Style.video}>
        <div className={Style.video_box}>
            <h1>
                <span>🎥</span>THe Videos
            </h1>
            <p>
            Check out our NFTs Videos
            </p>
            <div className={Style.video_box_frame}>
                <div className={Style.video_box_frame_left}>
                    <Image 
                    src={images.NFTVideo} 
                    alt="video image" 
                    width={1920} 
                    height={1080} 
                    objectFit='cover'
                    />
                </div>
                <div className={Style.video_box_frame_right}>Hey</div>
            </div>
        </div>
    </div>
  )
}

export default Video
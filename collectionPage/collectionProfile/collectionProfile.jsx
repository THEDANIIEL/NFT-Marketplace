import React from 'react';
import Image from 'next/image';
import {
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram, 
  } from 'react-icons/ti';

import Style from './collectionProfile.module.css';
import images from '../../img';


const collectionProfile = () => {
    const cardArray = [1, 2, 3, 4];


  return (
    <div className={Style.collectionProfile}>
        <div className={Style.collectionProfile_box}>
            <div className={Style.collectionProfile_box_left}>
                <Image 
                src={images.nft_image_1}
                alt="NFt image"
                width={800}
                height={800}
                className={Style.collectionProfile_box_left_img}
                />
                <div className={Style.collectionProfile_box_left_social}>
                    <a href="">
                        <TiSocialFacebook/>
                    </a>
                    <a href="">
                        <TiSocialInstagram/>
                    </a>
                    <a href="">
                        <TiSocialLinkedin/>
                    </a>
                    <a href="">
                        <TiSocialTwitter/>
                    </a>
                    <a href="">
                        <TiSocialYoutube/>
                    </a>
                </div>
            </div>
            <div className={Style.collectionProfile_box_middle}>
                <h1>Awsome NFT collection</h1>
                <p>Daniel Collection</p>
                <div className={Style.collectionProfile_box_middle_box}>
                    {
                        cardArray.map((el, i)=> (
                            <div className={Style.collectionProfile_box_middle_box_item} key={i + 1}>
                                <small>Floor Price</small>
                                <p>$ {i + 1} 1,000</p>
                                <span>+ {i + 2}.11%</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default collectionProfile
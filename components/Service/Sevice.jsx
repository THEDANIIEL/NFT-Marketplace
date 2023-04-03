import React from 'react';
import Image from 'next/image';

import Style from './Service.module.css';
import images from '../../img'
import { ST } from 'next/dist/shared/lib/utils';


const Sevice = () => {
  return (
    <div className={Style.service}>
        <div className={Style.service_box}>
            <div className={Style.service_box_item}>
                <Image 
                src={images.service1} 
                alt='filter and discover' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    Step one
                </p>
                <h3>Filter and discover</h3>
                <p>connect with wallet, discover, sell and buy NFT's and earn money</p>
            </div>
            <div className={Style.service_box_item}>
                <Image 
                src={images.service2} 
                alt='Connect wallet' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    Step one
                </p>
                <h3>Connect wallet</h3>
                <p>connect with wallet, discover, sell and buy NFT's and earn money</p>
            </div>
            <div className={Style.service_box_item}>
                <Image 
                src={images.service3} 
                alt='Start trading' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    Step one
                </p>
                <h3>Start trading</h3>
                <p>connect with wallet, discover, sell and buy NFT's and earn money</p>
            </div>
            <div className={Style.service_box_item}>
                <Image 
                src={images.service4} 
                alt='filter and discover' 
                width={100} 
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    Step one
                </p>
                <h3>Filter and discover</h3>
                <p>connect with wallet, discover, sell and buy NFT's and earn money</p>
            </div>
        </div>
    </div>
  )
}

export default Sevice
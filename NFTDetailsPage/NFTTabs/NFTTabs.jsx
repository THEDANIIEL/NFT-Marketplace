import React from 'react';
import Image from 'next/image';

import Style from './NFTTabs.module.css';

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
        {dataTab.map((el, i)=> (
            <div className={Style.NFTTabs_box} key={i + 1}>
                <Image 
                src={el} 
                alt ="profile Image" 
                width={40} 
                height={40} 
                className={Style.NFTTabs_box_img}
                />
                <div className={Style.NFTTabs_box_info}>
                    <span>
                        Offer by $770 by <span>Daniel</span>
                        {icon}
                    </span>
                    
                    <small>Jun 14 - 4:15</small>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NFTTabs
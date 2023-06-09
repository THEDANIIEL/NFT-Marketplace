import React, {useState} from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

import Style from './FollowerTabCard.module.css';
import images from '../../../img';

function FollowerTabCard({i, el}) {
    const [following, setfollowing] = useState(false);

    const followMe = ()=> {
        if(!following){
            setfollowing(true);
        }else{
            setfollowing(false);
        }
    };


  return (
    <div className={Style.FollowerTabCard}>
        <div className={Style.FollowerTabCard_rank}>
            <p>
                #{i + 1} <span>🏅</span>
            </p>
        </div>
        <div className={Style.FollowerTabCard_box}>
            <div className={Style.FollowerTabCard_box_img}>
                <Image 
                src={el.background} 
                alt="profile back" 
                width={500} 
                height={300} 
                className={Style.FollowerTabCard_box_img_img}
                objectFit='cover'
                />
            </div>
            <div className={Style.FollowerTabCard_box_profile}>
                <Image className={Style.FollowerTabCard_box_profile_img} 
                alt="profile imahge" 
                width={50} 
                height={50} 
                src={el.user}
                 />
            </div>
            <div className={Style.FollowerTabCard_box_info}>
                <div className={Style.FollowerTabCard_box_info_name}>
                    <h4>
                        Daniel {""}{"."} 
                        <span>
                            <MdVerified/>
                        </span>
                    </h4>
                    <p>1.2 ETH</p>
                </div>
                <div className={Style.FollowerTabCard_box_info_following}>
                    {
                        following ? (
                            <a  onClick={()=> followMe()}>
                                Follow {""} {" "}
                                <span>
                                    <TiTick />
                                </span>
                            </a>
                        ):(
                            <a onClick={()=> followMe()}>
                                Following
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FollowerTabCard
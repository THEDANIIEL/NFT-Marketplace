import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';

import Style from './AudioCard.module.css';
import images from '../../../img';
import { LikeProfile } from '@/components/componentindex';

const AudioCard = () => {
    const [like, setlike] = useState(false);
    const [play, setplay] = useState(false);

    const likeNFT = ()=>{
        if(!like){
            setlike(true);
        }else{
            setlike(false);
        }
    };
    const playMusic = ()=>{
        if(!play){
            setplay(true);
        }else{
            setplay(false);
        }
    };

  return (
    <div className={Style.audioCard}>
        <div className={Style.audioCard_box}>
            <div className={Style.audioCard_box_like_time}>
                <div className={Style.audioCard_box_like} onClick={()=> likeNFT()}>
                    {
                        like ?(
                            <AiFillHeart className={Style.audioCard_box_like_icon}/>
                        ) : (
                            <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike} />
                        )
                    }

                    <span>24</span>
                </div>
                <div className={Style.audioCard_box_time}>
                    <div className={Style.audioCard_box_time_remaing}>
                        <small>reaming time</small>
                        <h5>3h : 15m : 20s</h5>
                    </div>
                </div>
            </div>
        <div className={Style.audioCard_box_player}>
            <Image src={images.musiceWave} alt="music" width={200} />
            <div className={Style.audioCard_box_musicplayer} onClick={()=> playMusic()}>
                {
                    play ?(
                        <div className={Style.audioCard_box_musicplayer_icon}>
                            <TbPlayerPause/>
                        </div>
                    ) : (
                        <div className={Style.audioCard_box_musicplayer_icon}>
                            <TbPlayerPlay/>
                        </div>
                    )
                }
            </div>
        </div>
        
        <div className={Style.audioCard_box_details}>
            <div className={Style.audioCard_box_details_info}>
                <h4>NFT music</h4>
                <div className={Style.audioCard_box_details_info_price}>
                    <small>1,000$</small>
                </div>
            </div>
            <div className={Style.audioCard_box_details_info_stock}>
                <LikeProfile/>
                <small>24 in stock</small>
            </div>
        </div>
        <div className={Style.audioCard_box_details_img}>
            <Image 
            src={images.creatorbackground10} 
            alt="background" 
            width={500} 
            height={500}
            />
        </div>
        </div>
    </div>
  )
}

export default AudioCard
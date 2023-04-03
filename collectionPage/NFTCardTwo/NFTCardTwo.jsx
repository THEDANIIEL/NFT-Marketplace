import React, {useState} from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';

import Style from './NFTCardTwo.module.css';
import images from '../../img';
import { LikeProfile } from '@/components/componentindex';

const NFTCardTwo = ({ NFTData }) => {
    const [like, setlike] = useState(false);
    const [likeInc, setlikeInc] = useState(21);

    const likeNFT = ()=> {
        if(!like){
            setlike(true);
            setlikeInc(23);
        }else{
            setlike(false);
            setlikeInc(23 + 1);
        }
    }

  return (
    <div className={Style.NFTCardTwo}>
        {
            NFTData.map((el, i)=> (
                <div className={Style.NFTCardTwo_box} key={i + 1}>
                    <div className={Style.NFTCardTwo_box_like}>
                        <div className={Style.NFTCardTwo_box_like_box}>
                            <div className={Style.NFTCardTwo_box_like_box_box}>
                                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon}/>
                                <p onClick={()=> likeNFT()}>
                                    {
                                        like ? <AiOutlineHeart/> : <AiFillHeart/>
                                    }{""}
                                    <span>{likeInc + 1}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCardTwo_box_img}>
                        <Image
                        src={el}
                        width={500}
                        height={500}
                        objectFit='cover'
                        />
                    </div>
                    <div className={Style.NFTCardTwo_box_info}>
                        <div className={Style.NFTCardTwo_box_info_left}>
                            <LikeProfile/>
                            <p>Clone #{i + 1}</p>
                        </div>
                        <small>4{i + 2}</small>
                    </div>
                    <div className={Style.NFTCardTwo_box_price}>
                        <div className={Style.NFTCardTwo_box_price_box}>
                            <small>Current Bid:</small>
                            <p>1{i + 5}.000 ETH</p>
                        </div>
                        <p className={Style.NFTCardTwo_box_price_stock}>
                            <MdTimer/>
                            <span>{i + 1}Hours left</span>
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default NFTCardTwo
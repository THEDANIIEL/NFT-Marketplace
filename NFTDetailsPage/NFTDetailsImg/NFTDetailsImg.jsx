import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import Style from './NFTDetailsImg.module.css';
import images from '../../img'


const NFTDetailsImg = () => {
    const [description, setdescription] = useState(true);
    const [details, setdetails] = useState(true);
    const [like, setlike] = useState(false);

    const openDescription = ()=> {
        if(!description){
            setdescription(true);
        }else{
            setdescription(false);
        }
    };

    const openDetails = ()=> {
        if(!details){
            setdetails(true);
        }else{
            setdetails(false);
        }
    };

    const likeNFT = ()=> {
        if(!like){
            setlike(true);
        }else{
            setlike(false);
        }
    };


  return (
    <div className={Style.NFTDetailsImg}>
        <div className={Style.NFTDetailsImg_box}>
            <div className={Style.NFTDetailsImg_box_NFT}>
                <div className={Style.NFTDetailsImg_box_NFT_like}>
                    <BsImage className={Style.NFTDetailsImg_box_NFT_like_icon}/>
                    <p onClick={()=> likeNFT()}>
                        {like ? (<AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/>)
                        :
                        (<AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/>)}
                        <span>23</span>
                    </p>
                </div>
                <div className={Style.NFTDetailsImg_box_NFT_img}>
                    <Image 
                    src={images.nft_image_1} 
                    className={Style.NFTDetailsImg_box_NFT_img_img} 
                    width={700} 
                    height={800} 
                    objectFit='cover'
                    />
                </div>
            </div>
            <div className={NFTDetailsImg_box_description} onClick={()=> openDescription}>
                <p>Description</p>
                {description ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
            </div>
            {
                description &&(
                    <div className={Style.NFTDetailsImg_box_description_box}>
                        <p>bvaouvheorivevipueqbovrebvoqevge</p>
                    </div>
                )
            }
            <div className={Style.NFTDetailsImg_box_details} onClick={()=> openDetails()}>
                <p>Details</p>
                {details ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
            </div>

            {details && (
                <div className={Style.NFTDetailsImg_box_details_box}>
                <small>2000 x 28000 px.Image(500kb)</small>
                <p>
                    <small>Contract Address</small>
                    <br></br>
                    OJHFYW5239846KDUW623993000
                </p>
                <p>
                    <small>Token ID</small>
                    4100000237
                </p>
            </div>
            )}
        </div>
    </div>
  )
}

export default NFTDetailsImg
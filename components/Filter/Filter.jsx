import React, {useState} from 'react';
import { FaFilter, FaAngleDown, FaAngleUp, FaMusic, FaWallet, FaVideo, FaImages, FaUserAlt } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

import { MdVerified } from 'react-icons/md';

import Style from './Filter.module.css';

const Filter = () => {
    const [filter, setfilter] = useState(true);
    const [image, setimage] = useState(true);
    const [video, setvideo] = useState(true);
    const [music, setmusic] = useState(true);

    const openFilter = ()=> {
        if(!filter){
            setfilter(true);
        }else{
            setfilter(false);
        }
    };

    const openImage = ()=> {
        if(!image){
            setimage(true);
        }else{
            setimage(false);
        }
    };

    const openVideo = () => {
        if(!video){
            setvideo(true);
        }else{
            setvideo(false);
        }
    }

    const openMusic = () => {
        if(!music){
            setmusic(true);
        }else{
            setmusic(false);
        }
    };

  return (
    <div className={Style.filter}>
        <div className={Style.filter_box}>
            <div className={Style.filter_box_left}>
                <button onClick={()=> {}}>NFTs</button>
                <button onClick={()=> {}}>ARTs</button>
                <button onClick={()=> {}}>Musics</button>
                <button onClick={()=> {}}>Sports</button>
                <button onClick={()=> {}}>Photography</button>
            </div>
            <div className={Style.filter_box_right}>
                <div className={Style.filter_box_right_box} onClick={(e) => openFilter()}>
                    <FaFilter />
                    <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
                </div>
            </div>
        </div>
        {
            filter && (
                <div className={Style.filter_box_items}>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item}>
                            <FaWallet /> <span>1 ETH</span>
                            <AiFillCloseCircle />
                        </div>
                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={()=> openImage()}>
                            <FaImages /> <small>images</small>
                            {image ? <AiFillCloseCircle /> : <TiTick />}
                        </div>
                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={()=> openVideo()}>
                            <FaVideo /> <small>Video</small>
                            {video ? <AiFillCloseCircle /> : <TiTick />}
                        </div>
                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={() => openMusic()}>
                            <FaMusic /> <small>Music</small>
                            {music ? <AiFillCloseCircle /> : <TiTick />}
                        </div>
                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item}>
                            <FaUserAlt /> <small>Verified</small>
                            <MdVerified />
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Filter
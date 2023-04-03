import React from 'react';

import Style from '../styles/uploadNFT.module.css';
import { DropZone } from '@/UploadNFT/uploadNFTIndex';
import UploadNFT from '@/UploadNFT/UploadNFT';



const uploadNFT = () => {
  return (
    <div className={Style.uploadNFT}>
        <div className={Style.uploadNFT_box}>
            <div className={Style.uploadNFT_box_heading}>
                <h1>Create ne NFT</h1>
                <p>you can make what ever you want to a NFT with blockchain technology</p>
            </div>
            <div className={Style.uploadNFT_box_title}>
                <h2>Image, Vide, Music</h2>
                <p>upload your files down below</p>
            </div>
            <div className={Style.uploadNFT_box_form}>
                <UploadNFT/>
            </div>
        </div>
    </div>
  )
}

export default uploadNFT
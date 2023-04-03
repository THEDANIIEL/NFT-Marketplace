import React, {useState} from 'react';
import Image from 'next/image';
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';

import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '@/components/componentindex';

const AuthorProfileCard = () => {
    const [share, setshare] = useState(false);
    const [report, setreport] = useState(false);

    const copyAddress = ()=> {
        const copyText = document.getElementById("myInput");

        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };

    const openShare = ()=> {
        if(!share){
            setshare(true);
            setreport(false);
        }else{
            setshare(false);
        }
    };

    const openReport = ()=> {
        if(!report){
            setshare(false);
            setreport(true);
        }else{
            setreport(false);
        }
    };


  return (
    <div className={Style.AuthorProfileCard}>
        <div className={Style.AuthorProfileCard_box}>
            <div className={Style.AuthorProfileCard_box_img}>
                <Image 
                src={images.nft_image_1}
                className={Style.AuthorProfileCard_box_img_img}
                alt="NFT iamge"
                width={220}
                height={220}
                />
            </div>
            <div className={Style.AuthorProfileCard_box_info}>
                <h2>Daniel{""}
                    <span>
                        <MdVerified/>
                    </span>
                    {""}
                </h2>
                <div className={Style.AuthorProfileCard_box_info_address}>
                    <input type="text" value="X23435V53576B3EEE34ee3425b" id='myInput'/>
                    <FiCopy onClick={()=> copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon}/>
                </div>
                <p>
                    this collection is from Daniel NFT monitorized by this platform
                </p>
                <div className={Style.AuthorProfileCard_box_info_social}>
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
                        <TiSocialYoutube/>
                    </a>
                    <a href="">
                        <TiSocialTwitter/>
                    </a>
                </div>
            </div>
            <div className={Style.AuthorProfileCard_box_share}>
                <Button btnname="follow" handleClick={()=> {}}/>
                <MdCloudUpload onClick={()=> openShare()} className={Style.AuthorProfileCard_box_share_icon}/>
                {
                    share && (
                        <div className={Style.AuthorProfileCard_box_share_upload}>
                            <p>
                                <span>
                                    <TiSocialFacebook/>
                                </span>{""}
                                Facebook
                            </p>
                            <p>
                                <span>
                                    <TiSocialInstagram/>
                                </span>{""}
                                Instagram
                            </p>
                            <p>
                                <span>
                                    <TiSocialLinkedin/>
                                </span>{""}
                                Linkedin
                            </p>
                            <p>
                                <span>
                                    <TiSocialYoutube/>
                                </span>{""}
                                Youtube
                            </p>
                            <p>
                                <span>
                                    <TiSocialTwitter/>
                                </span>{""}
                                Twitter
                            </p>
                        </div>
                    )
                }
                <BsThreeDots onClick={()=> openReport} className={Style.AuthorProfileCard_box_share_icon}/>
                {
                    report &&(
                        <p className={Style.AuthorProfileCard_box_share_report}>
                            <span>
                                <MdOutlineReportProblem/>
                            </span>{""}
                            Report abouse
                        </p>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default AuthorProfileCard
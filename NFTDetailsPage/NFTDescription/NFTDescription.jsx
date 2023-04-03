import React, {useState} from 'react';
import Image from 'next/image';
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet, FaPercentage } from 'react-icons/fa';
import {
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram, 
  } from 'react-icons/ti';

  import { BiTransferAlt, BiDollar } from 'react-icons/bi';

  import Style from './NFTDescription.module.css';
  import images from '../../img';
  import { Button } from '@/components/componentindex';
  import { NFTTabs } from '../NFTDetailsIndex';

const NFTDescription = () => {
    const [social, setsocial] = useState(false);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [history, sethistory] = useState(true);
    const [provanance, setprovanance] = useState(false);
    const [owner, setowner] = useState(false);

    const historyArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
    ];
    const provananceArray = [
        images.user5,
        images.user4,
        images.user2,
        images.user3,
        images.user1,
    ];
    const ownerArray = [
        images.user2,
        images.user7,
        images.user3,
        images.user6,
        images.user4,
    ];

    const openSocial = ()=> {
        if(!social){
            setsocial(true);
            setNFTMenu(false);
        }else{
            setsocial(false);
        }
    };

    const openNFTMenu = ()=> {
        if(!NFTMenu){
            setNFTMenu(true);
            setsocial(false);
        }else{
            setNFTMenu(false);
        }
    };
    const openTabs = (e)=> {
        const btnText = e.target.innertext;
        if(btnText == "Bid History"){
            sethistory(true);
            setprovanance(false);
            setowner(false);
        }else if(btnText == "Provanance"){
            sethistory(false);
            setprovanance(true);
            setowner(false);
        }
    };

    const openOwner = ()=> {
        if(!owner){
            setowner(true);
            sethistory(false);
            setprovanance(false);
        }else{
            setowner(false);
            sethistory(true);
        }
    };

  return (
    <div className={Style.NFTDescription}>
        <div className={Style.NFTDescription_box}>
            <div className={Style.NFTDescription_box_share}>
                <p>Virtual Worlds</p>
                <div className={Style.NFTDescription_box_share_box}>
                    <MdCloudUpload className={Style.NFTDescription_box_share_box_icon} onClick={()=> openSocial()}/>
                    {social &&(
                        <div className={Style.NFTDescription_box_share_box_social}>
                            <a href="#">
                                <TiSocialFacebook/>Facebook
                            </a>
                            <a href="#">
                                <TiSocialInstagram/>Instagram
                            </a>
                            <a href="#">
                                <TiSocialTwitter/>Twitter
                            </a>
                            <a href="#">
                                <TiSocialLinkedin/>LinkedIn
                            </a>
                            <a href="#">
                                <TiSocialYoutube/>Youtube
                            </a>
                        </div>
                    )}
                    <BsThreeDots className={Style.NFTDescription_box_share_box_icon} onClick={()=> openNFTMenu()}/>
                    {NFTMenu &&(
                        <div className={Style.NFTDescription_box_share_box_social}>
                            <a href="#">
                                <BiDollar/>Change Price
                            </a>
                            <a href="#">
                                <BiTransferAlt/>Transfer
                            </a>
                            <a href="#">
                                <MdReportProblem/>Report abouse
                            </a>
                            <a href="#">
                                <MdOutlineDeleteSweep/>Delete item
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className={Style.NFTDescription_box_profile}>
                <h1>BearX #234600</h1>
                <div className={Style.NFTDescription_box_profile_box}>
                    <div className={Style.NFTDescription_box_profile_box_left}>
                        <Image 
                        src={images.user1} 
                        alt="profile" 
                        width={40} 
                        height={40}
                        className={Style.NFTDescription_box_profile_box_left_img}
                        />
                        <div className={Style.NFTDescription_box_profile_box_left_info}>
                            <small>Creator</small><br/>
                            <span>Daniel<MdVerified/></span>
                        </div>
                    </div>
                    <div className={Style.NFTDescription_box_profile_box_right}>
                        <Image
                        src={images.user2} 
                        alt="profile" 
                        width={40} 
                        height={40}
                        className={Style.NFTDescription_box_profile_box_left_img}
                        />
                        <div className={Style.NFTDescription_box_profile_box_right_info}>
                            <small>Creator</small><br/>
                            <span>Daniel DD<MdVerified/></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.NFTDescription_box_profile_biding}>
                <p>
                    <MdTimer/><span>Auction ending</span>
                </p>
                <div className={Style.NFTDescription_box_profile_biding_box_timer}>
                    <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                        <p>2</p>
                            <span>Days</span>
                        
                    </div>
                    <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                        <p>5</p>
                            <span>Hour</span>
                        
                    </div>
                    <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                        <p>25</p>
                            <span>Minutes</span>
                        
                    </div>
                    <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                        <p>15</p>
                            <span>secs</span>
                        
                    </div>
                </div>
                <div className={Style.NFTDescription_box_profile_biding_box_price}>
                    <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                        <small>Current Bid</small>
                        <p>1 ETH <span>( = $3,222.50)</span></p>
                    </div>
                    <span>[96 in Stock]</span>
                </div>
                <div className={Style.NFTDescription_box_profile_biding_box_button}>
                    <Button icon=<FaWallet/> btnName="place a Bid" handleClick={()=> {}} classSrtle={Style.button}/>
                    <Button icon=<FaPercentage/> btnName="Make offer" handleClick={()=> {}} classSrtle={Style.button}/>
                </div>
                <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
                    <button onClick={(e)=> openTabs(e)}>Bid History</button>
                    <button onClick={(e)=> openTabs(e)}>Provanance</button>
                    <button onClick={(e)=> openOwner()}>Owner</button>
                </div>
                {history  &&(
                    <div className={Style.NFTDescription_box_profile_biding_box_card}>
                        <NFTTabs dataTab={historyArray}/>
                    </div>
                )}
                {provanance  &&(
                    <div className={Style.NFTDescription_box_profile_biding_box_card}>
                        <NFTTabs dataTab={provananceArray}/>
                    </div>
                )}
                {owner  &&(
                    <div className={Style.NFTDescription_box_profile_biding_box_card}>
                        <NFTTabs dataTab={ownerArray} icon=<MdVerified/> />
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default NFTDescription
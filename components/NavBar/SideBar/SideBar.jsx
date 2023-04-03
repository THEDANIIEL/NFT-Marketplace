import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {GrClose} from 'react-icons/gr';
import {
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram, 
  TiArrowSortedUp,
  TiArrowSortedDown,
} from 'react-icons/ti';

import Style from './SideBar.module.css';
import images from '../../../img';
import { Button } from '../../Button/Button';


const SideBar = ({ setopenSideMenu }) => {
  const [openDiscover, setopenDiscover] = useState(false);
  const [openHelp, setopenHelp] = useState(false);

  const discover = [{
    name: "Collection",
    link: "collection"
  },
  {
    name: "Search",
    link: "search"
  },
  {
    name: "Author Profile",
    link: "author-profile"
  },
  {
    name: "NFT Details",
    link: "NFT-details"
  },
  {
    name: "Account Setting",
    link: "account-setting"
  },
  {
    name: "Connect Wallet",
    link: "connect-wallet"
  },
  {
    name: "Blog",
    link: "blog"
  }

  ];

  const helpCenter = [
    {
      name: "About",
      link: "about"
    },{
      name: "Contact Us",
      link: "contact-us"
    },{
      name: "Sign Up",
      link: "sign-up"
    },{
      name: "Sign In",
      link: "sign-in"
    },{
      name: "Subscription",
      link: "subscribtion"
    }
  ];

  const openDiscoverMenu = ()=> {
    if(!openDiscover){
      setopenDiscover(true);
    }else{
      setopenDiscover(false);
    }
  };

  const openHelpMenu = ()=> {
    if(!openHelp){
      setopenHelp(true);
    }else{
      setopenHelp(false);
    }
  };

  const closeSidebar = ()=> {
    setopenSideMenu(false);
  }

  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} 
      onClick={()=>closeSidebar()}
      />
      <div className={Style.sideBar_box}>
        <Image 
        src={images.logo} 
        alt="logo" 
        width={150} 
        height={150}
        />
        <p>Discover the most outstanding articles on all the topics on NFT & your stories and share them</p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} 
          onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>

          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el, i)=>(
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        <div>
          <div 
          className={Style.sideBar_menu_box} 
          onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el, i)=> 
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
                )}
              </div>
            )
          }
        </div>
      </div>

      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={() => {}}/>
        <Button btnName="Connect Wallet" handleClick={() => {}}/>
      </div>
    </div>
  )
}

export default SideBar
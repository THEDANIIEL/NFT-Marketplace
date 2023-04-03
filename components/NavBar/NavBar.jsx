import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";


import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from './Index';
import images from "../../img";
import { Button } from '../componentindex';



const NavBar = () => {
  const [discover, setdiscover] = useState(false);
  const [help, sethelp] = useState(false);
  const [notification, setnotification] = useState(false);
  const [profile, setprofile] = useState(false);
  const [openSideMenu, setopenSideMenu] = useState(false);
  const openMenu = (e)=> {
    const btnText = e.target.innerText;
    if(btnText == "Discover"){
      setdiscover(true);
      sethelp(false);
      setnotification(false);
      setprofile(false);
    }else if(btnText == "Help Center"){
      setdiscover(false);
      sethelp(true);
      setnotification(false);
      setprofile(false);
    }else {
      setdiscover(false);
      sethelp(false);
      setnotification(false);
      setprofile(false);
    }
  };

  const openNotification = ()=>{
    if(!notification){
      setnotification(true);
      setdiscover(false);
      sethelp(false);
      setprofile(false);
    }else{
      setnotification(false);
    }
  };

  const openProfile = ()=>{
    if(!profile){
      setprofile(true);
      sethelp(false);
      setnotification(false);
      setdiscover(false);
    }else{
      setprofile(false);
    }
  };

  const openSideBar = ()=> {
    if(!openSideMenu){
      setopenSideMenu(true);
    }else{
      setopenSideMenu(false);
    }
  };



  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navabr_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo}
            alt="NFT MARKET PLACE" 
            width={100} 
            height={100}/>
          </div>
          <div className={Style.navabr_container_left_box_input}>
            <div className={Style.navabr_container_left_box_input_box}>
              <input type="text" placeholder='Search NFT' />
              <BsSearch onClick={(e) => openMenu(e)} className={Style.search_icon}/>
            </div>
          </div>
        </div>

        <div className={Style.navabr_container_right}>
          <div className={Style.navabr_container_right_discover}>
            <p onClick={(e)=> {}}>Discover</p>
            {discover && (
              <div className={Style.navabr_container_right_discover_box}>
              <Discover />
            </div>
            )}
            
          </div>
          <div className={Style.navabr_container_right_help}>
            <p onClick={(e)=> openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navabr_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          <div className={Style.navabr_container_right_notify}>
            <MdNotifications 
            className={Style.notify} 
            onClick={()=> openNotification()}
            />
            {notification && <Notification/>}
          </div>
          <div className={Style.navabr_container_right_button}>
            <Button btnName="Create" handleClick={() => {}}/>
          </div>
          <div className={Style.navabr_container_right_profile_box}>
            <div className={Style.navabr_container_right_profile}>
              <Image src={images.user1} 
              alt="Profile" 
              width={40} 
              height={40} 
              onClick={()=> openProfile()}
              />
              {profile && <Profile/>}
            </div>
          </div>
          <div className={Style.navabr_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} 
            onClick={()=> openSideBar()}
            />
          </div>
        </div>
      </div>
      {
        !openSideMenu && (
          <div className={Style.sideBar}>
            <SideBar setopenSideMenu={setopenSideMenu}/>
          </div>
        )
      }
    </div>
  );
};

export default NavBar
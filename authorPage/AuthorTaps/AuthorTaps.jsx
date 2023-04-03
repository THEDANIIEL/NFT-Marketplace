import React, {useState} from 'react';
import Image from 'next/image';
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';

import Style from './AuthorTaps.module.css';
import images from '../../img';

const AuthorTaps = ({setcollectiables, setcreated, setlike, setfollower, setfollowing}) => {
  const [openList, setopenList] = useState(false);
  const [activeBtn, setactiveBtn] = useState(1);
  const [selectedMenu, setselectedMenu] = useState("Most Recent");

  const listArray = [
    "Created by Admin",
    "Most Appreiciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = ()=> {
    if(!openList){
      setopenList(true);
    }else{
      setopenList(false);
    }
  };

  const openTab = ()=>{
    const btnText = e.target.innerText;
    if(btntext = "Collectiables"){
      setcollectiables(true);
      setcreated(false);
      setfollower(false);
      setfollowing(false);
      setlike(false);
      setactiveBtn(1);
    }else if(btnText == "Created"){
      setcollectiables(false);
      setcreated(true);
      setfollower(false);
      setfollowing(false);
      setlike(false);
      setactiveBtn(2);
    }else if(btnText == "Liked"){
      setcollectiables(false);
      setcreated(false);
      setfollower(false);
      setfollowing(false);
      setlike(true);
      setactiveBtn(3);
    }else if(btnText == "Following"){
      setcollectiables(false);
      setcreated(false);
      setfollower(false);
      setfollowing(true);
      setlike(false);
      setactiveBtn(4);
    }else if(btnText == "Followers"){
      setcollectiables(false);
      setcreated(false);
      setfollower(true);
      setfollowing(false);
      setlike(false);
      setactiveBtn(5);
    }
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button className={`${activeBtn == 1 ? Style.active : ""}`} onClick={(e)=> openTab(e)}>Collectiables {""}</button>
            <button className={`${activeBtn == 2 ? Style.active : ""}`} onClick={(e)=> openTab(e)}>Created {""}</button>
            <button className={`${activeBtn == 3 ? Style.active : ""}`} onClick={(e)=> openTab(e)}>Liked {""}</button>
            <button className={`${activeBtn == 4 ? Style.active : ""}`} onClick={(e)=> openTab(e)}>Following {""}</button>
            <button className={`${activeBtn == 5 ? Style.active : ""}`} onClick={(e)=> openTab(e)}>Followers {""}</button>
          </div>
        </div>
        <div className={Style.AuthorTaps_box_right}>
          <div className={Style.AuthorTaps_box_right_para} onClick={()=> openDropDownList()}>
            <p>{selectedMenu}</p>
            {
              openList ? <TiArrowSortedUp/> : <TiArrowSortedDown/>
            }
          </div>
          {
            openList && (
              <div className={Style.AuthorTaps_box_right_list}>
                {listArray.map((el, i)=> (
                  <div key={i = 1} onClick={()=> setSelectedmenu()} className={Style.AuthorTaps_box_right_list_item}>
                    <p>{el}</p>
                    <span>{selectedMenu == el && <TiTick/>}</span>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AuthorTaps
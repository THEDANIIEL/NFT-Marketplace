import React, {useState, useEffect} from 'react';
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3, BsCalendarDateFill } from 'react-icons/bs';


import Style from './Collection.module.css';
import DayComponent from './DayComponent/DayComponent';

const Collection = () => {
    const [popular, setpopular] = useState(true);
    const [following, setfollowing] = useState(false);
    const [news, setnews] = useState(false);

    const CardArray = [
        {
            background: images.creatorbackground1, 
            user: images.user
        },
        {
            background: images.creatorbackground2, 
            user: images.user2
        },
        {
            background: images.creatorbackground3, 
            user: images.user3
        },
        {
            background: images.creatorbackground4, 
            user: images.user4
        },
        {
            background: images.creatorbackground5, 
            user: images.user5
        },
        {
            background: images.creatorbackground6, 
            user: images.user6
        },
        {
            background: images.creatorbackground7, 
            user: images.user7
        },
        {
            background: images.creatorbackground8, 
            user: images.user8
        },
        ];
    const followingArray = [{
        background: images.creatorbackground1, 
        user: images.user
    },
    {
        background: images.creatorbackground2, 
        user: images.user2
    },
    {
        background: images.creatorbackground3, 
        user: images.user3
    },
    {
        background: images.creatorbackground4, 
        user: images.user4
    },
    {
        background: images.creatorbackground5, 
        user: images.user5
    },
    {
        background: images.creatorbackground6, 
        user: images.user6
    },
    {
        background: images.creatorbackground7, 
        user: images.user7
    },
    {
        background: images.creatorbackground8, 
        user: images.user8
    },];
    const newsArray = [{
        background: images.creatorbackground1, 
        user: images.user
    },
    {
        background: images.creatorbackground2, 
        user: images.user2
    },
    {
        background: images.creatorbackground3, 
        user: images.user3
    },
    {
        background: images.creatorbackground4, 
        user: images.user4
    },
    {
        background: images.creatorbackground5, 
        user: images.user5
    },
    {
        background: images.creatorbackground6, 
        user: images.user6
    },
    {
        background: images.creatorbackground7, 
        user: images.user7
    },
    {
        background: images.creatorbackground8, 
        user: images.user8
    },];

    const openPopular = ()=> {
        if(!popular){
            setpopular(true);
            setnews(false);
            setfollowing(false);
        }
    };
    const openFollower = ()=> {
        if(!following){
            setpopular(false);
            setnews(false);
            setfollowing(true);
        }
    };
    const openNews = ()=> {
        if(!news){
            setpopular(false);
            setnews(true);
            setfollowing(false);
        }
    };
    
  return (
    <div className={Style.collection}>
        <div className={Style.collection_title}>
            <h2>Top list creators</h2>
            <div className={Style.collection_collections}>
                <div className={Style.collection_collections_btn}>
                    <button onClick={()=> openPopular()}>
                        <BsFillAlarmFill /> Last 24 hours
                    </button>
                    <button onClick={()=> openFollower()}>
                        <BsCalendar3 /> Last 7 days
                    </button>
                    <button onClick={()=> openNews()}>
                        <BsCalendarDateFill /> Last 30 days
                    </button>
                </div>
            </div>
        </div>
        {
            popular && (
                <div className={Style.collection_box}>
                    {CardArray.map((el, i)=> (
                        <DayComponent key={i + 1} i={i} el={el}/>
                    ))}
                </div>
            )
        }
        {
            following && (
                <div className={Style.collection_box}>
                    {followingArray.map((el, i)=> (
                        <DayComponent key={i + 1} i={i} el={el}/>
                    ))}
                </div>
            )
        }
        {
            news && (
                <div className={Style.collection_box}>
                    {newsArray.map((el, i)=> (
                        <DayComponent key={i + 1} i={i} el={el}/>
                    ))}
                </div>
            )
        }
    </div>
  )
}

export default Collection
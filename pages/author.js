import React, {useState, useEffect} from 'react';

import Style from '../styles/author.module.css';
import { Banner, NFTCardTwo } from '@/collectionPage/collectionindex';
import { Brand, Title } from '@/components/componentindex';
import images from '../img';
import { AuthorProfileCard, AuthorTaps, AuthorNFTCardBox } from '@/authorPage/componentinde';
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';

const author = () => {
    const followerArray = [
        {
            background : images.creatorbackground1,
            use : images.user1
        },
        {
            background : images.creatorbackground2,
            use : images.user2
        },
        {
            background : images.creatorbackground5,
            user : images.user5
        },
        {
            background : images.creatorbackground3,
            user : images.user3
        },
        {
            background : images.creatorbackground4,
            user : images.user4
        },
        {
            background : images.creatorbackground6,
            user : images.user6
        },
    ];

    const [collectiables, setcollectiables] = useState(true);
    const [created, setcreated] = useState(false);
    const [like, setlike] = useState(false);
    const [follower, setfollower] = useState(false);
    const [following, setfollowing] = useState(false);

  return (
    <div className={Style.author}>
        <Banner bannerImage={images.author}/>
        <AuthorProfileCard/>
        <AuthorTaps 
        setcollectiables={setcollectiables} 
        setcreated={setcreated} 
        setlike={setlike} 
        setfollower={setfollower} 
        setfollowing={setfollowing}
        />
        <AuthorNFTCardBox collectiables={collectiables} 
        created={created} 
        like={like} 
        follower={follower} 
        following={following}/>
        <Title heading="popular creators" paragraph="click and enjoy"/>
    <div className={Style.author_box}>
        {followerArray.msp((el, i)=> {
            <FollowerTabCard i={i} el ={el}/>
        })}
    </div>
        <Brand/>
    </div>
  )
}

export default author
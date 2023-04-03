import React, { useContext, useEffect } from 'react';

import Style from '../styles/index.module.css';
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard,
   Collection, FollwerTab, AdioLive, Slider, Brand, Video } from '@/components/componentindex';

import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext';

const Home = () => {
  const {} = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading='Latest Audio Collection' paragraph="Discover the most outstanding NFTs"/>
      <AdioLive />
      <Title heading='New Collection' paragraph="Discover the most outstanding NFTs"/>
      <FollwerTab />
      <Slider/>
      <Collection />
      <Title heading='featured NFTs' paragraph="Discover the most outstanding NFTs"/>
      <Filter />
      <NFTCard />
      <Title heading='browse by category' paragraph="explore NFT's by categories"/>
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
}

export default Home;
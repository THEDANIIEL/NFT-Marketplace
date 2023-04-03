import React from 'react';
import Image from 'next/image';

import Style from '../styles/aboutus.module.css';
import { Brand } from '@/components/componentindex';
import images from '../img';

const aboutus = () => {
    const founderArray = [
        {
            name: "Daniel",
            position: "Founder and CEO",
            image: images.founder1,
        },
        {
            name: "jack",
            position: "CTO",
            image: images.founder2,
        },
        {
            name: "Joe",
            position: "COO",
            image: images.founder3,
        },
        {
            name: "ALi",
            position: "Developer",
            image: images.founder4,
        },
    ];

    const factArray = [
        {
            title: "10 million",
            info: "Articles are getting popular",
        },
        {
            title: "10,000",
            info: "our history",
        },
        {
            title: "100 ETH",
            info: "our cashflow",
        },
    ]
  return (
    <div className={Style.aboutus}>
        <div className={Style.aboutus_box}>
            <div className={Style.aboutus_box_hero}>
                <div className={Style.aboutus_box_hero_left}>
                    <h1>👋 About Us</h1>
                    <p>we are developers hope getting billions</p>
                </div>
                <div className={Style.aboutus_box_hero_right}>
                    <Image src={images.hero2}/>
                </div>
            </div>
            <div className={Style.aboutus_box_titile}>
                <h2>Founder</h2>
                <p>Daniel Robusto is our great Founder and ceo</p>
            </div>

            <div className={Style.aboutus_box_founders}>
                <div className={Style.aboutus_box_founders_box}>
                    {founderArray.map((el, i)=> (
                        <div className={Style.aboutus_box_founders_box_img}>
                            <Image 
                            src={el.images} 
                            alt={el.name} 
                            width={500} 
                            height={500} 
                            className={Style.aboutus_box_founders_box_img_img}
                            />
                            <h3>{el.name}</h3>
                            <p>{el.position}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={Style.aboutus_box_titile}>
                <h2>Fast Facts</h2>
                <p>Did you know you can be a millioner by getting into NFT?</p>
            </div>
            <div className={Style.aboutus_box_facts}>
                <div className={Style.aboutus_box_facts_box}>
                    {factArray.map((el, i)=>(
                        <div className={Style.aboutus_box_facts_box_info}>
                            <h3>{el.title}</h3>
                            <p>{el.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Brand />
    </div>
  )
}

export default aboutus
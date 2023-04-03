import React, {useState, useEffect} from 'react';
import Image from 'next/image';

import Style from '../styles/connectWallet.module.css';
import images from '../img';

const connectWallet = () => {
    const [activeBtn, setactiveBtn] = useState(1);

    const providerArray = [
        {
            provider: images.provider1,
            name: "MetaMask",
        },
        {
            provider: images.provider2,
            name: "WalletConnect",
        },
        {
            provider: images.provider3,
            name: "walletLink",
        },
        {
            provider: images.provider4,
            name: "Formatic",
        },
    ]

  return (
    <div className={Style.connectWallet}>
        <div className={Style.connectWallet_box}>
            <h1>Connect your Wallet</h1>
            <p className={Style.connectWallet_box_para}>
                Connect With one of your Wallet provider or create one
            </p>
            <div className={Style.connectWallet_box_provider}>
                {providerArray.map((el, i)=> (
                    <div className={`${Style.connectWallet_box_provider_item} ${activeBtn == i + 1 ? Style.active : ""}`} 
                    key={i + 1} 
                    onClick={()=> setactiveBtn(i + 1)}
                    >
                        <Image
                        src={el.provider}
                        alt={el.provider}
                        width={50}
                        height={50}
                        className={Style.connectWallet_box_provider_item_img}
                        />
                        <p>{el.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default connectWallet
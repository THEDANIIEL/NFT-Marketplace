import React, {useState, useMemo, useCallback, useContext} from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

import Style from '../styles/account.module.css';
import images from '../img';
import Form from '@/AccountPage/Form/Form';


const account = () => {
    const [fileUrl, setfileUrl] = useState(null);

    const onDrop = useCallback(async(acceptFile)=>
    setfileUrl(acceptFile[0]),
    []);

    const {getRootProps, getinputprops} = useDropzone({
        onDrop,
        accept: "image/*", 
        maxsize: 5000000,

    })

  return (
    <div className={Style.account}>
        <div className={Style.account_info}>
            <h1>Profile setting</h1>
            <p>
                you can customize your profile as whatever you want
            </p>
        </div>
        <div className={Style.account_box}>
            <div className={Style.account_box_img}{...getRootProps()}>
                <input {...getinputprops()}/>
                <Image 
                src={images.user1}
                alt="account upload" 
                width={150} 
                height={150}
                className={Style.account_box_img_img}
                />
                <p className={Style.account_box_img_para}>Change image</p>
            </div>
            <div className={Style.account_box_form}>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default account
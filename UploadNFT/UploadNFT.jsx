import React, {useState} from 'react';
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md';
import { FaPercentage } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';

import Style from './UploadNFT.module.css';
import images from '../img';
import formStyle from '../AccountPage/Form/Form';
import { Button } from '@/components/componentindex';
import Dropzone from 'react-dropzone';
import { DropZone } from './uploadNFTIndex';


const UploadNFT = () => {
    const [active, setactive] = useState(0);
    const [itemNAME, setitemNAME] = useState("");
    const [WEBSITE, setWEBSITE] = useState("");
    const [discription, setdiscription] = useState("");
    const [royalities, setroyalities] = useState("");
    const [fileSize, setfileSize] = useState("");
    const [category, setcategory] = useState(0);
    const [properties, setproperties] = useState("")
    
    const categoryArray = [
        {
            images: images.nft_image_1,
            category: "Sports",
        }, 
        {
            images: images.nft_image_2,
            category: "Arts",
        }, 
        {
            images: images.nft_image_3,
            category: "Music",
        }, 
        {
            images: images.nft_image_3,
            category: "Digital",
        }, 
        {
            images: images.nft_image_3,
            category: "Time",
        }, 
        {
            images: images.nft_image_3,
            category: "Photography",
        }, 
    ]

  return (
    <div className={Style.upload}>
        <DropZone title = " JPG, PNG, WEBM, MAX 100MB"
        heading = "Drag & drop files"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        royalities={royalities}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image={images.upload}
        />
        <div className={Style.upload_box}>
            <div className={Style.Form_box_input}>
                <label htmlFor="NFT">itemname</label>
                <input 
                type="text" 
                placeholder='Daniel' 
                className={formStyle.Form_box_input_username}
                onChange={(e)=> setitemNAME(e.target.value)}
                />
            </div>
            <div className={formStyle.Form_box_input}>
                <label htmlFor="website">website</label>
                <div className={formStyle.Form_box_input_box}>
                    <div className={formStyle.Form_box_input_box_icon}>
                        <MdOutlineHttp/>
                    </div>
                    <input 
                    type="text" 
                    placeholder='website' 
                    onChange={(e)=> setWEBSITE(e.target.value)}
                    />
                </div>
            
            <p className={Style.upload_box_input_para}>
                your upload will inculude URL link below
            </p>
            </div>
        
        <div className={formStyle.Form_box_input}>
            <label htmlFor="description">description</label>
            <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="6" 
            placeholder='type somthing about yourself'
            onChange={(e)=> setdiscription(e.target.value)}
               ></textarea>
               <p>the desciption will be shown in NFRcard page</p>
        </div>
        <div className={formStyle.Form_box_input}>
            <label htmlFor="name">
                Choose Collection
            </label>
            <p className={Style.upload_box_input_para}>
                Choose an existing collection
            </p>
            <div className={Style.upload_box_slider_div}>
                {categoryArray.map((el, i)=> (
                    <div 
                    className={`${Style.upload_box_slider} ${active == i + 1 ? Style.active : ""}`}
                    key={i + 1}
                    onClick={()=> (setactive(i + 1), setcategory(el.category))}
                    >
                        <div className={Style.upload_box_slider_box}>
                            <div className={Style.upload_box_slider_box_img}>
                                <Image 
                                src={el.image}
                                alt="background image"
                                width={70}
                                height={70}
                                className={Style.upload_box_slider_box_img_img}
                                />
                            </div>
                            <div className={Style.upload_box_slider_box_img_icon}>
                                <TiTick/>
                            </div>
                        </div>
                        <p>Crypto Legend - {el.category}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className={formStyle.Form_box_input_social}>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="Royalities">Royalities</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <FaPercentage/>
                            </div>
                            <input type="text" placeholder='20%' onClick={(e)=> setroyalities(e.target.value)}/>
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="size">Size</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <MdOutlineAttachFile/>
                            </div>
                            <input type="text" placeholder='165MB' onClick={(e)=> setfileSize(e.target.value)}/>
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="Properties">Properties</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <AiTwotonePropertySafety/>
                            </div>
                            <input type="text" placeholder='Properties' onClick={(e)=> setproperties(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={formStyle.upload_box_btn}>
                    <Button btnName={Upload} handleClick={()=> {}} classStyle={Style.upload_box_btn_style}/>
                </div>
        </div>
    </div>
  )
}

export default UploadNFT
import React, {useState, useCallback} from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

import Style from './DropZone.module.css';
import images from '../../img'

const DropZone = ({ title, heading, itemname, website, description, royalities, fileSize, category, properties, image }) => {
  const [fileUrl, setfileUrl] = useState(null);
  const onDrop = useCallback(async(acceptedFile)=>{
    setfileUrl(acceptedFile[0]);
  });

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image 
            src={image} 
            alt="upload" 
            width={100} 
            height={100}
            objectFit='contain'
            className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subheading}</p>
        </div>
      </div>
      {fileUrl &&(
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <Image
            src={images.nft_image_1}
            alt="NFT image"
            width={200}
            height={200}
            />
            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p><span>NFT name:</span>{itemName || ""}</p>
                <p><span>NFT website:</span>{website || ""}</p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Descriptions</span>
                  {description || ""}
                </p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalities</span>
                  {royalities || ""}
                </p>
                <p>
                  <span>File Size</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  )
}

export default DropZone
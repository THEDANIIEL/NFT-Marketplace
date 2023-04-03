import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import { MdOutlineHttp, MdOutlineContentCopy, MdContentCopy } from 'react-icons/md';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';

import Style from './Form.module.css';
import { Button } from '@/components/componentindex';

const Form = () => {
  return (
    <div className={Style.Form}>
        <div className={Style.Form_box}>
            <form>
                <div className={Style.Form_box_input}>
                    <label htmlFor="name">Username</label>
                    <input type="text" placeholder='Daniel' className={Style.Form_box_input_username}/>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="email">Email</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <HiOutlineMail/>
                        </div>
                        <input type="text" placeholder='Email' />
                    </div>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="description">description</label>
                    <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="6" 
                    placeholder='type somthing about yourself'
                    ></textarea>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="website">website</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <MdOutlineHttp/>
                        </div>
                        <input type="text" placeholder='website' />
                    </div>
                </div>
                <div className={Style.Form_box_input_social}>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="facebook">Facebook</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialFacebook/>
                            </div>
                            <input type="text" placeholder='https://Daniel'/>
                        </div>
                    </div>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="twitter">Twitter</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialTwitter/>
                            </div>
                            <input type="text" placeholder='https://Daniel'/>
                        </div>
                    </div>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="instagram">Instagram</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialInstagram/>
                            </div>
                            <input type="text" placeholder='https://Daniel'/>
                        </div>
                    </div>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="wallet">Wallet Address</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <MdOutlineHttp/>
                        </div>
                        <input type="text"  placeholder='kjbvs87KJGGU131mV3'/>
                        <div className={Style.Form_box_input_box_icon}>
                            <MdOutlineContentCopy/>
                        </div>
                    </div>
                </div>
                <div className={Style.Form_box_btn}>
                    <Button btnName="Upload profile" handleClick={()=>{}} classStyle={Style.button}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
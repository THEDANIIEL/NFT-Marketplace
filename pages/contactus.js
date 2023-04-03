import React from 'react';
import {
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram, 
  } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';


import Style from '../styles/contactus.module.css';
import formStyle from '../AccountPage/Form/Form.module.css';
import { Button } from '@/components/componentindex';

const contactus = () => {
  return (
    <div className={Style.contactus}>
        <div className={Style.contactus_box}>
            <h1>Contact </h1>
            <div className={Style.contactus_box_box}>
                <div className={Style.contactus_box_box_left}>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>🗺️ Address</h3>
                        <p>Kerman/ Iran</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>Email</h3>
                        <p>dkhozaie@gmail.com</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>Phone</h3>
                        <p>09130413100</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>Social</h3>
                        <a href='#'>
                            <TiSocialFacebook/>
                        </a>
                        <a href='#'>
                            <TiSocialLinkedin/>
                        </a>
                        <a href='#'>
                            <TiSocialInstagram/>
                        </a>
                        <a href='#'>
                            <TiSocialYoutube/>
                        </a>
                        <a href='#'>
                            <TiSocialTwitter/>
                        </a>
                    </div>
                </div>
                <div className={Style.contactus_box_box_right}>
                    <form>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="name">Username</label>
                            <input type="text" placeholder='Daniel' className={formStyle.Form_box_input_username}/>
                        </div>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="email">Email</label>
                            <div className={formStyle.Form_box_input_box}>
                                <div className={formStyle.Form_box_input_box_icon}>
                                    <HiOutlineMail/>
                                </div>
                                <input type="text" placeholder='Email' />
                            </div>
                        </div>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="description">description</label>
                            <textarea 
                            name="" 
                            id="" 
                            cols="30" 
                            rows="6" 
                            placeholder='type somthing about yourself'
                            ></textarea>
                        </div>
                        <Button 
                        btnName="Send Message" 
                        handleClick={()=> {}}
                        classStyle={Style.button}
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contactus
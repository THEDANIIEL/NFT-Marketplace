import React from 'react';

import Style from './AudioLive.module.css';
import AudioCard from './AudioCard/AudioCard';
import AudioCardSmall from './AudioCardSmall/AudioCardSmall';

const AdioLive = () => {
  return (
    <div className={Style.audioLive}>
        <div className={audioLive_box}>
            <div className={Style.audioLive_box_left}>
                <AudioCard />
                <AudioCard />
            </div>
            <div className={Style.audioLive_box_right}>
                <AudioCardSmall/>
                <AudioCardSmall/>
                <AudioCardSmall/>
            </div>
        </div>
    </div>
  )
}

export default AdioLive
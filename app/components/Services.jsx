import React from 'react';
import Image from 'next/image';


const Services = ({title, days, text1, text2, text3, time, mixlr, YT, map, classname}) => {
  return (
    <div className={classname}>
      <div className='services-text'>
        <p>{title}</p>
        <span>{days}</span>
        <span>Time: {time}</span>
      </div>
      <div className="icon-text-container">
        <div className="icon-text">
          <Image src={map} alt="location_icon" width={20} height={20} />
          <span>{text1}</span>
        </div>
        <div className="icon-text">
          <Image src={YT} alt="youtube_icon" width={20} height={20} />
          <span>{text2}</span>
        </div>
        <div className="icon-text">
          <Image src={mixlr} alt="mixlr_icon" width={20} height={20} />
          <span>{text3}</span>
        </div>
      </div>
    </div>
  );
}

export default Services
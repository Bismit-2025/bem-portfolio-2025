import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { PiTiktokLogoBold } from 'react-icons/pi';

export const getSocialMediaLogo = (
  type: 'Instagram' | 'Twitter' | 'Youtube' | 'Tiktok' | 'Medium' | 'Facebook' | 'LinkedIn'
): React.ElementType => {
  const logoMap: Record<
    'Instagram' | 'Twitter' | 'Youtube' | 'Tiktok' | 'Medium' | 'Facebook' | 'LinkedIn',
    React.ElementType
  > = {
    Instagram: BsInstagram,
    Twitter: FaXTwitter,
    Youtube: AiOutlineYoutube,
    Tiktok: PiTiktokLogoBold,
    Medium: FaMediumM,
    Facebook: FaFacebook,
    LinkedIn: FaLinkedinIn,
  };

  return logoMap[type];
};

export const getSocialMediaLogoGradient = (
  type: 'Instagram' | 'Twitter' | 'Youtube' | 'Tiktok' | 'Medium' | 'Facebook' | 'LinkedIn'
) => {
  const IconComponent = getSocialMediaLogo(type);

  return (
    <div style={{ display: 'inline-block' }}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id={`icon-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#4892E9" offset="20%" />
            <stop stopColor="#ED483E" offset="80%" />
          </linearGradient>
        </defs>
      </svg>
      <IconComponent
        style={{
          fill: `url(#icon-gradient)`,
        }}
      />
    </div>
  );
};

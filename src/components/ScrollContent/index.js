import React, {useState} from 'react';
import './scrollContent.css';
import ScreenContent from './ScreenContent.js';

const contentToShow = [
    {
        title: 'we’ve got your back.',
        description: 'gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.',
        imageLink: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png'
    },
    {
        title: 'begin your winning streak.',
        description: 'use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.',
        imageLink: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png'
    },
    {
        title: 'for your eclectic taste.',
        description: 'get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.',
        imageLink: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png'
    },
    {
        title: 'more cash in your pockets.',
        description: 'switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.',
        imageLink: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png'
    }
];

const ScrollContent = () => {
    const [currentImage, setCurrentImage] = useState(0)
  return (
    <div className="scroll-content-wrapper">
      <div className="left-scroll-content-wrapper">
        {contentToShow.map((content, index) => (
          <div className="vertical-scroll-content">
            <ScreenContent content={content} index={index} setCurrentImage={setCurrentImage} />
          </div>
        ))}
      </div>
      <div className="right-scroll-content-wrapper">
        <div className="mobile-content non-mobile">
          <div className="mobile-horizontal-scroll-content">
            <img
              src={contentToShow[currentImage].imageLink}
              className="mobile-screen-image slide-in-right"
              key={contentToShow[currentImage].imageLink}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollContent
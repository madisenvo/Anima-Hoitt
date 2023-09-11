import React, { useState } from 'react';
import GalleryTabs from '../../components/GalleryTabs/Gallery';
import Slideshow from '../../components/Slideshow/Slideshow';

const Art = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const printsImages = [
    './images/print1.jpg',
    './images/print2.jpg',
    './images/print3.jpg',
  ];
  
  const animalPortraitsImages = [
    './images/dog1.jpg',
    './images/dog2.jpg',
    './images/dog3.jpg',
  ];
  
  const paintingsImages = [
    './images/paint1.jpg',
    './images/paint2.jpg',
    './images/paint3.jpg',
  ];

  const getImageArrayForTab = () => {
    let selectedArray;
  
    switch (activeTab) {
      case 'prints':
        selectedArray = printsImages;
        break;
      case 'animalPortraits':
        selectedArray = animalPortraitsImages;
        break;
      case 'paintings':
        selectedArray = paintingsImages;
        break;
      case 'all':
        selectedArray = [...printsImages, ...animalPortraitsImages, ...paintingsImages];
        break;
      default:
        selectedArray = [];
    }
  
    console.log(`Active Tab: ${activeTab}`);
    console.log('Selected Array:', selectedArray);
  
    return selectedArray;
  };
  
  

  return (
    <div>
      <h1>Gallery Page</h1>
      <GalleryTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      <Slideshow images={getImageArrayForTab()} />
    </div>
  );
};

export default Art;

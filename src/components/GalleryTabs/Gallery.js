import React from 'react';

const GalleryTabs = ({ activeTab, onChangeTab }) => {
  return (
    <div className="gallery-tabs">
      <button
        onClick={() => onChangeTab('prints')}
        className={activeTab === 'prints' ? 'active' : ''}
      >
        Prints
      </button>
      <button
        onClick={() => onChangeTab('animalPortraits')}
        className={activeTab === 'animalPortraits' ? 'active' : ''}
      >
        Animal Portraits
      </button>
      <button
        onClick={() => onChangeTab('paintings')}
        className={activeTab === 'paintings' ? 'active' : ''}
      >
        Paintings
      </button>
      <button
        onClick={() => onChangeTab('all')}
        className={activeTab === 'all' ? 'active' : ''}
      >
        All
      </button>
    </div>
  );
};

export default GalleryTabs;

import React, { useState } from 'react';
import CollectionItem from './CollectionItem';

const CollectionList = ({ featuredCollections }) => {
    const defaultFeaturedImage = (Object.entries(featuredCollections))[0][1].collectionThumbnail
  const [currentThumbnail, setCurrentThumbnail] = useState(defaultFeaturedImage);

  const handleHover = (thumbnail) => {
    if (thumbnail) {
        setCurrentThumbnail(thumbnail);
    }
  };

  const goToCollection = (collection) => {
    if (collection) {
      const redirect = window.location.origin + '/blog/collections/' + collection;
      window.location.href = redirect
    }
  };

  return (
    <div className="content__container sticky-text-image__section">
      <div className="sticky-text-image__text">
        {Object.entries(featuredCollections).map(([collection, data]) => (
          <CollectionItem
            key={collection}
            title={collection}
            description={data.collectionDescription}
            collectionThumbnail={data.collectionThumbnail}
            onHover={handleHover}
            goToCollection={goToCollection}
          />
        ))}
      </div>
      <div className="sticky-text-image__image">
        <img src={currentThumbnail} alt="Collection Thumbnail" />
      </div>
    </div>
  );
};

export default CollectionList;

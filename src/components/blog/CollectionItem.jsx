import React from 'react';

const CollectionItem = ({ title, description, collectionThumbnail, onHover }) => {
  return (
    <figure className='linkbox'
      onMouseEnter={() => onHover(collectionThumbnail)}
      onMouseLeave={() => onHover(undefined)}
    >
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
};

export default CollectionItem;

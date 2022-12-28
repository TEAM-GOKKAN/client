import React from 'react';

const ProductTempSaveButton = () => {
  const handleTempSaveButtonClick = () => {
    console.log('hi');
  };

  return (
    <button className="save" onClick={handleTempSaveButtonClick}>
      저장
    </button>
  );
};

export default ProductTempSaveButton;

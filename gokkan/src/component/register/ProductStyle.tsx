import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const ProductStyle = () => {
  const [target, setTarget] = useState();
  return (
    <div>
      <input type="radio" id="ArtDeco" />
      <label htmlFor="ArtDeco">Art Deco</label>
      <input type="radio" id="Mid-CenturyModern" />
      <label htmlFor="Mid-CenturyModern">Mid-Century Modern</label>
      <input type="radio" id="SpaceAge" />
      <label htmlFor="SpaceAge">Space Age</label>
      <input type="radio" id="Memphis" />
      <label htmlFor="Memphis">Memphis</label>
      <input type="radio" id="Industrial" />
      <label htmlFor="Industrial">Industrial</label>
      <input type="radio" id="Contemporary" />
      <label htmlFor="Contemporary">Contemporary</label>
    </div>
  );
};

export default ProductStyle;

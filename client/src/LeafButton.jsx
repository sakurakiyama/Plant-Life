import React, { useState } from 'react';


function LeafButton() {
  const brownLeaf = 'https://i.imgur.com/806SkGz.png';
  const greenLeaf = 'https://i.imgur.com/LZqTPcE.png';

  const [leaf, setLeaf] = useState(brownLeaf);
  return (
      <button
        className='leafButton'
        onClick={() => {
          if (leaf === greenLeaf) setLeaf(brownLeaf);
          else {
            setLeaf(greenLeaf);
          }
        }}
      >
        <img id='leaf' src={leaf} />
      </button>
  );
}

export default LeafButton;

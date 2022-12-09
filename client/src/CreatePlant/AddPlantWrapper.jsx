import React, { useState } from 'react';
import AddPlant from './AddPlant'; 

function AddPlantWrapper() {
  return (
    <section className='formWrapper'>

      <AddPlant />
      <section className='treeHugger'>
      <img src = 'https://i.imgur.com/L9Uma0r.png'></img>
      </section>
      <section className='treeHugger2'>
        <img src = 'https://i.imgur.com/L9Uma0r.png'></img>
        </section>
    </section>
  );
}

export default AddPlantWrapper;

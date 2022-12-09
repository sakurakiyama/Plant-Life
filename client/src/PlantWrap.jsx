import React, { useState } from 'react';
import Plants from './Plants';

function PlantWrap({plantData, openModal}) {
  
  return (
    <section className='container'>
        <Plants plantData={plantData} openModal={openModal} />
    </section>
  );
}

export default PlantWrap;

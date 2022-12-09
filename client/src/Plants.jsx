import React, { useState, useEffect } from 'react';
import LeafButton from './LeafButton';

function Plants({ plantData, openModal }) {

  return (
    <>
      {plantData.map((plantImg) => {
        const { image, _id } = plantImg;
        return (
          <div>
          <section className='wrapper'>

            <article key={_id} className='eachPlant'>
              <img className='allPlantImg' src={image} onClick={() => {
                openModal(_id); 
              }} />
            </article>

          </section>
          <LeafButton />
          </div>
        );
      })}
    </>
  );
}



export default Plants;

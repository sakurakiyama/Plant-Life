import React, { useState } from 'react';
import DeletePlant from './DeletePlant';

function DeletePlantWrapper() {
    return (
      <section className='deleteFormWrapper'>
        <DeletePlant />
  
        <section className='treeHugger'>
        <img src = 'https://i.imgur.com/L9Uma0r.png'></img>
        </section>
        <section className='treeHugger2'>
        <img src = 'https://i.imgur.com/L9Uma0r.png'></img>
        </section>
      </section>
    );
  }



export default DeletePlantWrapper; 
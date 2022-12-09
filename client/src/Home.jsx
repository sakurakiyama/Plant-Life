import React, { useState, useEffect } from 'react';
import PlantWrap from './PlantWrap';

function Home() {
  const [plants, setPlants] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageId, setImageId] = useState(0);

  function handleOpen(imgId) {
    setIsOpen(true);
    setImageId(imgId);
  }
  

  function handleClose() {
    setIsOpen(false);
  }
  useEffect(() => {
    fetch('http://localhost:3000/api/')
      .then((res) => res.json())
      .then((plantData) => {
        setPlants(plantData);
      })
      .catch((err) => console.log('Could not get plant data', err));
  }, []);

  return (
    <main>
      {modalIsOpen && (
        <div
          onClick={() => {
            handleClose();
          }}
          className='overlay'
        >
          <div className='modalContents'>
            <div className='modalText'>
            <p>Plant Name: { plants.find(object => object._id === imageId).plantName}</p>  <br />
            <p>Date Found: { plants.find(object => object._id === imageId).date }</p>  <br />
            <p>Location: { plants.find(object => object._id === imageId).location }</p>  <br />
            <p>Description: { plants.find(object => object._id === imageId).description }</p> 
            </div>
          </div>
        </div>
      )}

      <section className='container'>
        <PlantWrap plantData={plants} openModal={handleOpen} />
      </section>
    </main>
  );
}

export default Home;

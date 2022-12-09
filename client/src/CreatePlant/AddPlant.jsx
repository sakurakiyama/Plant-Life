import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function AddPlant() {
  const [plantName, setPlantName] = useState('');
  const [locationDiscovered, setLocationDiscovered] = useState('');
  const [date, setDate] = useState('');
  const [plantDescription, setPlantDescription] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plantName,
        locationDiscovered,
        date,
        plantDescription,
        image,
      }),
    }).then(() => {
      setTimeout(() => {
        history.push('/');
      }, 1000);
    });
  }
  return (
    <section className='formSection'>
      <section className='formText'>
        <form onSubmit={handleFormSubmit}>
          <label>
            Plant Name:
            <input
              type='text'
              name='plantname'
              value={plantName}
              onChange={(event) => setPlantName(event.target.value)}
            />
          </label>
          <br />

          <label>
            Location Discovered:
            <input
              type='text'
              name='location'
              value={locationDiscovered}
              onChange={(event) => setLocationDiscovered(event.target.value)}
            />
          </label>
          <br />

          <label>
            Date:
            <input
              type='text'
              name='date'
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <br />

          <label>
            Description:
            <input
              type='text'
              name='description'
              value={plantDescription}
              onChange={(event) => setPlantDescription(event.target.value)}
            />
          </label>
          <br />

          <label>
            Image:
            <input
              type='text'
              name='image'
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </label>
          <br />

          <input id='formButton' type='submit' value='Submit' />
        </form>
      </section>
    </section>
  );
}

export default AddPlant;

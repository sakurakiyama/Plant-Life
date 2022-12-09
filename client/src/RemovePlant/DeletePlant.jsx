import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function DeletePlant() {
    const [deletePlantName, setDeletePlantName] = useState(''); 
    const history = useHistory(); 

    function handleFormSubmit(event) {
      console.log('form submit in delete plant has been clicked')

      event.preventDefault(); 

      fetch('http://localhost:3000/api', {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({deletePlantName})
      })
      .then(() => {
        history.push('/')
      }) 
    }
  return (
    <section className='deleteFormSection'>
      <div id = 'centerDelete'>
       <img id="deleteLogo"src ="https://i.imgur.com/36vQL2y.png"/>
       </div>
      <section className='deleteFormText'>
        <form onSubmit={handleFormSubmit}>
          <label>
            Plant Name:
            <input
              type='text'
              name='plantname'
              value={deletePlantName}
              onChange={(event) => setDeletePlantName(event.target.value)}
            />
          </label>
          <input id='formButton' type='submit' value='Submit' />
        </form>
      </section>
    </section>
  );
}

export default DeletePlant;

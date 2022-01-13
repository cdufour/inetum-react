import React, { useState } from 'react';

const ShowInfo = () => {

  const [state, setState] = useState({ name: "", age: 0, show: false })

  const handleChange = e => {
    const { name, value } = e.target

    setState({...state, [name]: value  })
  }
  
  const handleClick = () => {
    setState({...state, show: true})
  }
  
  if (state.show) {
    return (
      <div className="showInformation">
        <h1>Infos perso</h1>

        <div className="personalInfo">
          <p>
            <strong>Nom:</strong>{ state.name }
          </p>
          <p>
            <strong>Age:</strong>{ state.age }
          </p>
        </div>
      
      </div>
    );
  }

  return (
    <div className="showInformation">
      <h1>Infos perso</h1>
      <div>
        <p>
          <strong>Nom:</strong>
        </p>
        <p>
          <input name="nom" type="text" value={state.name} onChange={handleChange} />
        </p>
        <p>
          <input name="age" type="number" value={state.age} onChange={handleChange} />
        </p>
        <p>
          <button onClick={handleClick}>Afficher plus d'info</button>
        </p>
      </div>
    </div>
  )

};

export default ShowInfo;
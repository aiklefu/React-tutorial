import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setfistName] = useState('');
  const [lastName, setlastName] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && lastName)
    {
      const p = {firstName, lastName};
      setPeople((people)=>{
        return [...people, p]
      });
      setfistName('');
      setlastName('');
    }
    else
    {
      console.log('empty value');
    }
  }

  return (<>
  <article>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name : </label>
        <input type="text" id="firstName" name="firstName" value={firstName}
          onChange={(e)=> {
            setfistName(e.target.value);
          }}></input>
      </div>
      <div className="form-control">
        <label htmlFor="lastName">Last Name : </label>
        <input type="text" id="lastName" name="lastName" value={lastName}
        onChange={(e)=> {
          setlastName(e.target.value);
        }}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
    {
      people.map((person)=>{
        const {id, firstName, lastName} = person;
        return (<div className="item">
                  <h1>{firstName}</h1>
                  <h4>{lastName}</h4>
                </div>)
      })
    }
  </article>
  </>);
};

export default ControlledInputs;

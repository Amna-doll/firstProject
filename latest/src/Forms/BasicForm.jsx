import React, { useState } from 'react';

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { email, password };
    setAllEntry((prevEntries) => [...prevEntries, newEntry]); // Update state correctly
    console.log([...allEntry, newEntry]); // Log the new state if needed

    // Reset the input fields after submission
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
        <label htmlFor='email'>Email</label>
        <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor='password'>Password</label>
        <input
            type='password'
            name='password'
            id='password'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>

      <div>
        {allEntry.map((curElem, index) => (
          <div key={index} className="showDatastyles">
            <p>{curElem.email}</p>
            <p>{curElem.password}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BasicForm;

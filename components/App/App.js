import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'
import SendEmail from '../SendEmail'
import { useState } from 'react'




function App() {
  const [isValid, setisValid] = useState(false)

  const propFunc = (Val) => {
      if (Val === true)
      {
        setisValid(true)
      }
  }

  return (
    <div className="App">
      {!isValid ? <SendEmail Test={propFunc} Email={'garrettk161@gmail.com'}/> : null}
      <h1>Entries</h1>

      {isValid ? <AddEntry /> : null}
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
    </div>
  )
}

export default App;


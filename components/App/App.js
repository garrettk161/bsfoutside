import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'
import SendEmail from '../SendEmail'

function App() {

  return (
    <div className="App">
      <SendEmail Email={'garrettk161@gmail.com'}/>
      <h1>Entries</h1>

      {Valid ? <AddEntry /> : null}
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
    </div>
  )
}

export default App;


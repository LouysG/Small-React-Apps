import '../App.css';
import { useState } from 'react';
import InputBar from './InputBar';
import DisplayPane from './DisplayPane';



function App() {
  const [response, setResponse] = useState()

  function handleSearch (e) {
    const searchInput = document.getElementById('bar').value
    setResponse(searchInput)
    e.preventDefault()
    document.getElementById('bar').value = ''
  }


  return (
    <>
      <InputBar handleSearch={handleSearch} />
      <DisplayPane response={response} />
    </>
  )
}

export default App;

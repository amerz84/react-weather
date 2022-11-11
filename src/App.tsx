import { useState } from 'react'
import './App.css'
import Search from './search/search'

function App() {

  const handleOnSearchChange = (searchData: string) => {
    console.log(searchData);
  }

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  )
}

export default App

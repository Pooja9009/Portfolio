import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const css = {
    textAlign: 'center',
    marginTop: '20%',
    color: 'black',
    fontSize: '50px',
    fontWeight: '300',
  }
  const main = {
    textAlign: 'center',
    color: 'black',
    fontSize: '30px',
    fontWeight: '300',
  }

  return (
    <>
      <h1 style={css}>Coming Soon</h1>

      <p style={main}>Pooja Rijal</p>

      <a href='https://www.instagram.com/its_puza_rijal/'>Instagram</a>

    </>
  )
}

export default App

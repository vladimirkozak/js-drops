import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StatusBar, Style} from '@capacitor/status-bar'
import { useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'

function App() {
  const [position, setPosition] = useState({lat: 0, long: 0});

  const toggleLightStatusBar = async () => {
    await StatusBar.setStyle({style: Style.Dark});
  };

  const getLocation = async () => {
    await Geolocation.requestPermissions();
    const pos = await Geolocation.getCurrentPosition();
    setPosition({
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={toggleLightStatusBar}>
          Set Statusbar to Light
        </button>
        <button onClick={getLocation}>
          Get Geolocation
        </button>
        
      </div>
      <p className="read-the-docs">
        Coords are {JSON.stringify(position, null, 2)}
      </p>
    </>
  )
}

export default App

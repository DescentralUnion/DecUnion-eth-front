import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Home from "./components/home/Home"
import ConnectWallet from "./components/connectWallet/ConnectWallet"

function App() {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  
  return (
    <div className="App">
      {isConnected ? (
        <Home />
      ) : (
        <ConnectWallet setIsConnected={setIsConnected} />
      )}
    </div>
  )
}

export default App

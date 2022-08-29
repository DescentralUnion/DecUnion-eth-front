import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Home from "./components/home/Home"
import ConnectWallet from "./components/connectWallet/ConnectWallet"
import { BigNumber } from "ethers"

function App() {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [walletBalance, setWalletBalance] = useState<string>('')
  
  return (
    <div className="App">
      {walletAddress != '' ? (
        <Home walletAddress={walletAddress} walletBalance={walletBalance} />
      ) : (
        <ConnectWallet setIsConnected={setIsConnected} setWalletAddress={setWalletAddress} setWalletBalance={setWalletBalance} />
      )}
    </div>
  )
}

export default App

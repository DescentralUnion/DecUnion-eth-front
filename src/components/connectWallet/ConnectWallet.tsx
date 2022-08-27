import React, { Dispatch, SetStateAction } from 'react'

interface ConnectWalletProps {
    setIsConnected: (value: boolean) => void
}

const ConnectWallet = ({setIsConnected}: ConnectWalletProps) => {
  return (
    <div>
        ConnectWallet
        <br/>
        <button onClick={() => setIsConnected(true)}>Conectar</button>
    </div>
  )
}

export default ConnectWallet
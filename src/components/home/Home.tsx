import { useState } from "react"
import Deposit from "./components/deposit/Deposit"
import Statistics from "./components/statistics/Statistics"
import Withdraw from "./components/withdraw/Withdraw"
import './home.css'

const Home = () => {
  const [showDeposit, setShowDeposit] = useState<boolean>(true)

  return (
    <div className="homeWrapper">
      <div className="panelWrapper">
        <div className="selectorWrapper">
          <span className={`selectorButton ${!showDeposit ? "selectorButton-opacity" : ""}`} onClick={() => setShowDeposit(true)}>Deposit</span>
          <span className={`selectorButton ${showDeposit ? "selectorButton-opacity" : ""}`} onClick={() => setShowDeposit(false)}>Withdraw</span>
        </div>
        {showDeposit ? <Deposit /> : <Withdraw />}
      </div>
      <Statistics/>
    </div>
  )
}

export default Home

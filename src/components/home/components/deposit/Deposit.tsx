import { useState } from "react"
import "./deposit.css"

const AMOUNTS = [0.1, 1.0, 10, 100]

const Deposit = () => {
  const [selectedValue, setSelectedValue] = useState<number>(0.1)
  return (
    <div className="depositWrapper">
      <div>
        <div className="depositHeaderWrapper">
          <div className="depositTitle">Amount</div>
          <span className="depositInfo">i</span>
        </div>
        <div className="amountWrapper">
          {AMOUNTS.map((amount) => {
            return (
              <span
                className={`pill ${
                  selectedValue === amount && "pill-selected"
                }`}
                onClick={() => setSelectedValue(amount)}
              >
                {amount} ETH
              </span>
            )
          })}
        </div>
      </div>
      <div className="depositDescription">
        Please select an amount that you would like to mix
      </div>
      <button className="depositButton">Deposit</button>
    </div>
  )
}

export default Deposit

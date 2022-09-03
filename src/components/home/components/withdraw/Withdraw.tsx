import React from "react"
import "./withdraw.css"

const Withdraw = () => {
  return (
    <div className="withdrawWrapper">
      <div>
        <h4 className="titleWithdrawWrapper">Note</h4>
        <input placeholder="torbellino.eth-0.0.1-0x00000000" className="withdrawTextInput" type="text" />
        <div className="withdrawDescription">Note value is 0.1 ETH</div>
        <div className="withdrawDescription">
          It's been 2 days after deposit
        </div>
      </div>

      <div className="widthdrawSeparator"></div>

      <div>
        <h4 className="titleWithdrawWrapper">Make a withdrawal</h4>
        <div>
          <div className="withdrawDescription">
            <div>Wallet address</div>
            <div>Gas fee: 0.01 ETH</div>
          </div>
          <br/>
          <input placeholder="0x000000000000000000" className="withdrawTextInput" type="text" />
        </div>

        <div className="withdrawNoteValue">Note value is 0.1 ETH</div>
        <button className="depositButton">Withdraw</button>
      </div>
    </div>
  )
}

export default Withdraw

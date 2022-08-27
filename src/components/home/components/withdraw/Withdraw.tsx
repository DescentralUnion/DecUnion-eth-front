import React from "react"

const Withdraw = () => {
  return (
    <div>
      <div>
        <h4>Note</h4>
        <input type="text" />
        <div>Note value is 0.1 ETH</div>
        <div>It's been 2 days after deposit</div>
      </div>
      <hr />
      <div>
        <h4>Make a withdrawal</h4>
        <div>
          <div>
            <h4>Wallet address</h4>
            <h4>Gas fee: 0.01 ETH</h4>
          </div>
          <input type="text" />
        </div>

        <div>Note value is 0.1 ETH</div>
        <button>Withdraw</button>
      </div>
    </div>
  )
}

export default Withdraw

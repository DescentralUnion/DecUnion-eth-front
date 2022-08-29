import { BaseContract, ContractInterface, ethers } from "ethers"

export class ContractManager {
    private address: string
    private abi: ContractInterface

  constructor(address: string, abi: ContractInterface) {
    this.address = address
    this.abi = abi
  }

  getContract(): BaseContract | null {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const connectedContract = new ethers.Contract(this.address, this.abi, signer)
      return connectedContract
    }
    return null
  }
}

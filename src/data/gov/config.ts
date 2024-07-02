import { atom, selector } from "recoil"
// import { protocolQuery } from "../contract/protocol"
import { useStoreLoadable } from "../utils/loadable"
import { getContractQueryQuery } from "../utils/query"
import { networkNameState } from "../network"
import { loopGovernanceContract} from "../../constants"

export const govConfigQuery = selector({
  key: "govConfig",
  get: async ({ get }) => {
    const networkName = get(networkNameState)
    // const { contracts } = get(protocolQuery)
    const getContractQuery = get(getContractQueryQuery)
    let contract = loopGovernanceContract.mainnet
    if (networkName !== "mainnet") contract = loopGovernanceContract.testnet
    return await getContractQuery<GovConfig>(
      { 
        // contract: contracts["gov"], 
        contract: contract,
        msg: { config: {} } 
      },
      "govConfig"
    )
  },
})

const govConfigState = atom<GovConfig | undefined>({
  key: "govConfigState",
  default: undefined,
})

export const useGovConfig = () => {
  return useStoreLoadable(govConfigQuery, govConfigState)
}

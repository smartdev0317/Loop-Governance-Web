import { atom, selector } from "recoil"
import { useStoreLoadable } from "../utils/loadable"
import { getContractQueryQuery } from "../utils/query"
import { protocolQuery } from "./protocol"
import { networkNameState } from "../../data/network"
import { loopGovernanceContract } from "../../constants"

export const mirrorTokenInfoQuery = selector({
  key: "mirrorTokenInfo",
  get: async ({ get }) => {
    const { contracts } = get(protocolQuery)
    const getContractQuery = get(getContractQueryQuery)
    const response = await getContractQuery<{ total_supply: string }>(
      {
        contract: contracts["mirrorToken"],
        msg: { token_info: {} },
      },
      "mirrorTokenInfo"
    )

    return response
  },
})

export const loopTotalStakedBalanceQuery = selector({
  key: "loopTokenGovBalance",
  get: async ({ get }) => {
    // const { contracts } = get(protocolQuery)
    const getContractQuery = get(getContractQueryQuery)

    const networkName = get(networkNameState)
    let response;
    if (networkName === "mainnet") {
      response = await getContractQuery<number>(
        {
          contract: loopGovernanceContract.mainnet,
          msg: { total_staked: {} },
        },
        "loopTokenGovBalance"
      )
    } else {
      response = await getContractQuery<number>(
        {
          contract: loopGovernanceContract.testnet,
          msg: { total_staked: {} },
        },
        "loopTokenGovBalance"
      )
    }
    return response?.toString() ?? "0"
  },
})

const loopTokenGovBalanceState = atom({
  key: "loopTokenGovBalanceState",
  default: "0",
})

export const mirrorTokenCommunityBalanceQuery = selector({
  key: "mirrorTokenCommunityBalance",
  get: async ({ get }) => {
    const { contracts } = get(protocolQuery)
    const getContractQuery = get(getContractQueryQuery)
    const response = await getContractQuery<Balance>(
      {
        contract: contracts["mirrorToken"],
        msg: { balance: { address: contracts["community"] } },
      },
      "mirrorTokenCommunityBalance"
    )

    return response?.balance ?? "0"
  },
})

const mirrorTokenCommunityBalanceState = atom({
  key: "mirrorTokenCommunityBalanceState",
  default: "0",
})

export const communityConfigQuery = selector({
  key: "communityConfig",
  get: async ({ get }) => {
    const { contracts } = get(protocolQuery)
    const getContractQuery = get(getContractQueryQuery)
    const response = await getContractQuery<{ spend_limit: string }>(
      { contract: contracts["community"], msg: { config: {} } },
      "communityConfig"
    )

    return response
  },
})

export const factoryDistributionInfoQuery = selector({
  key: "factoryDistributionInfo",
  get: async ({ get }) => {
    const { contracts } = get(protocolQuery)
    const getContractQuery = get(getContractQueryQuery)
    const response = await getContractQuery<{ weights: DistributionWeight[] }>(
      {
        contract: contracts["factory"],
        msg: { distribution_info: {} },
      },
      "factoryDistributionInfo"
    )

    return response?.weights
  },
})

export const getDistributionWeightQuery = selector({
  key: "getDistributionWeight",
  get: ({ get }) => {
    const weights = get(factoryDistributionInfoQuery)
    return (token: string) => weights?.find(([addr]) => addr === token)?.[1]
  },
})

/* store */
export const useLoopTokenGovBalance = () => {
  return useStoreLoadable(
    loopTotalStakedBalanceQuery,
    loopTokenGovBalanceState
  )
}

export const useMirrorTokenCommunityBalance = () => {
  return useStoreLoadable(
    mirrorTokenCommunityBalanceQuery,
    mirrorTokenCommunityBalanceState
  )
}

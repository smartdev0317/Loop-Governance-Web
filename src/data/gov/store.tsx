import { /*minus,*/ isFinite } from "../../libs/math"
// import { useGovState } from "./state"
import { useLoopTokenGovBalance } from "../contract/info"

export const useTotalStaked = () => {
  // const state = useGovState()
  const balance = useLoopTokenGovBalance()

  return [balance].every(isFinite)
    ? balance
    : "0"
}

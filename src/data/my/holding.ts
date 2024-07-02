import { useRecoilValue } from "recoil"
import { gt, sum, times } from "../../libs/math"
import { PriceKey } from "../../hooks/contractKeys"
import { useProtocol } from "../contract/protocol"
import { useFindBalance, useFindPrice, useUserStakable } from "../contract/normalize"
import { useTokenPair } from "../contract/contract"
import { networkNameState } from "../../data/network"
import { loopToken } from "../../constants"

export const useMyHolding = () => {
  const { listedAll, getIsDelisted } = useProtocol()
  // console.log({listedAll})
  const { contents: findBalance, isLoading } = useFindBalance()
  // console.log({findBalance})
  const findPrice = useFindPrice()

  // const { content: tokenPair } = useTokenPair()
  // console.log(tokenPair)

  const { contents: balance } = useUserStakable()

  const dataSource = listedAll
    .map((item) => {
      const { token } = item
      const delisted = getIsDelisted(token)
      const priceKey = delisted ? PriceKey.END : PriceKey.PAIR
      const balance = findBalance(token)
      const price = findPrice(priceKey, token)
      const value = times(balance, price)

      return { ...item, delisted, balance, price, value }
    })
    .filter(({ balance }) => gt(balance, 0))

  const totalValue = sum(dataSource.map(({ value }) => value))

  return { dataSource, totalValue, isLoading }
}

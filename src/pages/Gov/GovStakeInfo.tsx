import { useRouteMatch } from "react-router-dom"
import { useAddress } from "../../hooks"
// import { useRecoilValue } from 'recoil'
// import { useProtocol } from "../../data/contract/protocol"
import { useUserStaked, useUserStakable } from "../../data/contract/normalize"
// import { useTokenBalances } from "../../data/contract/normalize"
import Card from "../../components/Card"
import Summary from "../../components/Summary"
import LinkButton from "../../components/LinkButton"
import Formatted from "../../components/Formatted"
import { Submit } from "../../components/Button"
import styles from "./GovStakeInfo.module.scss"
// import { networkNameState } from "../../data/network"
// import { loopToken, kujiToken } from "../../constants"

const GovStakeInfo = () => {
  // const { getToken } = useProtocol()

  // const networkName = useRecoilValue(networkNameState)
  // let token = loopToken.token
  // if (networkName !== "mainnet") token = kujiToken.token

  const address = useAddress()

  const { contents: userStaked } = useUserStaked()
  const { contents: govStakable } = useUserStakable()

  // const { contents: tokenBalances } = useTokenBalances()
  // console.log(tokenBalances)
  // const { [token]: govStakable } = tokenBalances

  // console.log(govStakable)

  const contents = [
    {
      title: `Staked LOOP`,
      children: <Formatted symbol="LOOP">{userStaked}</Formatted>,
    },
    {
      title: `Stakable LOOP`,
      children: <Formatted symbol="LOOP">{govStakable}</Formatted>,
    },
  ]

  // const { url } = useRouteMatch()

  return (
    <Card>
      {contents.map((item, index) => (
        <article className={styles.item} key={index}>
          <Summary {...item} size="sm" />
        </article>
      ))}

      <Submit>
        <a className="styles.button" href="https://testbombay.loop.onl/stake#stake" target="_blank" rel="noreferrer">Manage Stake</a>
      </Submit>
    </Card>
  )
}

export default GovStakeInfo

import { useRecoilValue } from "recoil"
import Card, { CardMain } from "../../components/Card"
import AssetItem from "../../components/AssetItem"
// import { useProtocol } from "../../data/contract/protocol"
// import CommunityBalance from "./CommunityBalance"
import { networkNameState } from "../../data/network"
import { loopToken } from "../../constants"
import TotalStaked from "./TotalStaked"
import styles from "./GovInfo.module.scss"

const GovInfo = () => {
  // const { getToken } = useProtocol()
  // const token = getToken("MIR")
  const networkName = useRecoilValue(networkNameState)
  let token = loopToken.mainnet.token
  if (networkName !== "mainnet") token = loopToken.testnet.token

  const footer = (
    <CardMain>
      <div className={styles.grid}>
        <section className={styles.wrapper}>
          {/* <CommunityBalance /> */}
          <TotalStaked />
        </section>
      </div>
    </CardMain>
  )

  return (
    <Card footer={footer}>
      <AssetItem token={token} size="lg" />
    </Card>
  )
}

export default GovInfo

import { useState } from "react"
import { useWallet } from "@terra-money/wallet-provider"
import { FINDER } from "../constants"
import { truncate } from "../libs/text"
import { useAddress, /*useTnsName*/ } from "../hooks"
import Icon from "../components/Icon"
import Tooltip from "../components/Tooltip"
import ExtLink from "../components/ExtLink"
import LinkButton from "../components/LinkButton"
import styles from "./ConnectedInfo.module.scss"

const ConnectedInfo = () => {
  const address = useAddress()
  const { disconnect, network } = useWallet()
  const { copy, copied } = useCopyAddress(address)
  // const { data: name } = useTnsName(address ?? "")
  const name = ""

  return (
    <div className={styles.wallet}>
      <section className={styles.main}>
        <Tooltip content="View on Terra Finder">
          <ExtLink
            href={`${FINDER}/${network.chainID}/account/${address}`}
            className={styles.address}
          >
            {truncate(name || address)}
            <Icon name="External" />
          </ExtLink>
        </Tooltip>

        <button className={styles.copy} onClick={copy}>
          {copied ? "Copied!" : "Copy Address"}
        </button>

        <LinkButton to="/send" size="sm">
          Send
        </LinkButton>
      </section>

      <footer className={styles.footer}>
        <button className={styles.disconnect} onClick={disconnect}>
          Disconnect
        </button>
      </footer>
    </div>
  )
}

export default ConnectedInfo

/* hooks */
const useCopyAddress = (address: string) => {
  const [copied, setCopied] = useState(false)
  const reset = () => setCopied(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    } catch (error) {
      console.error(error)
    }
  }

  return { copy, copied, reset }
}

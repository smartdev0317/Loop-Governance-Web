/* terra:network */
export const FINDER = "https://finder.terra.money"
export const EXTENSION = "https://terra.money/extension"
export const CHROME = "https://google.com/chrome"
export const DOCS = "https://docs.mirror.finance"
export const ICON_URL = "https://whitelist.mirror.finance/images"

/* terra:wasm */
export const WASMQUERY = "WasmContractsContractAddressStore"

/* terra:configs */
export const BLOCK_TIME = 6500 // 6.5s

/* mirror:unit */
export const SMALLEST = 1e6
export const FMT = { HHmm: "EEE, LLL dd, HH:mm aa", MMdd: "LLL dd, yyyy" }

/* mirror:configs */
export const GENESIS = 1607022000000
export const DEFAULT_SLIPPAGE = 0.01
export const MAX_MSG_LENGTH = 4096
export const COMMISSION = 0.003
export const COLLATERAL_RATIO = { DANGER: 0.15, WARNING: 0.3 }

/* network:settings */
export const PRICES_POLLING_INTERVAL = 30000
export const TX_POLLING_INTERVAL = 1000

/* outbound */
export const TRADING_HOURS = {
  NASDAQ: "https://www.nasdaq.com/stock-market-trading-hours-for-nasdaq",
  TSX: "https://www.tsx.com/trading/calendars-and-trading-hours/trading-hours",
}

export const INSURANCE_COVERAGE =
  "https://app.insurace.io/Insurance/Cart?id=63&referrer=1403699302269502414217348026580880651844264120067"

export const loopToken = {
  "mainnet": {
    "symbol": "LOOP",
    "name": "LOOP token",
    "token": "terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4",
    "pair": "terra106a00unep7pvwvcck4wylt4fffjhgkf9a0u6eu",
    "lpToken": "terra1f0nj4lnggvc7r8l3ay5jx7q2dya4gzllez0jw2",
    "status": "LISTED"
  },
  "testnet": {
    "symbol": "LOOP",
    "name": "LOOP token",
    "token": "terra1eux993n3l5f77fy0tdlpjeyj5xfasf0sst830t",
    "pair": "terra1s8u472dzj2ukdk6gl0l4rw2c2aehflppgtmq99",
    "lpToken": "terra172nsh8wugzn8cf8rxu9nf4gr0xg32ey2v3m83y",
    "status": "LISTED"
  }
}

export const loopGovernanceContract = {
  "mainnet": "",
  "testnet": "terra1ne3tpnlfdu8wlarwuvlzklu0esqqr75sderkgk"
}
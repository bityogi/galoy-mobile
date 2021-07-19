import { query_transactions_wallet_transactions } from "../graphql/__generated__/query_transactions"
import { AccountType, AuthenticationScreenPurpose, PinScreenPurpose } from "../utils/enum"

export type RootStackParamList = {
  getStarted: undefined
  debug: undefined
  welcomeFirst: undefined
  authenticationCheck: undefined
  authentication: {
    screenPurpose: AuthenticationScreenPurpose
    isPinEnabled: boolean
  }
  pin: { screenPurpose: PinScreenPurpose }
  Primary: undefined
  earnsSection: undefined
  earnsQuiz: undefined
  settings: undefined
  setUsername: undefined
  language: undefined
  security: {
    mIsBiometricsEnabled: boolean
    mIsPinEnabled: boolean
  }
  sectionCompleted: undefined
  Profile: undefined
  phoneValidation: undefined
  transactionDetail: {
    currency: string | null
    tx: query_transactions_wallet_transactions
  }
  transactionHistory: undefined
  priceDetail: { account: AccountType }
}

export type ContactStackParamList = {
  Contacts: undefined
  contactDetail: undefined
}

export type MoveMoneyStackParamList = {
  moveMoney: undefined
  scanningQRCode: undefined
  sendBitcoin: {
    username: string | null
    payment: string | null
  }
  receiveBitcoin: undefined
  Profile: undefined
  phoneValidation: undefined
  priceDetail: { account: AccountType }
  settings: undefined
}

export type PhoneValidationStackParamList = {
  welcomePhoneInput: undefined
  welcomePhoneValidation: { phone: string }
  authentication: {
    screenPurpose: AuthenticationScreenPurpose
  }
  moveMoney: undefined
}

export type PrimaryStackParamList = {
  MoveMoney: undefined
  Contacts: undefined
  Map: undefined
  Earn: undefined
  sendBitcoin: { username: string }
  phoneValidation: undefined
}

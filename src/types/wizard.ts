export type AccountType = 'personal' | 'business'

export interface WizardData {
  accountType: AccountType
  phone: string
  countryCode: string
  otp: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
}

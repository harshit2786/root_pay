import { useState } from 'react'
import { WizardLayout } from './WizardLayout'
import { AccountTypeStep } from './steps/AccountTypeStep'
import { OTPStep } from './steps/OTPStep'
import { OTPCodeStep } from './steps/OTPCodeStep'
import { NameStep } from './steps/NameStep'
import { PasswordStep } from './steps/PasswordStep'
import { SuccessDialog } from './SuccessDialog'
import type { WizardData } from '@/types/wizard'

const TOTAL_STEPS = 5

export function Wizard() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [data, setData] = useState<WizardData>({
    accountType: 'personal',
    phone: '',
    countryCode: '+1',
    otp: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  })

  const canContinue = (() => {
    switch (step) {
      case 0: return true
      case 1: return data.phone.replace(/\D/g, '').length >= 10
      case 2: return data.otp.length === 4
      case 3: return data.firstName.trim().length > 0 && data.lastName.trim().length > 0
      case 4: return data.password.length >= 6 && data.password === data.confirmPassword
      default: return false
    }
  })()

  const patch = (slice: Partial<WizardData>) => setData((d) => ({ ...d, ...slice }))

  const goBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(0, s - 1))
  }

  const goNext = () => {
    setDirection(1)
    setIsLoading(true)
    const delay = 1000 + Math.random() * 1000
    setTimeout(() => {
      setIsLoading(false)
      if (step < TOTAL_STEPS - 1) {
        setStep((s) => s + 1)
      } else {
        setShowDialog(true)
      }
    }, delay)
  }

  const stepTitles: (React.ReactNode | undefined)[] = [
    <>
      To join us tell us{' '}
      <strong className="font-bold text-[var(--brand-navy)]">what type of account</strong>{' '}
      you are opening
    </>,
    undefined,
    undefined,
    undefined,
    undefined,
  ]

  return (
    <>
      <div className="flex min-h-[500px] flex-col gap-3 lg:min-h-[600px]">
        {step > 0 && (
          <div className="h-1.5 overflow-hidden rounded-full bg-[#E4ECFD]">
            <div
              className="h-full rounded-full bg-[var(--brand-blue)] transition-all duration-500"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        )}

        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-sm lg:px-12">
          <WizardLayout
            title={stepTitles[step]}
            onBack={goBack}
            onContinue={goNext}
            canContinue={canContinue}
            isFirstStep={step === 0}
            isLoading={isLoading}
          >
            <div key={step} className={direction === 1 ? 'animate-step-fwd' : 'animate-step-bwd'}>
            {step === 0 && (
              <AccountTypeStep
                value={data.accountType}
                onChange={(accountType) => patch({ accountType })}
              />
            )}
            {step === 1 && (
              <OTPStep
                phone={data.phone}
                countryCode={data.countryCode}
                onPhoneChange={(phone) => patch({ phone })}
                onCountryCodeChange={(countryCode) => patch({ countryCode })}
              />
            )}
            {step === 2 && (
              <OTPCodeStep
                value={data.otp}
                onChange={(otp) => patch({ otp })}
              />
            )}
            {step === 3 && (
              <NameStep
                firstName={data.firstName}
                lastName={data.lastName}
                onFirstNameChange={(firstName) => patch({ firstName })}
                onLastNameChange={(lastName) => patch({ lastName })}
              />
            )}
            {step === 4 && (
              <PasswordStep
                password={data.password}
                confirmPassword={data.confirmPassword}
                onPasswordChange={(password) => patch({ password })}
                onConfirmPasswordChange={(confirmPassword) => patch({ confirmPassword })}
              />
            )}
            </div>
          </WizardLayout>
        </div>
      </div>

      <SuccessDialog open={showDialog} data={data} />
    </>
  )
}

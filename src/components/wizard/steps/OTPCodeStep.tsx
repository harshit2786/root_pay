import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

interface OTPCodeStepProps {
  value: string
  onChange: (value: string) => void
}

export function OTPCodeStep({ value, onChange }: OTPCodeStepProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold text-[var(--brand-navy)]">OTP Verification</h2>

      <div className="flex flex-col gap-5">
        <p className="text-sm text-gray-400">An OTP has been sent to your mobile number</p>

        <InputOTP maxLength={4} value={value} onChange={onChange} autoFocus>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>

        <p className="text-right text-sm text-gray-500">
          Did not receive OTP?{' '}
          <button
            type="button"
            className="font-semibold text-[var(--brand-blue)] hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface PasswordStepProps {
  password: string
  confirmPassword: string
  onPasswordChange: (v: string) => void
  onConfirmPasswordChange: (v: string) => void
}

function PasswordInput({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <Input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pr-12"
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShow((s) => !s)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--brand-blue)]"
      >
        {show ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
      </button>
    </div>
  )
}

export function PasswordStep({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
}: PasswordStepProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-[var(--brand-navy)]">
        Create Password for your account
      </h2>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-500">Enter new password</label>
          <PasswordInput
            value={password}
            onChange={onPasswordChange}
            placeholder="Enter new password"
          />
          <p className="text-xs text-gray-400">Must be atleast 6 characters</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-500">Confirm password</label>
          <PasswordInput
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            placeholder="Confirm password"
          />
          <p className="text-xs text-gray-400">Both passwords must match</p>
        </div>
      </div>
    </div>
  )
}

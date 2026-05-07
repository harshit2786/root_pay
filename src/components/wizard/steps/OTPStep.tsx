import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const COUNTRY_CODES = [
  { code: '+1', flag: '🇺🇸', label: 'US' },
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+91', flag: '🇮🇳', label: 'IN' },
  { code: '+61', flag: '🇦🇺', label: 'AU' },
]

interface OTPStepProps {
  phone: string
  countryCode: string
  onPhoneChange: (phone: string) => void
  onCountryCodeChange: (code: string) => void
}

export function OTPStep({
  phone,
  countryCode,
  onPhoneChange,
  onCountryCodeChange,
}: OTPStepProps) {
  const selected = COUNTRY_CODES.find((c) => c.code === countryCode) ?? COUNTRY_CODES[0]

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-[var(--brand-navy)]">OTP Verification</h2>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-500">
          Mobile Number<span className="text-red-500">*</span>
        </label>

        <div className="flex gap-3">
          <Select value={countryCode} onValueChange={onCountryCodeChange}>
            <SelectTrigger className="w-20 shrink-0">
              <SelectValue>
                <span className="flex items-center gap-1.5">
                  <span>{selected.flag}</span>
                  <span className="font-medium">{selected.code}</span>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {COUNTRY_CODES.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  <span className="flex items-center gap-2">
                    <span>{c.flag}</span>
                    <span>{c.code}</span>
                    <span className="text-gray-400">{c.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="8343989239"
          />
        </div>
      </div>
    </div>
  )
}

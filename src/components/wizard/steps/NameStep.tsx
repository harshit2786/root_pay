import { Input } from '@/components/ui/input'

interface NameStepProps {
  firstName: string
  lastName: string
  onFirstNameChange: (v: string) => void
  onLastNameChange: (v: string) => void
}

export function NameStep({ firstName, lastName, onFirstNameChange, onLastNameChange }: NameStepProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-[var(--brand-navy)]">What is your name?</h2>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-500">First Name</label>
          <Input
            value={firstName}
            onChange={(e) => onFirstNameChange(e.target.value)}
            placeholder="Oliver"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-500">Last Name</label>
          <Input
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
            placeholder="Last Name"
          />
        </div>
      </div>
    </div>
  )
}

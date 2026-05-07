import { User, Briefcase, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AccountType } from '@/types/wizard'

interface AccountTypeCardProps {
  icon: React.ReactNode
  label: string
  selected: boolean
  onClick: () => void
}

function AccountTypeCard({ icon, label, selected, onClick }: AccountTypeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-4 rounded-xl border-2 px-5 py-4 text-left transition-all duration-150 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2',
        selected
          ? 'border-[var(--brand-blue)] bg-white'
          : 'border-gray-200 bg-white hover:border-[var(--brand-blue)]/40'
      )}
    >
      <span
        className={cn(
          'text-xl transition-colors',
          selected ? 'text-[var(--brand-blue)]' : 'text-gray-400'
        )}
      >
        {icon}
      </span>

      <span
        className={cn(
          'flex-1 text-sm font-semibold transition-colors',
          selected ? 'text-[var(--brand-blue)]' : 'text-[var(--brand-navy)]'
        )}
      >
        {label}
      </span>

      <span
        className={cn(
          'flex size-6 shrink-0 items-center justify-center rounded-full transition-all duration-150',
          selected ? 'bg-[var(--brand-blue)] scale-100 opacity-100' : 'scale-0 opacity-0'
        )}
        aria-hidden="true"
      >
        <Check className="size-3.5 stroke-[3] text-white" />
      </span>
    </button>
  )
}

interface AccountTypeStepProps {
  value: AccountType
  onChange: (value: AccountType) => void
}

export function AccountTypeStep({ value, onChange }: AccountTypeStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <AccountTypeCard
        icon={<User className="size-5" />}
        label="Personal"
        selected={value === 'personal'}
        onClick={() => onChange('personal')}
      />
      <AccountTypeCard
        icon={<Briefcase className="size-5" />}
        label="Business"
        selected={value === 'business'}
        onClick={() => onChange('business')}
      />
    </div>
  )
}

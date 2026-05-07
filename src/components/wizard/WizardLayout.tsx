import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WizardLayoutProps {
  title?: React.ReactNode
  onBack: () => void
  onContinue: () => void
  canContinue?: boolean
  isFirstStep?: boolean
  isLoading?: boolean
  children: React.ReactNode
}

export function WizardLayout({
  title,
  onBack,
  onContinue,
  canContinue = true,
  isFirstStep = false,
  isLoading = false,
  children,
}: WizardLayoutProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 px-4 py-6 md:px-6 lg:px-10 lg:py-8">
        {title && (
          <h2 className="mb-8 text-sm leading-relaxed text-gray-600">{title}</h2>
        )}
        {children}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-6 lg:px-10 lg:py-6">
        <Button
          variant="secondary"
          onClick={onBack}
          disabled={isFirstStep || isLoading}
          className="min-w-0 flex-1 sm:flex-none sm:min-w-44"
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={onContinue}
          disabled={!canContinue || isLoading}
          className="min-w-0 flex-1 sm:flex-none sm:min-w-44"
        >
          {isLoading ? <Loader2 className="size-5 animate-spin" /> : 'Continue'}
        </Button>
      </div>
    </div>
  )
}

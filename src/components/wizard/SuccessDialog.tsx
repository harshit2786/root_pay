import { Check, ShieldCheck } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import type { WizardData } from '@/types/wizard'

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-semibold text-[var(--brand-navy)]">{value}</span>
    </div>
  )
}

interface SuccessDialogProps {
  open: boolean
  data: WizardData
}

export function SuccessDialog({ open, data }: SuccessDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent
        showCloseButton={false}
        className="flex max-w-md flex-col gap-5 rounded-2xl p-8"
      >
        {/* Check circle */}
        <div className="flex justify-center">
          <div className="flex size-14 items-center justify-center rounded-full border-2 border-[var(--brand-blue)]">
            <Check className="size-7 stroke-[2.5] text-[var(--brand-blue)]" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-bold text-[var(--brand-navy)]">You're all set!</h2>
          <p className="text-sm text-gray-500">Here's a quick summary of your account details</p>
        </div>

        {/* Summary */}
        <div className="space-y-3 rounded-xl bg-[#F6F7F9] px-5 py-4">
          <SummaryRow
            label="Account Type"
            value={data.accountType === 'personal' ? 'Personal' : 'Business'}
          />
          <SummaryRow label="Name" value={`${data.firstName} ${data.lastName}`} />
          <SummaryRow label="Mobile Number" value={`${data.countryCode} ${data.phone}`} />
        </div>

        {/* Security badge */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck className="size-4 text-[var(--brand-blue)]" />
          Your account is secured with bank-grade security
        </div>

        {/* CTA */}
        <Button variant="primary" className="w-full">
          Go To Dashboard
        </Button>
      </DialogContent>
    </Dialog>
  )
}

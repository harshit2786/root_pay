import illustration from '@/assets/illustration.png'
import illustration2x from '@/assets/illustration@2x.png'
import bgImage from '@/assets/background-image.svg'
import { Wizard } from '@/components/wizard/Wizard'

export default function App() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-6 lg:px-10 lg:py-2"
      style={{
        backgroundColor: 'var(--page-bg)',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex w-full max-w-6xl flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-2">

        {/* Mobile header — only visible below lg */}
        <div className="animate-fade-up space-y-2 lg:hidden">
          <p className="text-xs text-gray-400">Let's get started</p>
          <h1
            className="text-2xl font-extrabold leading-tight"
            style={{ color: 'var(--brand-navy)' }}
          >
            Create your account
          </h1>
          <p className="text-xs text-gray-400">Follow the steps to create your account</p>
        </div>

        {/* Left panel — hidden on mobile, shown lg+ */}
        <div className="hidden lg:flex lg:w-[50%] lg:shrink-0 lg:animate-fade-up lg:flex-col lg:justify-between lg:py-2 lg:pl-10">
          <div className="space-y-3">
            <p className="text-sm text-gray-400">Let's get started</p>
            <h1
              className="text-4xl font-extrabold leading-tight"
              style={{ color: 'var(--brand-navy)' }}
            >
              Create your account
            </h1>
            <p className="text-sm text-gray-400">Follow the steps to create your account</p>
          </div>

          <img
            src={illustration}
            srcSet={`${illustration} 1x, ${illustration2x} 2x`}
            alt=""
            className="w-full"
          />
        </div>

        {/* Right panel — wizard */}
        <div className="animate-fade-up-delay w-full lg:flex-1">
          <Wizard />
        </div>

      </div>
    </div>
  )
}

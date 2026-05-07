# Root Pay — Sign-up Wizard

A pixel-accurate, responsive implementation of a multi-step sign-up flow built from a Figma design.

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

React 19 · TypeScript 6 · Vite 8 · Tailwind CSS 4 · shadcn/ui · Radix UI · input-otp · CVA · lucide-react

## Project Structure

```
src/
├── components/
│   ├── ui/                   # Modified shadcn base components
│   └── wizard/
│       ├── Wizard.tsx        # State orchestrator + step router
│       ├── WizardLayout.tsx  # Back/Continue button shell
│       ├── SuccessDialog.tsx # Final success modal
│       └── steps/            # One file per wizard step
├── types/wizard.ts           # Shared WizardData interface
└── index.css                 # Brand CSS variables + animation keyframes
```

## Architecture Decisions

**No external state manager** — all form data lives in a single `useState<WizardData>` in `Wizard.tsx` with a `patch()` helper for partial updates. The form is small and linear; a state library would be overkill.

**Inline validation per step** — `canContinue` is a simple `switch` expression in `Wizard.tsx`. The Continue button stays disabled until the rule passes; no validation library needed.

**shadcn modified at source** — base components in `src/components/ui/` are edited directly rather than wrapped, keeping import paths clean. Future shadcn upgrades require a manual merge.

**CVA for button variants** — `primary` and `secondary` are named CVA variants so callers just pass `variant="primary"`.

**Tailwind v4 CSS-first config** — brand tokens (`--brand-navy`, `--brand-blue`, `--page-bg`) live as CSS custom properties in `index.css` and are referenced throughout via `var(--brand-*)`.

## Enhancements

- **Directional animations** — steps slide in from the correct side based on a `direction` state set before the async delay
- **Simulated async loading** — Continue shows a spinner for 1–2 s to simulate a real API call
- **Retina illustration** — served at 1x and 2x via `srcSet`
- **OTP autoFocus** — keyboard activates immediately on entering the OTP step
- **Password visibility toggle** — independent show/hide per field, local state only
- **Background SVG** — imported via Vite and applied as `backgroundImage`, out of the DOM

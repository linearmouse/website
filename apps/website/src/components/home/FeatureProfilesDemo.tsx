type Indicator = {
  label: string
  value: string
  note: string
  tagWidth: string
  labelClassName: string
  linePath: string
}

const indicators: readonly Indicator[] = [
  {
    label: 'Device',
    value: 'MX Master 3',
    note: 'Current mouse or trackpad',
    tagWidth: 'w-[168px]',
    labelClassName: 'left-[16%] top-[10%] items-start text-left',
    linePath: 'M148 82 L148 116 L240 116 L240 218',
  },
  {
    label: 'App',
    value: 'Final Cut Pro',
    note: 'Frontmost app',
    tagWidth: 'w-[152px]',
    labelClassName: 'left-1/2 top-[6%] -translate-x-1/2 items-center text-center',
    linePath: 'M76 86 L76 218',
  },
  {
    label: 'Display',
    value: 'Studio Display',
    note: 'Current display',
    tagWidth: 'w-[164px]',
    labelClassName: 'right-[10%] top-[10%] items-end text-right',
    linePath: 'M16 82 L16 116 L-76 116 L-76 218',
  },
] as const

const sidebarItems = ['Pointer', 'Scrolling', 'Buttons', 'General'] as const

export function FeatureProfilesDemo() {
  return (
    <div className="overflow-x-auto pb-2">
      <div
        role="img"
        aria-label="A zoomed-in crop of the LinearMouse settings window, highlighting the device, app, and display indicators with explanatory callouts above them."
        className="mx-auto aspect-[1.92/1] w-full min-w-[760px] max-w-[980px] overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_20%_18%,color-mix(in_oklab,var(--brand)_14%,white)_0%,transparent_30%),radial-gradient(circle_at_78%_18%,color-mix(in_oklab,var(--brand)_12%,white)_0%,transparent_28%),linear-gradient(180deg,color-mix(in_oklab,var(--brand)_62%,white)_0%,color-mix(in_oklab,var(--brand)_48%,white)_100%)] shadow-[0_42px_110px_-58px_rgba(15,32,58,0.62)]"
      >
        <div className="relative h-full">
          <div className="absolute inset-x-[5.5%] top-[7%] flex h-[24%] items-start justify-between">
            {indicators.map((indicator) => (
              <IndicatorCallout key={indicator.label} indicator={indicator} />
            ))}
          </div>

          <div className="absolute left-[9%] top-[29%] h-[76%] w-[90%] overflow-hidden rounded-tl-[22px] rounded-tr-[22px] border border-[color:color-mix(in_oklab,var(--line)_72%,transparent)] bg-[color:color-mix(in_oklab,var(--surface)_95%,var(--canvas))] shadow-[0_34px_72px_-46px_rgba(16,24,40,0.38)]">
            <div className="flex h-[12.5%] items-center gap-[10px] border-b border-[color:color-mix(in_oklab,var(--line)_72%,transparent)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface)_92%,white)_0%,color-mix(in_oklab,var(--surface)_82%,var(--canvas))_100%)] px-[16px]">
              <span className="size-[11px] rounded-full border border-black/10 bg-[#ff5f57]" />
              <span className="size-[11px] rounded-full border border-black/10 bg-[#febc2e]" />
              <span className="size-[11px] rounded-full border border-black/10 bg-[#28c840]" />
            </div>

            <div className="grid h-[87.5%] grid-cols-[28%_1fr]">
              <aside className="border-r border-[color:color-mix(in_oklab,var(--line)_70%,transparent)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--brand)_12%,var(--surface))_0%,color-mix(in_oklab,var(--brand)_8%,var(--surface))_100%)] px-[10px] pt-[14px]">
                <div className="grid gap-[6px]">
                  {sidebarItems.map((item) => (
                    <SidebarItem key={item} label={item} active={item === 'Pointer'} />
                  ))}
                </div>
              </aside>

              <section className="relative bg-[color:color-mix(in_oklab,var(--canvas)_96%,var(--surface))] px-[20px] pt-[14px]">
                <div className="text-[13px] text-[color:color-mix(in_oklab,var(--text)_52%,var(--canvas))]">
                  USB Receiver
                </div>

                <div className="mt-[14px] flex items-center gap-[12px]">
                  {indicators.map((indicator) => (
                    <IndicatorButton key={indicator.label} value={indicator.value} />
                  ))}
                </div>

                <div className="mt-[22px] rounded-[12px] border border-[color:color-mix(in_oklab,var(--line)_70%,transparent)] bg-[color:color-mix(in_oklab,var(--surface)_88%,var(--canvas))] px-[18px] py-[18px]">
                  <div className="text-[14px] font-semibold text-[color:color-mix(in_oklab,var(--text)_88%,var(--canvas))]">
                    Disable pointer acceleration
                  </div>
                </div>

                <div className="mt-[12px] rounded-[12px] border border-[color:color-mix(in_oklab,var(--line)_66%,transparent)] bg-[color:color-mix(in_oklab,var(--surface)_90%,var(--canvas))] px-[18px] py-[18px] opacity-88">
                  <div className="text-[14px] font-semibold text-[color:color-mix(in_oklab,var(--text)_84%,var(--canvas))]">
                    Convert pointer movement to scrolling
                  </div>
                  <div className="mt-[8px] max-w-[36ch] text-[13px] leading-[1.45] text-[color:color-mix(in_oklab,var(--text)_56%,var(--canvas))]">
                    Scroll settings apply to the converted event.
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,transparent_0%,color-mix(in_oklab,var(--surface)_94%,var(--canvas))_76%,color-mix(in_oklab,var(--surface)_98%,var(--canvas))_100%)]" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IndicatorCallout({ indicator }: { indicator: Indicator }) {
  return (
    <div className={`absolute flex ${indicator.labelClassName}`}>
      <div className={`flex ${indicator.tagWidth} flex-col gap-[8px]`}>
        <div className="inline-flex w-fit rounded-full border border-white/35 bg-white/18 px-[10px] py-[4px] text-[10px] font-semibold uppercase tracking-[0.08em] text-white/88 backdrop-blur-[8px]">
          {indicator.label}
        </div>
        <div className="max-w-[18ch] text-[13px] font-medium leading-[1.35] text-white/92">
          {indicator.note}
        </div>
      </div>

      <svg className="pointer-events-none mt-[6px] h-[220px] w-[164px] overflow-visible" viewBox="0 0 164 220" aria-hidden="true">
        <path
          d={indicator.linePath}
          fill="none"
          stroke="rgba(255,255,255,0.74)"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function SidebarItem({
  label,
  active,
}: {
  label: string
  active: boolean
}) {
  return (
    <div
      className={`flex min-h-[58px] items-center gap-[12px] rounded-[10px] px-[16px] text-[18px] font-semibold ${
        active
          ? 'bg-[color:color-mix(in_oklab,var(--brand)_74%,white)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'
          : 'text-[color:color-mix(in_oklab,var(--text)_82%,var(--canvas))]'
      }`}
    >
      <span
        className={`size-[22px] rounded-full border-2 ${
          active
            ? 'border-white/80 bg-white/10'
            : 'border-[color:color-mix(in_oklab,var(--brand)_44%,var(--canvas))] bg-transparent'
        }`}
      />
      <span>{label}</span>
    </div>
  )
}

function IndicatorButton({ value }: { value: string }) {
  return (
    <button
      type="button"
      className="inline-flex max-w-[180px] items-center rounded-[5px] bg-[color:color-mix(in_oklab,var(--text)_8%,var(--surface))] px-[12px] py-[5px] text-[14px] font-medium text-[color:color-mix(in_oklab,var(--text)_86%,var(--canvas))] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
    >
      <span className="truncate">{value}</span>
    </button>
  )
}

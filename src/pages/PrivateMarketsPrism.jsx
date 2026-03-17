import React from 'react';

export default function PrivateMarketsPrism() {
  return (
    <div>

      {/* §1 — HERO */}
      <section className="bg-[#FAFAF8] py-32 md:py-40">
        <div className="max-w-6xl mx-auto pl-8 md:pl-[120px] pr-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2d6a4f] mb-6">
            Private Markets
          </p>
          <h1 className="font-serif text-[40px] md:text-[64px] text-[#1A1A1A] leading-[1.08] font-bold max-w-2xl" style={{letterSpacing: '-0.5px'}}>
            Private Markets.<br/>Without the Private Bank.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg">
            One allocation. Fully deployed. Access institutional private markets without complexity.
          </p>
          <button className="mt-10 border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3 text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 rounded-sm tracking-wide">
            Request Access
          </button>
        </div>
      </section>

      {/* §2 — ONE ALLOCATION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Left: text */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                One Allocation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-4">
                A single investment across the four pillars of private markets. We handle the manager selection, rebalancing, and administration.
              </p>
              <p className="text-sm font-semibold text-[#2d6a4f] tracking-wide mt-8">
                No capital calls. No fragmented commitments.
              </p>
            </div>

            {/* Right: 2×2 asset class grid */}
            <div className="grid grid-cols-2 gap-4">
              {['Private Equity', 'Infrastructure', 'Private Credit', 'Real Assets'].map((label) => (
                <div
                  key={label}
                  className="border border-[#2d6a4f]/20 rounded-lg p-8 flex items-center justify-center text-center hover:border-[#2d6a4f]/50 hover:bg-[#2d6a4f]/[0.02] transition-colors"
                >
                  <span className="font-serif text-[#2d6a4f] font-semibold text-base leading-snug">{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* §3 — ACTIVE ALLOCATION ENGINE */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2d6a4f] mb-6">
            Not a Fund-of-Funds
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-tight mb-8" style={{letterSpacing: '-0.5px'}}>
            An Active Allocation Engine
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            We select a small number of tier-1 managers — then dynamically rebalance based on opportunity and relative value. Capital doesn't sit idle in a static mix. It moves.
          </p>
        </div>
      </section>

      {/* §4 — FULLY DEPLOYED */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Left: text */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                Fully Deployed
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                Capital is invested immediately at NAV. No waiting. No drag.
              </p>
              <ul className="space-y-3">
                {['No idle cash', 'No J-curve drag', 'No deployment waiting period'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CSS visual comparison */}
            <div className="space-y-6">
              {/* Traditional (crossed out) */}
              <div className="p-6 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Traditional</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {['Capital Call', 'Capital Call', 'Capital Call'].map((label, i) => (
                    <React.Fragment key={i}>
                      <div className="flex items-center gap-1">
                        <span className="text-xs px-3 py-1.5 rounded bg-gray-200 text-gray-400 line-through">{label}</span>
                      </div>
                      {i < 2 && <span className="text-gray-300 text-xs">→</span>}
                    </React.Fragment>
                  ))}
                  <span className="text-gray-300 text-xs">→</span>
                  <span className="text-xs px-3 py-1.5 rounded bg-gray-200 text-gray-400">Invested<br/><span className="text-[10px]">(years later)</span></span>
                </div>
              </div>

              {/* ANA */}
              <div className="p-6 rounded-lg bg-[#2d6a4f]/5 border border-[#2d6a4f]/15">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#2d6a4f] mb-4">ANA</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm px-4 py-2 rounded bg-[#2d6a4f] text-white font-medium">Day 1</span>
                  <span className="text-[#2d6a4f] text-sm">→</span>
                  <span className="text-sm px-4 py-2 rounded bg-[#2d6a4f]/10 text-[#2d6a4f] font-semibold">Invested at NAV ✓</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* §5 — STRUCTURE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12">
            Designed for Real Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-serif text-xl font-bold text-[#2d6a4f] mb-3">Open-ended</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">Monthly subscriptions. No forced lock-in. Invest and add to your position on your schedule.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-serif text-xl font-bold text-[#2d6a4f] mb-3">Semi-liquid</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">Quarterly redemptions, subject to soft lock-ups. Liquidity that reflects the nature of the underlying assets — not a rigid fund structure.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-serif text-xl font-bold text-[#2d6a4f] mb-3">Built for long-term capital</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">Evergreen by design. No hard lock-ups, no vintage cliffs. Compound continuously across market cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* §6 — TRANSPARENCY */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
            Transparent by Design
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Clean share classes. No retrocessions. Full alignment with investors.
            A single trade with a Swiss ISIN — no fragmented subscriptions, no repeated KYC/AML, no administrative drag.
          </p>
        </div>
      </section>

      {/* §7 — ILLUSTRATIVE PERFORMANCE */}
      <section className="py-24 md:py-32 bg-[#2d6a4f]/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2d6a4f] mb-8">
            Illustrative Outcome
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-8">
            <div>
              <p className="font-serif text-5xl md:text-7xl font-bold text-[#1A1A1A]">~10.2%</p>
              <p className="text-sm text-gray-500 mt-2 font-light">gross return</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-gray-300" />
            <div>
              <p className="font-serif text-5xl md:text-7xl font-bold text-[#1A1A1A]">~9.2%</p>
              <p className="text-sm text-gray-500 mt-2 font-light">net return</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-light mb-6">
            6-month period · ~19% annualised equivalent
          </p>
          <p className="text-xs text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Past performance is not indicative of future results. These figures are illustrative only and do not constitute investment advice or a guarantee of returns.
          </p>
        </div>
      </section>

      {/* §8 — CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-10">
            Ready to invest in private markets differently?
          </h2>
          <button className="bg-[#1F4D3A] hover:bg-[#183d2e] text-white px-10 py-4 text-sm font-medium transition-colors duration-200 rounded-sm tracking-wide">
            Request Access
          </button>
        </div>
      </section>

    </div>
  );
}

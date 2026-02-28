import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PortfolioModal from '../components/PortfolioModal';

export default function PrivateMarketsPrism() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const portfolios = [
    {
      id: 1,
      name: "Private Market Prism",
      description: "Our flagship offering — a comprehensive, dynamically managed portfolio across all private markets strategies, providing institutional-grade exposure through a single allocation.",
      return: "12-14",
      managers: ["Partners Group", "KKR", "Apollo", "EQT", "Blackstone"],
      focus: ["Diversified", "Multi-Strategy", "Actively Managed"],
      isFlagship: true
    },
    {
      id: 3,
      name: "Private Infrastructure Prism",
      description: (<><strong>Built for resilience. Designed for growth.</strong> Value-add and core infrastructure aligned with structural megatrends — energy transition, digitalisation, and mobility, delivering resilient, inflation-linked cash flows across cycles.</>),
      return: "10-11",
      managers: ["EQT", "Partners Group", "Macquarie", "Ares", "KKR", "Hamilton Lane"],
      focus: ["Core Infrastructure", "ESG-aligned", "Long-term Hold"]
    },
    {
      id: 2,
      name: "Private Equity Prism",
      description: "Exposure to high-growth PE opportunities with leading managers across developed markets and select emerging economies.",
      return: "13-15",
      managers: ["Partners Group", "KKR", "Apollo"],
      focus: ["Growth PE", "Developed Markets", "Tech & Healthcare"],
      comingSoon: true
    },
    {
      id: 4,
      name: "Private Credit Prism",
      description: "Direct lending and secondary fund positions providing enhanced returns with lower volatility through portfolio diversification.",
      return: "11-13",
      managers: ["Ares", "Lexington Partners", "Partners Group"],
      focus: ["Direct Lending", "Secondaries", "Risk Management"],
      comingSoon: true
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://media.istockphoto.com/id/1298569563/video/car-driving-along-a-winding-mountain-pass-alongside-a-river-in-green-conifer-forests-in-a.mp4?s=mp4-640x640-is&k=20&c=xPiVTlVH6z5gLqPjE9F1hDrYv_wq_PjcfpUsl_75sZc="
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.2) 100%)'}} />
        <div className="relative z-10 w-full" style={{paddingTop: '140px', paddingLeft: '120px'}}>
          <div style={{maxWidth: '760px'}}>
            <h1 className="font-serif text-white" style={{fontSize: '60px', lineHeight: '1.10', fontWeight: '600', letterSpacing: '-0.5px'}}>
              Our Portfolios
            </h1>
            <p className="font-serif italic text-white" style={{fontSize: '30px', lineHeight: '1.2', fontWeight: '500', letterSpacing: '0.8px', color: 'rgba(255,255,255,0.95)', marginTop: '28px', marginBottom: '28px'}}>
              Evergreen by design
            </p>
            <p style={{fontSize: '21px', lineHeight: '1.6', fontWeight: '500', maxWidth: '560px', color: 'rgba(255,255,255,0.92)'}}>
              Open-ended. Semi-liquid. No capital calls. No hard lock-ups. Invested at NAV from day one.
            </p>
          </div>
        </div>
      </section>

      {/* One Investment Section */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-16">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-4xl font-serif text-[#2d6a4f]">
                  <span className="font-bold">One Investment</span><br/><span className="italic">A World Class Portfolio</span>
                </h2>
                <div className="w-16 h-px bg-[#C0C0C0] mt-4"></div>
              </div>
              <p className="text-lg text-black leading-relaxed font-light">
                Navigating private markets requires time, data, and professional perspective. Instead of selecting individual funds and managing multiple commitments, access a curated portfolio of leading global managers through a single allocation.
              </p>
            </div>
            <div className="w-96 flex-shrink-0 rounded-lg overflow-hidden" style={{height: '320px', position: 'relative'}}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="https://media.istockphoto.com/id/1558076043/video/4k-abstract-particle-wave-bokeh-background-blue-beautiful-glitter-loop-stock-video.mp4?s=mp4-640x640-is&k=20&c=q-j_RZkUYSk5Uffx_l-k65ZyWgKVXHkAkQ1DAqcB9Nw="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-[#2d6a4f]">
            <span className="font-bold">Institutional Investing</span><br/><span className="italic">Re-Invented</span>
          </h2>
          <div className="w-16 h-px bg-[#C0C0C0] mt-4 mb-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-[#2d6a4f]/10 to-[#2d6a4f]/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#2d6a4f]/20 mb-4">→</div>
                  <p className="text-[#2d6a4f] font-light">One clean allocation flowing into a diversified evergreen portfolio</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="pb-6 border-b border-[#C0C0C0]/30">
                <h3 className="text-lg font-bold text-[#2d6a4f] mb-2">One Simple Allocation</h3>
                <p className="text-black leading-relaxed font-light">
                  A single trade with a Swiss ISIN — no fragmented subscriptions, no repeated KYC/AML, no administrative drag.
                </p>
              </div>
              <div className="pb-6 border-b border-[#C0C0C0]/30">
                <h3 className="text-lg font-bold text-[#2d6a4f] mb-2">Fully Invested from Day One</h3>
                <p className="text-black leading-relaxed font-light">
                  No capital calls. Capital is deployed immediately at NAV into a diversified private-markets portfolio.
                </p>
              </div>
              <div className="pb-6 border-b border-[#C0C0C0]/30">
                <h3 className="text-lg font-bold text-[#2d6a4f] mb-2">Liquidity That Fits Real Life</h3>
                <p className="text-black leading-relaxed font-light">
                  Open-ended and semi-liquid, with monthly subscriptions and quarterly redemptions, subject to soft lock-ups.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2d6a4f] mb-2">Transparent Fees</h3>
                <p className="text-black leading-relaxed font-light">
                  Direct access to institutional-style clean share classes — no hidden layers, no retrocessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Prism Philosophy */}
      <section className="py-16 bg-gradient-to-br from-[#2d6a4f]/5 via-white to-[#2d6a4f]/5">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-[#2d6a4f]">
            <span className="font-bold">Our Prism Philosophy</span><br/><span className="italic">From Broad Sourcing to Disciplined Selection</span>
          </h2>
          <div className="w-16 h-px bg-[#C0C0C0] mt-4 mb-8"></div>
          <div className="max-w-3xl space-y-4">
            <p className="text-lg text-black leading-relaxed font-light">
              We continuously evaluate the top-tier private markets landscape via AW Research Hub, selecting investment components and dynamically rebalancing over time to reflect changing market conditions and relative value.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-[#2d6a4f]">
            <span className="font-bold">Curated Exposure to World-Class Managers</span><br/><span className="italic">With Complementary Strategies</span>
          </h2>
          <div className="w-16 h-px bg-[#C0C0C0] mt-4 mb-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {portfolios.map((portfolio) => (
              <button
                key={portfolio.id}
                onClick={() => setSelectedPortfolio(portfolio)}
                className="group text-left bg-gradient-to-br from-[#2d6a4f]/5 via-white to-[#2d6a4f]/5 shadow-sm hover:shadow-xl hover:scale-105 p-6 rounded-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-serif font-bold text-[#2d6a4f] group-hover:text-[#1a5742] transition-colors">
                    {portfolio.name}
                  </h3>
                </div>
                <p className="text-black leading-relaxed font-light mb-6">
                  {portfolio.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#2d6a4f] font-medium">Target Return</p>
                    <p className="text-xl font-bold text-[#2d6a4f]">{portfolio.return}%</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-[#2d6a4f]" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-serif text-[#2d6a4f]">
            <span className="font-bold">Designed for Smart Allocators</span><br/><span className="italic">Building Wealth Beyond Market Cycles</span>
          </h2>
          <div className="w-16 h-px bg-[#C0C0C0] mt-4 mb-12 mx-auto"></div>
          <div className="flex items-center justify-center gap-12 max-w-2xl mx-auto">
            <p className="text-lg text-black leading-relaxed font-light flex-1">
              If you value discipline over noise, simplicity over complexity, and evolution over stagnation.
            </p>
            <button className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white px-6 py-3 text-sm rounded-sm whitespace-nowrap">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <PortfolioModal 
        isOpen={!!selectedPortfolio} 
        onClose={() => setSelectedPortfolio(null)} 
        portfolio={selectedPortfolio} 
      />
    </div>
  );
}
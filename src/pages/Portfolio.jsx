import React, { useState } from 'react';
import PortfolioModal from '@/components/PortfolioModal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const portfolios = [
    {
      name: 'Global Equity Rotation',
      description: 'Dynamic allocation across global equity markets, rotating into the highest-conviction opportunities.',
      targetReturn: '12–16% p.a.',
      available: true,
    },
    {
      name: 'Systematic Multi-Factor',
      description: 'A rules-based approach capturing value, momentum, and quality premia across equity markets.',
      targetReturn: '10–14% p.a.',
      available: true,
    },
    {
      name: 'Long/Short Equity',
      description: 'Hedged exposure to public equities, designed to generate alpha through stock selection.',
      targetReturn: '8–12% p.a.',
      available: false,
    },
  ];

  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden" style={{minHeight: '70vh', display: 'flex', flexDirection: 'column'}}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://media.istockphoto.com/id/1208308306/video/stock-market-technological-background-candle-charts-graph-and-diagram.mp4?s=mp4-640x640-is&k=20&c=QXkMFH4KgLMI0hGOMlU2fVEbGLXfEYhlDVQq4HCvBcA="
          onError={e => {
            e.target.src = "https://media.istockphoto.com/id/1160426889/video/stock-market-exchange-data-business-finance-background.mp4?s=mp4-640x640-is&k=20&c=_EEpCbkc1u7IhHUSmwSGxiDENNnvEhqLPOAhQNNxZMk=";
          }}
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)'}} />

        <div className="relative z-10 flex-1 flex items-center" style={{paddingTop: '80px'}}>
          <div className="pl-6 md:pl-[120px]" style={{maxWidth: '720px'}}>
            <p className="text-white uppercase tracking-widest text-sm font-medium mb-4" style={{opacity: 0.75}}>
              Public Markets Prism
            </p>
            <h1 className="font-serif text-white text-[32px] md:text-[54px]" style={{lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.5px'}}>
              Dynamic Equity<br/>Capital Rotation
            </h1>
            <p className="text-white mt-6" style={{fontSize: '19px', lineHeight: '1.65', fontWeight: '400', opacity: 0.88, maxWidth: '520px'}}>
              A curated portfolio of the world's leading public equity managers — systematically rotated to capture the strongest opportunities across market cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-[#2d6a4f] mb-2">
            <span className="font-bold">Our Strategies</span>
          </h2>
          <div className="w-16 h-px bg-[#C0C0C0] mt-4 mb-14"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolios.map((portfolio, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-8 flex flex-col hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => { setSelectedPortfolio(portfolio); setShowModal(true); }}
              >
                <h3 className="text-xl font-serif font-semibold text-black mb-3">{portfolio.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{portfolio.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#2d6a4f]">{portfolio.targetReturn}</span>
                  <span className={`text-xs px-3 py-1 rounded-full ${portfolio.available ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {portfolio.available ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div>
            <h2 className="text-3xl font-serif text-[#2d6a4f] font-bold mb-2">Ready to invest?</h2>
            <p className="text-gray-600">Schedule a call to learn more about our public markets strategies.</p>
          </div>
          <Button className="bg-[#1F4D3A] hover:bg-[#183d2e] text-white px-6 py-3 rounded-md whitespace-nowrap flex items-center gap-2">
            Schedule a Call <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <PortfolioModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        portfolio={selectedPortfolio}
      />
    </div>
  );
}
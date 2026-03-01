import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import PortfolioModal from '@/components/PortfolioModal';

export default function Home() {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  return (
    <div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex flex-col">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://media.istockphoto.com/id/859236328/video/top-view-bicycle-woman-riding-a-bike-on-round-road-in-city-park.mp4?s=mp4-640x640-is&k=20&c=BWqozkifohHtRP3a3JGVPXHRw-fxy9Z_eKZdYW57owc="
        />
        {/* Directional overlay */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)'}} />

        {/* Centered text content */}
        <div className="relative z-10 flex-1 flex items-start" style={{paddingTop: '140px'}}>
          <div className="w-full pl-6 md:pl-[120px]">
            <div style={{maxWidth: '760px'}}>
              <h1 className="font-serif text-white text-[36px] md:text-[60px]" style={{lineHeight: '1.10', fontWeight: '600', letterSpacing: '-0.5px', maxWidth: '760px'}}>
                Global Capital Rotation
              </h1>
              <p className="font-serif italic text-white text-[20px] md:text-[30px]" style={{lineHeight: '1.2', fontWeight: '500', letterSpacing: '0.8px', color: 'rgba(255,255,255,0.95)', marginTop: '28px', marginBottom: '40px'}}>
                Curated with Discipline
              </p>
              <p style={{fontSize: '21px', lineHeight: '1.6', fontWeight: '500', maxWidth: '560px', color: 'rgba(255,255,255,0.92)', marginBottom: '36px'}}>
                Evergreen private markets and dynamic public equity, structured to compound wealth across market cycles.
              </p>
              <Button 
                onClick={() => setShowDisclaimerModal(true)}
                className="bg-[#1F4D3A] hover:bg-[#183d2e] text-white flex items-center gap-2 border-0"
                style={{fontSize: '16px', fontWeight: '500', padding: '14px 28px', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'}}
              >
                Explore Portfolios
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Manager Marquee */}
        <div className="overflow-hidden relative z-10" style={{marginTop: '100px'}}>
          <div style={{width: '80%', margin: '0 auto'}}>
            <div className="flex animate-marquee whitespace-nowrap py-6">
              {['Public Equity', 'Private Equity', 'Private Credit', 'Secondaries', 'Infrastructure', 'Venture', 'Public Equity', 'Private Equity', 'Private Credit', 'Secondaries', 'Infrastructure', 'Venture'].map((item, i, arr) => (
                <span key={i} className="font-bold text-white uppercase mr-16" style={{fontSize: '20px', letterSpacing: '2px', opacity: '0.45'}}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EQT-style intro section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Left: big statement text */}
            <div>
              <p className="text-3xl font-serif text-black leading-snug" style={{fontWeight: '400'}}>
                <span className="font-cursive" style={{fontSize: '1.1em'}}>ANA</span> stewards private wealth across evolving market environments  — dynamically allocating capital to the strongest opportunities in a changing world.
              </p>
            </div>

            {/* Right: 3 linked items */}
            <div className="divide-y divide-gray-200">
              <div className="pb-8">
                <h3 className="text-xl font-semibold text-black mb-3">Capital Allocator Focused on Creating Lasting Value</h3>
                <button className="border border-gray-300 rounded-full px-5 py-1.5 text-sm text-black hover:bg-gray-50 transition-colors">
                  Learn more about us
                </button>
              </div>
              <div className="py-8">
                <h3 className="text-xl font-semibold text-black mb-3">Curated Portfolios Across Private and Public Markets</h3>
                <Link to={createPageUrl('Portfolio')}>
                  <button className="border border-gray-300 rounded-full px-5 py-1.5 text-sm text-black hover:bg-gray-50 transition-colors">
                    See our portfolios
                  </button>
                </Link>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-black mb-3">We're a House of Capital Rotation</h3>
                <button className="border border-gray-300 rounded-full px-5 py-1.5 text-sm text-black hover:bg-gray-50 transition-colors">
                  Get to know our approach
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Wealth Section */}
      <section className="pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div>
            <h2 className="text-4xl font-serif text-[#2d6a4f]">
              <span className="font-bold">How We Build Wealth</span>
            </h2>
            <div className="w-16 h-px bg-[#C0C0C0] mt-4"></div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="pt-8 py-12 md:py-28 bg-gradient-to-b from-white to-[#C0C0C0]/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-serif text-[#2d6a4f]">
                <span className="font-bold">Active Stewardship</span><br/><span className="italic">Not Set-and-Forget</span>
              </h3>
              <p className="text-black leading-relaxed font-light mt-4 flex-1">
                ANA applies a disciplined capital-rotation framework, rebalancing exposure across strategies and vintages as opportunity sets and relative value evolve — while remaining anchored to long-term objectives.
              </p>
              <p className="text-sm text-black font-medium mt-auto pt-6">
                Private markets evolve. Portfolios should too.
              </p>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-serif text-[#2d6a4f]">
                <span className="font-bold">Institutional Access</span><br/><span className="italic">Made Simple</span>
              </h3>
              <p className="text-black leading-relaxed font-light mt-4 flex-1">
                Private markets are traditionally complex to access and administer. ANA enables streamlined access through 
                a single trade with a Swiss ISIN, zero paperwork, quarterly reporting, and professional oversight.
              </p>
              <p className="text-sm text-black font-medium mt-auto pt-6">
               You invest. We manage everything else.
              </p>
            </div>
            
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-serif text-[#2d6a4f]">
                <span className="font-bold">Beyond Diversification</span><br/><span className="italic">The Art of Selection</span>
              </h3>
              <p className="text-black leading-relaxed font-light mt-4 flex-1">
                True diversification is not achieved through quantity, but through careful selection the right ones 
                and balanced portfolio construction across strategies, vintages and market cycles.
              </p>
              <p className="text-sm text-black font-medium mt-auto pt-6">
                Diversification is a tool. Selection is the craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-serif text-[#2d6a4f] mb-4">
            <span className="font-bold">Invest with Confidence</span><br/><span className="italic">Not Confusion</span>
          </h2>
          <div className="w-16 h-px bg-[#C0C0C0] mt-4 mb-12 mx-auto"></div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-3xl mx-auto">
            <p className="text-lg text-black leading-relaxed font-light flex-1">
              If you value quality, complementary investment strategy and enduring alignment.
            </p>
            <Link to={createPageUrl('Portfolio')}>
              <Button 
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white px-6 py-3 text-sm rounded-sm whitespace-nowrap"
              >
                Discover Our Portfolios
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PortfolioModal 
        isOpen={showDisclaimerModal} 
        onClose={() => setShowDisclaimerModal(false)}
        portfolio={null}
      />
    </div>
  );
}
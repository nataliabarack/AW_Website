import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav style={{backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(237,237,237,0.8)', position: 'sticky', top: 0, zIndex: 50, height: '90px', display: 'flex', alignItems: 'center'}}>
        <div className="max-w-full mx-auto px-8 w-full">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl('Home')} className="hover:opacity-80 transition-opacity" style={{marginLeft: '44px'}}>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6985aae0bba339a3d85e5b15/e552ce09b_ChatGPTImageFeb6202605_14_51PM.png" 
                alt="ANA Wealth" 
                className="w-auto"
                style={{height: '144px', filter: 'brightness(0.72) sepia(0.3) saturate(1.2)', letterSpacing: '-0.01em'}}
              />
            </Link>
            <div className="flex items-center" style={{gap: '40px'}}>
              <Link to={createPageUrl('Home')} className="flex items-center gap-1 nav-link" style={{fontSize: '15px', fontWeight: '500', letterSpacing: '0.5px', color: '#1A1A1A'}}>
                About <span style={{fontSize: '13px', opacity: '0.6', marginLeft: '2px'}}>∨</span>
              </Link>
              <div className="relative group">
                <span className="flex items-center gap-1 nav-link cursor-pointer" style={{fontSize: '15px', fontWeight: '500', letterSpacing: '0.5px', color: '#1A1A1A'}}>
                  Portfolios <span style={{fontSize: '13px', opacity: '0.6', marginLeft: '2px'}}>∨</span>
                </span>
                <div className="absolute top-full left-0 pt-3 hidden group-hover:block z-50" style={{minWidth: '220px'}}>
                  <div style={{backgroundColor: '#fff', border: '1px solid rgba(237,237,237,0.9)', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', overflow: 'hidden'}}>
                    <Link to={createPageUrl('Portfolio') + '?type=public'} className="block px-5 py-3.5 text-sm hover:bg-[#f7f7f7] transition-colors" style={{color: '#1A1A1A', fontWeight: '500', borderBottom: '1px solid rgba(237,237,237,0.9)'}}>
                      Public Markets Prism
                    </Link>
                    <Link to={createPageUrl('PrivateMarketsPrism')} className="block px-5 py-3.5 text-sm hover:bg-[#f7f7f7] transition-colors" style={{color: '#1A1A1A', fontWeight: '500'}}>
                      Private Markets Prism
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#" className="flex items-center gap-1 nav-link" style={{fontSize: '15px', fontWeight: '500', letterSpacing: '0.5px', color: '#1A1A1A'}}>
                Research Hub <span style={{fontSize: '13px', opacity: '0.6', marginLeft: '2px'}}>∨</span>
              </a>
              <Button className="text-white text-sm" style={{backgroundColor: '#1F4D3A', height: '42px', padding: '0 18px', borderRadius: '9px', fontWeight: '500', letterSpacing: '0.3px', border: '1px solid rgba(0,0,0,0.18)', transition: 'background-color 200ms ease'}}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#183d2e'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1F4D3A'}>
                Contact
              </Button>
            </div>
            <style>{`
              .nav-link {
                position: relative;
                text-decoration: none;
                transition: color 200ms ease;
              }
              .nav-link::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0;
                height: 1px;
                background-color: #2d6a4f;
                transition: width 200ms ease;
              }
              .nav-link:hover {
                color: #2d6a4f !important;
              }
              .nav-link:hover::after {
                width: 100%;
              }
            `}</style>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {children}
    </div>
  );
}
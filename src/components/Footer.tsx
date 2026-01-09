export const Footer = () => {
    return (
      <footer className="w-full bg-brand-bg px-6 md:px-12 py-24 border-t border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 text-sm text-brand-black">
          
          {/* Column 1: Address */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Address</h4>
            <div className="leading-relaxed text-neutral-600">
              <p>1 Reserve <span className="inline-flex items-center justify-center w-3 h-3 bg-black text-white rounded-full text-[8px] align-middle">1</span></p>
              <p>G Block, Bandra Kurla Complex</p>
              <p>Mumbai, 400051</p>
            </div>
          </div>
  
          {/* Column 2: Real Estate Contact 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Leasing Inquiries</h4>
            <div className="leading-relaxed text-neutral-600">
              <p>leasing@1reserve.in</p>
              <p>+91 22 1234 5678</p>
            </div>
          </div>
  
          {/* Column 3: Real Estate Contact 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">General Management</h4>
            <div className="leading-relaxed text-neutral-600">
              <p>management@1reserve.in</p>
              <p>+91 22 8765 4321</p>
            </div>
          </div>
  
          {/* Column 4: Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Legal</h4>
            <div className="flex flex-col gap-2 text-neutral-600">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Cookies</a>
              <a href="#" className="hover:text-black transition-colors">Terms of use</a>
            </div>
          </div>
  
          {/* Column 5: Disclaimer */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Disclaimer</h4>
            <p className="leading-relaxed text-neutral-500 text-xs">
              Although the information on this website has been compiled with the greatest care, no rights can be derived from its contents. The published images provide inspiration for a possible delivery, but no guarantees are given for this.
            </p>
          </div>
  
        </div>
      </footer>
    );
  };

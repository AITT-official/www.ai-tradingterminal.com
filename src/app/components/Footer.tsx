export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#3A1C5A]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-[#E6E9EF]">AI Trading Terminal</p>
          <p className="text-[#7F8794]">Offline-first architecture</p>
          <p className="text-[#7F8794]">Research & development project</p>
          
          <div className="pt-8 mt-8 border-t border-[#3A1C5A]/20">
            <p className="text-sm text-[#B6BDC9] max-w-3xl mx-auto">
              AITT is a research and development system. It does not provide trading signals or financial advice.
            </p>
          </div>
          
          <p className="text-sm text-[#7F8794] pt-4">
            © 2026 AITT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
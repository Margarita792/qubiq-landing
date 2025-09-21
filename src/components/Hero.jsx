import logo from "../assets/hero/Component 10.png";

function Hero() {
  return (
    <section className="relative w-full bg-[#F7F7F9] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff14 1px, transparent 1px), linear-gradient(90deg, #ffffff14 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "top left",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-[84px] pt-14 lg:pt-[72px] pb-16 lg:pb-[84px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          <div className="w-full max-w-[760px] text-center lg:text-left">
            <h1
              className="font-['Archivo'] font-semibold text-[#303030] tracking-tight
                            text-[36px] leading-[1.1]
                            sm:text-[44px]
                            md:text-[56px]
                            lg:text-[72px]"
            >
              The yield-backed
              <br /> stablecoin protocol
              <br /> boosting DeFi{" "}
              <span className="inline-block align-middle w-6 h-6 sm:hidden">
                <img
                  src={logo}
                  alt="mark"
                  className="w-full h-full object-contain"
                />
              </span>{" "}
              liquidity
            </h1>

            <p className="mt-4 text-[15px] sm:text-[16px] md:text-[18px] text-[#2626268C] max-w-[740px] mx-auto lg:mx-0">
              Keep your yield working for you — we keep your liquidity
              accessible
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="h-[50px] sm:h-[57px] px-6 sm:px-8 rounded-[38px] bg-[#2E2E2E] text-[#F7F7F7] font-medium hover:opacity-90 transition">
                Join Whitelist
              </button>
              <button className="h-[50px] sm:h-[57px] px-6 sm:px-8 rounded-[38px] bg-[#E6E8EC] text-[#2E2E2E] font-medium hover:bg-[#dfe2e7] transition flex items-center justify-center gap-2">
                Learn more
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          <div className="hidden sm:block lg:block shrink-0">
            <img
              src={logo}
              alt="Backyard mark"
              className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;

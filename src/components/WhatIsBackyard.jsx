import React from "react";
import img1 from "../assets/whatIsBackyard/Gen-4.png";
import img2 from "../assets/whatIsBackyard/Gen-4 Turbo.png";
import img3 from "../assets/whatIsBackyard/Coins.png";

function WhatIsBackyard() {
  return (
    <section className="w-full bg-[#ededf6]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-[42px] leading-[1.1] font-bold text-[#303030] mb-16 text-center">
          What is Backyard?
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              <img
                src={img1}
                alt="Yield Aggregator"
                className="w-[179px] h-[179px] object-contain"
              />
              <div className="absolute -bottom-9 flex items-center gap-3 w-[150%] max-w-[360px] rounded-full bg-[#ffffff] px-4 py-3">
                <span className="flex h-[33px] w-[33px] items-center justify-center rounded-full bg-[#2D322F] text-[#FBFBFC] font-semibold">
                  1
                </span>
                <span className="text-[20px] text-[#303030]">
                  Yield Aggregator
                </span>
              </div>
            </div>
            <div className="mt-14 w-full max-w-[300px] rounded-[31px] bg-[#ffffff] px-6 py-6">
              <p className="font-extrabold text-[18px] text-[#2D322F] mb-2">
                One-click yield aggregation
              </p>
              <p className="text-[14px] text-[#787878]">
                Choose multiple stablecoin strategies, diversify in seconds, and
                optimize your yield without complexity
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              <img
                src={img2}
                alt="Yield-backed Stablecoin"
                className="w-[179px] h-[179px] object-contain"
              />
              <div className="absolute -bottom-9 flex items-center gap-3 w-[170%] max-w-[360px] rounded-full bg-[#ffffff] px-4 py-3">
                <span className="flex h-[33px] w-[33px] items-center justify-center rounded-full bg-[#2D322F] text-[#FBFBFC] font-semibold">
                  2
                </span>
                <span className="text-[20px] text-[#303030]">
                  Yield-backed Stablecoin
                </span>
              </div>
            </div>
            <div className="mt-14 w-full max-w-[300px] rounded-[31px] bg-[#ffffff] px-6 py-6">
              <p className="font-extrabold text-[18px] text-[#2D322F] mb-2">
                Unlock liquidity with BYD
              </p>
              <p className="text-[14px] text-[#787878]">
                Mint BYD against your yield-generating LP tokens to stay liquid
                and productive at the same time
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              <img
                src={img3}
                alt="Boost DeFi Liquidity"
                className="w-[179px] h-[179px] object-contain"
              />
              <div className="absolute -bottom-9 flex items-center gap-3 w-[160%] max-w-[360px] rounded-full bg-[#ffffff] px-4 py-3">
                <span className="flex h-[33px] w-[33px] items-center justify-center rounded-full bg-[#2D322F] text-[#FBFBFC] font-semibold">
                  3
                </span>
                <span className="text-[20px] text-[#303030]">
                  Boost DeFi Liquidity
                </span>
              </div>
            </div>
            <div className="mt-14 w-full max-w-[300px] rounded-[31px] bg-[#ffffff] px-6 py-6">
              <p className="font-extrabold text-[18px] text-[#2D322F] mb-2">
                Boost protocols, earn more
              </p>
              <p className="text-[14px] text-[#787878]">
                Your liquidity empowers DeFi — vote for pools, earn bribes, and
                maximize your rewards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatIsBackyard;

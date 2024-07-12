import React from 'react'

function ProofOfPayment({ imageUrl }) {
  return (
    <div className="bg-white">
      <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Proof of payment</h2>
            <div class="flex w-full grow bg-[#FFFFFF] @container p-4">
              <div class="w-full gap-1 overflow-hidden bg-[#FFFFFF] @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
                <div
                  class="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/2f1e25e1-b55e-4aef-b089-360a51ba32e3.png")'}}
                ></div>
              </div>
            </div>
            <div class="flex justify-stretch">
              <div class="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Cancel</span>
                </button>
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Verify &amp; Update Balance</span>
                </button>
              </div>
            </div>
    </div>
  )
}

export default ProofOfPayment
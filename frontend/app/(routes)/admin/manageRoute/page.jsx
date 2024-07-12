import React from 'react'

function ManageRoute() {
  return (
    <div>
        <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <div class="gap-1 px-6 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight">Manage</p>
                <p class="text-[#A18249] text-sm font-normal leading-normal">You can add new bus, add new route, add seat for the route</p>
              </div>
            </div>
            <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Add Bus</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter plate number"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter driver name"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3 justify-end">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Add bus</span>
              </button>
            </div>
            <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Add Route</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter cost"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter source"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter destination"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3 justify-end">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Add route</span>
              </button>
            </div>
            <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Add Seat</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter route source"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter route destination"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3 justify-end">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Add seat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default ManageRoute


    
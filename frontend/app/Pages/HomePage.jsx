import Image from 'next/image'
import React from 'react'

function HomePage(){
  return (
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
                <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/21b335fd-d722-4c1a-ab61-648ad4c8ee62.png")',}}
                >
                  <div class="flex flex-col gap-2 text-left">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Travel your way with Bus Travel
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      We're committed to helping you travel safely and confidently. Our buses are clean and our team is ready to get you where you need to go.
                    </h2>
                  </div>
                  <label class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                    <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div
                        class="text-[#A18249] flex border border-[#E9DFCE] bg-[#FFFFFF] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Where to?"
                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-full placeholder:text-[#A18249] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        
                      />
                      <div class="flex items-center justify-center rounded-r-xl border-l-0 border border-[#E9DFCE] bg-[#FFFFFF] pr-[7px]">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span class="truncate">Search</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
     <div class="mx-auto my-12">
        <h2 class="text-4xl font-bold text-left font-display">Why BusGo</h2>
        <p class="text-gray-600 text-left mb-12">We're here to help you travel comfortably and safely.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    class="card-img-top w-full h-64 object-cover" alt="On-time guarantee"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">On-time guarantee</div>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://images.unsplash.com/photo-1572016047668-5b5e909e1605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    class="card-img-top w-full h-64 object-cover" alt="Real-time tracking"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">Real-time tracking</div>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://plus.unsplash.com/premium_photo-1671462505492-03f9682bff61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    class="card-img-top w-full h-64 object-cover" alt="Free Wi-Fi and power outlets"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">Free Wi-Fi and power outlets</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mx-auto my-12">
        <h2 class="text-4xl font-bold text-left font-display mb-10">Popular routes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Addis_abeba_meskele_square_%28cropped%29.jpg/272px-Addis_abeba_meskele_square_%28cropped%29.jpg" 
                    class="card-img-top w-full h-64 object-cover" alt="On-time guarantee"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">Addis Ababa</div>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/59/a7/bd/l-hotel-domine-le-lac.jpg?w=1400&h=1400&s=1" 
                    class="card-img-top w-full h-64 object-cover" alt="Real-time tracking"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">Hawassa</div>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://borkena.com/wp-content/uploads/2024/03/Bahir-Dar-Security-Update.jpg" 
                    class="card-img-top w-full h-64 object-cover" alt="Free Wi-Fi and power outlets"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">Bahirdar</div>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://www.historyhit.com/app/uploads/2020/11/Harar-Jugol.jpg" 
                    class="card-img-top w-full h-64 object-cover" alt="Free Wi-Fi and power outlets"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">Harer</div>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="feature-card border-none rounded-lg overflow-hidden shadow-sm">
                    <Image width={2069} height={250} src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSnh6RWdB1MxRneRHdU3zETh57UbgD6saX9AhNZ7FnJT3sU7CLx7bA03dnBp0DFdA13T1fWmycG1K_YEZ4EZ7eJMicRb1K2D1O5o1LuBQ" 
                    class="card-img-top w-full h-64 object-cover" alt="Free Wi-Fi and power outlets"/>
                    <div class="card-body text-center p-4">
                        <div class="feature-card-title text-lg font-bold">Gonder</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div class="flex flex-col gap-10 px-4 py-10 @container">
              <h1
                class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
              >
                Booking made easy
              </h1>
            </div>
            <div class="@container">
              <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div class="flex flex-col gap-2 text-center">
                  <h1
                    class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Ready to book your trip?
                  </h1>
                </div>
                <div class="flex flex-1 justify-center">
                  <div class="flex justify-center">
                    <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                    >
                      <span class="truncate">Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer class="flex justify-center">
          <div class="flex max-w-[960px] flex-1 flex-col">
            <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a class="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">About Bus Travel</a>
                <a class="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">Careers</a>
                <a class="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">Press</a>
                <a class="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">Help Center</a>
                <a class="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a class="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">Terms of Use</a>
              </div>
              <div class="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div class="text-[#A18249]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div class="text-[#A18249]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div class="text-[#A18249]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p class="text-[#A18249] text-base font-normal leading-normal">@2022 Bus Travel, Inc.</p>
            </footer>
          </div>
        </footer> */}
      </div>
    </div>
    </div>
  )
}

export default HomePage
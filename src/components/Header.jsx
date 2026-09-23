
import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Favicon from '../assets/favicon.png'
import LeftRing from '../assets/left-ring.png'
import RightRing from '../assets/right-ring.png'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {

      useLayoutEffect(() => {

            const ctx = gsap.context(() => {

                  // Center sculpture scroll rotation
                  gsap.to('.hero-sculpture', {
                        rotation: 360,
                        ease: 'none',
                        scrollTrigger: {
                              trigger: '.hero-sculpture',
                              start: 'top bottom',
                              end: 'bottom top',
                              scrub: true,
                        }
                  })

                  // Left icon continuous orbit
                  gsap.to('.left-orbit', {
                        rotation: 360,
                        duration: 8,
                        repeat: -1,
                        ease: 'none',
                  })

                  // Right icon continuous orbit
                  gsap.to('.right-orbit', {
                        rotation: -360,
                        duration: 8,
                        repeat: -1,
                        ease: 'none',
                  })

                  // Keep left icon upright while orbiting
                  gsap.to('.left-icon', {
                        rotation: -360,
                        duration: 8,
                        repeat: -1,
                        ease: 'none',
                  })

                  // Keep right icon upright while orbiting
                  gsap.to('.right-icon', {
                        rotation: 360,
                        duration: 8,
                        repeat: -1,
                        ease: 'none',
                  })

            })

            return () => ctx.revert()

      }, [])


      return (
            <div className='relative overflow-hidden bg-white pb-[40px] sm:pb-[50px] lg:pb-[60px]'>

                  {/* top-left chrome blob */}
                  <img
                        src={LeftRing}
                        alt=''
                        className='absolute -top-[100px] -left-[100px] w-[300px] h-[300px] sm:-top-[130px] sm:-left-[120px] sm:w-[380px] sm:h-[380px] lg:-top-[170px] lg:-left-[150px] lg:w-[500px] lg:h-[500px] object-cover opacity-90 pointer-events-none select-none'
                  />

                  {/* top-right chrome blob */}
                  <img
                        src={RightRing}
                        alt=''
                        className='absolute -top-[-60px] -right-[80px] w-[300px] h-[300px] sm:-top-[-80px] sm:-right-[70px] sm:w-[380px] sm:h-[380px] lg:-top-[-100px] lg:-right-[50px] lg:w-[500px] lg:h-[500px] object-cover opacity-90 pointer-events-none select-none'
                  />

                  <div className='relative flex flex-col items-center text-center pt-[70px] sm:pt-[80px] lg:pt-[90px] px-[15px] sm:px-[20px]'>

                        {/* avatars + business users */}
                        <div className='flex items-center gap-[8px] sm:gap-[10px] mb-[20px] sm:mb-[25px]'>

                              <div className='flex -space-x-[8px] sm:-space-x-[10px]'>

                                    <img
                                          src='https://i.pravatar.cc/40?img=32'
                                          className='w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full border-[2px] border-white'
                                    />

                                    <img
                                          src='https://i.pravatar.cc/40?img=12'
                                          className='w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full border-[2px] border-white'
                                    />

                                    <img
                                          src='https://i.pravatar.cc/40?img=45'
                                          className='w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full border-[2px] border-white'
                                    />

                              </div>

                              <p className='font-geist text-[12px] sm:text-[14px]'>
                                    <span className='font-semibold'>2000+</span>
                                    <span className='text-gray-500'> BUSINESS USERS</span>
                              </p>

                        </div>


                        {/* heading */}
                        <h1 className='font-geist font-bold uppercase leading-[0.95] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-black'>
                              Building Brands <br /> That Matter
                        </h1>


                        {/* subheading */}
                        <p className='font-geist text-[14px] sm:text-[15px] lg:text-[16px] text-gray-500 mt-[16px] sm:mt-[20px] max-w-[480px] px-[10px]'>
                              We are a forward-thinking digital agency dedicated to
                              transforming ideas into powerful brands.
                        </p>


                        {/* CTA row with side icons */}
                        <div className='relative flex items-center gap-[25px] sm:gap-[45px] lg:gap-[80px] mt-[35px] sm:mt-[40px] lg:mt-[45px]'>

                              {/* Left orbit */}
                              <div className='left-orbit w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center'>

                                    <div className='left-icon w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] bg-black rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] rotate-45 flex items-center justify-center'>

                                          <div className='-rotate-45 text-white text-[18px] sm:text-[20px] lg:text-[22px]'>
                                                ✦
                                          </div>

                                    </div>

                              </div>


                              {/* CTA button */}
                              <button className='relative group w-[190px] sm:w-[205px] lg:w-[220px] h-[46px] sm:h-[48px] lg:h-[50px] text-[12px] sm:text-[13px] lg:text-[14px] font-geist font-medium'>

                                    BOOK 30 MIN MEETING

                                    {/* Top Left */}
                                    <span
                                          className='
                                                absolute h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] left-0 top-0
                                                border-l-[2px] border-t-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px] group-hover:h-[15px]
                                          '
                                    ></span>

                                    {/* Bottom Left */}
                                    <span
                                          className='
                                                absolute h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] left-0 bottom-0
                                                border-l-[2px] border-b-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px] group-hover:h-[15px]
                                          '
                                    ></span>

                                    {/* Top Right */}
                                    <span
                                          className='
                                                absolute h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] right-0 top-0
                                                border-r-[2px] border-t-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px] group-hover:h-[15px]
                                          '
                                    ></span>

                                    {/* Bottom Right */}
                                    <span
                                          className='
                                                absolute h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] right-0 bottom-0
                                                border-r-[2px] border-b-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px] group-hover:h-[15px]
                                          '
                                    ></span>

                              </button>


                              {/* Right orbit */}
                              <div className='right-orbit w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center'>

                                    <div className='right-icon w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] bg-black rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] rotate-45 flex items-center justify-center'>

                                          <div className='-rotate-45 text-white text-[18px] sm:text-[20px] lg:text-[22px]'>
                                                ❖
                                          </div>

                                    </div>

                              </div>

                        </div>

                  </div>


                  {/* bottom center chrome sculpture */}
                  <div className='flex justify-center mt-[45px] sm:mt-[50px] lg:mt-[60px]'>

                        <img
                              src={Favicon}
                              alt=''
                              className='hero-sculpture w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] object-cover rounded-full'
                        />

                  </div>

            </div>
      )
}

export default Header


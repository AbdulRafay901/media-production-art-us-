
import React, { useState } from 'react'
import Logo from '../assets/Logo.webp'

const Navbar = () => {

      const [menuOpen, setMenuOpen] = useState(false)

      return (
            <div className="absolute top-[15px] sm:top-[20px] left-[12px] right-[12px] sm:left-[20px] sm:right-[20px] z-10">

                  <div className="
                        relative
                        flex items-center justify-between
                        shadow-sm
                        px-[15px] sm:px-[20px]
                        py-[10px] sm:py-[12px]
                        rounded-[16px] sm:rounded-[20px]
                        bg-white
                  ">

                        {/* Logo */}
                        <div>
                              <img
                                    src={Logo}
                                    alt="Logo"
                                    className="w-[100px] sm:w-[120px]"
                              />
                        </div>


                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-[15px]">

                              <a
                                    href="#"
                                    className="hover:text-[#0E84CB] font-geist text-[15px] font-medium transition-colors duration-300"
                              >
                                    HOME
                              </a>

                              <a
                                    href="#"
                                    className="hover:text-[#0E84CB] font-geist text-[15px] font-medium transition-colors duration-300"
                              >
                                    PAGES
                              </a>

                              <a
                                    href="#"
                                    className="hover:text-[#0E84CB] font-geist text-[15px] font-medium transition-colors duration-300"
                              >
                                    SERVICES
                              </a>

                              <a
                                    href="#"
                                    className="hover:text-[#0E84CB] font-geist text-[15px] font-medium transition-colors duration-300"
                              >
                                    PROJECTS
                              </a>

                              <a
                                    href="#"
                                    className="hover:text-[#0E84CB] font-geist text-[15px] font-medium transition-colors duration-300"
                              >
                                    BLOG
                              </a>

                              <a
                                    href="#"
                                    className="hover:text-[#0E84CB] font-geist text-[15px] font-medium transition-colors duration-300"
                              >
                                    SHOP
                              </a>

                        </div>


                        {/* Desktop Get Started */}
                        <div className="hidden lg:block">

                              <button className="relative w-[150px] h-[40px] text-[15px] font-medium group">

                                    GET STARTED

                                    {/* Top Left */}
                                    <span
                                          className="
                                                absolute
                                                h-[10px] w-[10px]
                                                left-0 top-0
                                                border-l-[2px] border-t-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px]
                                                group-hover:h-[15px]
                                          "
                                    ></span>

                                    {/* Bottom Left */}
                                    <span
                                          className="
                                                absolute
                                                h-[10px] w-[10px]
                                                left-0 bottom-0
                                                border-l-[2px] border-b-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px]
                                                group-hover:h-[15px]
                                          "
                                    ></span>

                                    {/* Top Right */}
                                    <span
                                          className="
                                                absolute
                                                h-[10px] w-[10px]
                                                right-0 top-0
                                                border-r-[2px] border-t-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px]
                                                group-hover:h-[15px]
                                          "
                                    ></span>

                                    {/* Bottom Right */}
                                    <span
                                          className="
                                                absolute
                                                h-[10px] w-[10px]
                                                right-0 bottom-0
                                                border-r-[2px] border-b-[2px] border-black
                                                transition-all duration-500 ease-out
                                                group-hover:w-[15px]
                                                group-hover:h-[15px]
                                          "
                                    ></span>

                              </button>

                        </div>


                        {/* Mobile Menu Button */}
                        <button
                              onClick={() => setMenuOpen(!menuOpen)}
                              className="
                                    lg:hidden
                                    flex flex-col
                                    justify-center
                                    items-center
                                    gap-[5px]
                                    w-[40px]
                                    h-[40px]
                              "
                              aria-label="Toggle menu"
                        >

                              <span
                                    className={`
                                          block w-[22px] h-[2px] bg-black
                                          transition-all duration-300
                                          ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}
                                    `}
                              ></span>

                              <span
                                    className={`
                                          block w-[22px] h-[2px] bg-black
                                          transition-all duration-300
                                          ${menuOpen ? 'opacity-0' : 'opacity-100'}
                                    `}
                              ></span>

                              <span
                                    className={`
                                          block w-[22px] h-[2px] bg-black
                                          transition-all duration-300
                                          ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}
                                    `}
                              ></span>

                        </button>


                        {/* Mobile Menu */}
                        <div
                              className={`
                                    lg:hidden
                                    absolute
                                    top-[calc(100%+8px)]
                                    left-0
                                    right-0
                                    bg-white
                                    rounded-[16px]
                                    shadow-sm
                                    overflow-hidden
                                    transition-all duration-300
                                    ${menuOpen
                                          ? 'opacity-100 visible translate-y-0'
                                          : 'opacity-0 invisible -translate-y-[10px]'
                                    }
                              `}
                        >

                              <div className="flex flex-col px-[20px] py-[15px]">

                                    <a
                                          href="#"
                                          onClick={() => setMenuOpen(false)}
                                          className="py-[11px] font-geist text-[14px] font-medium hover:text-[#0E84CB] transition-colors duration-300"
                                    >
                                          HOME
                                    </a>

                                    <a
                                          href="#"
                                          onClick={() => setMenuOpen(false)}
                                          className="py-[11px] font-geist text-[14px] font-medium hover:text-[#0E84CB] transition-colors duration-300"
                                    >
                                          PAGES
                                    </a>

                                    <a
                                          href="#"
                                          onClick={() => setMenuOpen(false)}
                                          className="py-[11px] font-geist text-[14px] font-medium hover:text-[#0E84CB] transition-colors duration-300"
                                    >
                                          SERVICES
                                    </a>

                                    <a
                                          href="#"
                                          onClick={() => setMenuOpen(false)}
                                          className="py-[11px] font-geist text-[14px] font-medium hover:text-[#0E84CB] transition-colors duration-300"
                                    >
                                          PROJECTS
                                    </a>

                                    <a
                                          href="#"
                                          onClick={() => setMenuOpen(false)}
                                          className="py-[11px] font-geist text-[14px] font-medium hover:text-[#0E84CB] transition-colors duration-300"
                                    >
                                          BLOG
                                    </a>

                                    <a
                                          href="#"
                                          onClick={() => setMenuOpen(false)}
                                          className="py-[11px] font-geist text-[14px] font-medium hover:text-[#0E84CB] transition-colors duration-300"
                                    >
                                          SHOP
                                    </a>


                                    {/* Mobile Get Started */}
                                    <button
                                          onClick={() => setMenuOpen(false)}
                                          className="
                                                relative
                                                w-full
                                                h-[45px]
                                                mt-[10px]
                                                text-[14px]
                                                font-medium
                                                group
                                          "
                                    >

                                          GET STARTED

                                          {/* Top Left */}
                                          <span
                                                className="
                                                      absolute h-[8px] w-[8px]
                                                      left-0 top-0
                                                      border-l-[2px] border-t-[2px] border-black
                                                      transition-all duration-500
                                                      group-hover:w-[14px]
                                                      group-hover:h-[14px]
                                                "
                                          ></span>

                                          {/* Bottom Left */}
                                          <span
                                                className="
                                                      absolute h-[8px] w-[8px]
                                                      left-0 bottom-0
                                                      border-l-[2px] border-b-[2px] border-black
                                                      transition-all duration-500
                                                      group-hover:w-[14px]
                                                      group-hover:h-[14px]
                                                "
                                          ></span>

                                          {/* Top Right */}
                                          <span
                                                className="
                                                      absolute h-[8px] w-[8px]
                                                      right-0 top-0
                                                      border-r-[2px] border-t-[2px] border-black
                                                      transition-all duration-500
                                                      group-hover:w-[14px]
                                                      group-hover:h-[14px]
                                                "
                                          ></span>

                                          {/* Bottom Right */}
                                          <span
                                                className="
                                                      absolute h-[8px] w-[8px]
                                                      right-0 bottom-0
                                                      border-r-[2px] border-b-[2px] border-black
                                                      transition-all duration-500
                                                      group-hover:w-[14px]
                                                      group-hover:h-[14px]
                                                "
                                          ></span>

                                    </button>

                              </div>

                        </div>

                  </div>

            </div>
      )
}

export default Navbar


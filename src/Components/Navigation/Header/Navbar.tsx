'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true)
  return (
    <>
      <nav className="w-full bg-gray-800 shadow">
        <div className="md:flex justify-between md:items-center lg:px-12 md:px-8 mx-auto">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* ------------LOGO------------ */}
              <Link href={'/'}>
                <h2 className="text-2xl text-teal-700 font-bold uppercase">Talent<span className='text-gray-700'>hive</span></h2>
              </Link>
              {/* -----------HAMBURGER FOR SMALL SCREEN---------- */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 space-y-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <div className='md:flex md:space-x-6 md:space-y-0 space-y-8'>
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white">
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/about">
                      About US
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/contact">
                      Contact US
                    </Link>
                  </li>
                </ul>

                <div>
                  <button className='btn btn-outline'>Login</button>
                </div>
              </div>
            </div>
          </div>



        </div>
      </nav>
    </>
  );
};

export default Navbar;
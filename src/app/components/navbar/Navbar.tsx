
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
//styles
import './navbar.scss'

//imgs
import Logo from '../../assets/imgs/navbar/casa_botanical_logo.png'

export default function Navbar() {
  const pathname = usePathname();


  return (
    <main className='navbar-main grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_2fr_1fr] bg-[#835137] w-full h-25 items-center fixed z-10'>

      <div className='menu-sec order-1 md:order-2 h-full w-full flex items-center max-md:pl-10'>

        <ul className="hidden md:flex flex-col md:flex-row justify-center gap-5 items-center w-full list-none md:text-[0.65rem] lg:text-[0.95rem]">

          <li>
            <Link
              href="/"
              passHref
              className={`text-[#D9D9D9] hover:text-white underline-offset-2 no-underline ${pathname === '/' ? 'underline text-white ' : 'hover:underline'}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/collections"
              passHref
              className={`text-[#D9D9D9] hover:text-white no-underline underline-offset-2 ${pathname === '/collections' ? 'underline text-white ' : 'hover:underline'}`}
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              href="/gifting-collaborations"
              passHref
              className={`text-[#D9D9D9] hover:text-white no-underline underline-offset-2 ${pathname === '/gifting-collaborations' ? 'underline text-white ' : 'hover:underline'}`}
            >
              Gifting & B2B
            </Link>
          </li>

          <li>
            <Link
              href="/blogs"
              passHref
              className={`text-[#D9D9D9] hover:text-white no-underline underline-offset-2 ${pathname === '/blogs' ? 'underline text-white ' : 'hover:underline'}`}
            >
              Blogs
            </Link>
          </li>

          <li>
            <Link
              href="/about-us"
              passHref
              className={`text-[#D9D9D9] hover:text-white no-underline underline-offset-2 ${pathname === '/about-us' ? 'underline text-white ' : 'hover:underline'}`}
            >
              About us
            </Link>
          </li>


          <li>
            <Link
              href="/contact"
              passHref
              className={`text-[#D9D9D9] hover:text-white no-underline underline-offset-2 ${pathname === '/contact' ? 'underline text-white ' : 'hover:underline'}`}
            >
              Contact
            </Link>
          </li>

        </ul>


        <svg
          className="icon icon-hamburger w-6.5 h-6.5 md:hidden cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          fill="none"
          viewBox="0 0 18 16"
        >
          <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
          </path>
        </svg>

      </div>

      <div className='img-sec order-2 md:order-1 flex relative h-full w-full justify-center md:justify-end items-center overflow-hidden'>
        <Image
          src={Logo}
          alt='logo'
          className='logo-img'

          style={{
            width: "50%",
            height: "60%",
            objectFit: "contain",
          }}
        />


      </div>

      <div className='extra-sec order-3 w-full flex justify-start items-center gap-8 overflow-hidden relative'>

        <svg
          className="h-5 w-5 text-[#D9D9D9] hover:text-[#ffffff] cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="7" strokeWidth="1" />
          <line x1="21" y1="22" x2="14.6" y2="14.65" strokeWidth="1" strokeLinecap="round" />
        </svg>

        <svg
          className="h-5 w-5 text-[#D9D9D9] hover:text-[#ffffff] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
          </path>
        </svg>

        <svg
          className="h-5 w-5 text-[#D9D9D9] hover:text-[#ffffff] cursor-pointer"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 2 20 20"
          fill="none"
        >
          <path d="m5 4h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fillRule="evenodd"></path>
        </svg>

      </div>
    </main>
  )
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

//data
import {
  NAVBAR_DATA,
  DINING_DATA,
  STORAGE_DATA,
  HOMEDECOR_DATA,
  SHOP_CATAGORY_DATA
} from "./navbarData";

//styles
import "./navbar.scss";

//imgs
import Logo from "../../assets/imgs/navbar/casa_botanical_logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [shopDrawer, setShopDrawer] = useState(false);
  const [shopDrawerMob, setShopDrawerMob] = useState(false);
  const [catagoryType, setCatagoryType] = useState("none")


  return (
    <main className="navbar-main grid max-xs:grid-cols-[2fr_5fr_3fr] xs:grid-cols-[2fr_4fr_2fr] bg-[#835137] w-full h-25 items-center fixed z-10">

      {/* --------------------------- NAV MENU WEB --------------------------- */}
      <div className="menu-sec order-1 md:order-2 h-full w-full flex items-center max-xs:pl-5 xs:pl-10">
        <div className="hidden md:flex flex-col md:flex-row justify-center gap-5 items-center w-full list-none max-lg:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.05rem] capitalize select-none">
          {
            NAVBAR_DATA.map((item, i) => {
              return (<div
                key={i}
              >
                {item.name === "shop" ?
                  <div>
                    <div
                      className={`text-[#D9D9D9] cursor-pointer hover:text-white no-underline underline-offset-2 flex justify-center items-start gap-[0.15em]`}
                      onClick={() => {
                        setShopDrawer((p) => !p);
                      }}
                    >
                      <span
                        className={`${pathname.startsWith(item.linkTo) ? "underline text-white " : "hover:underline"}`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`inline-block mt-[0.3em] flex ${pathname.startsWith(item.linkTo) ? "text-white" : "hover:text-white"} text-#[#fff]`}
                        style={{ transform: `rotate(${shopDrawer ? 180 : 0}deg)` }}

                      >
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg "
                          className="xl:w-[1.1rem] xl:h-[1.1rem] lg:w-[1rem]  lg:h-[1rem]  max-lg:w-[0.9rem]  max-lg:h-[0.9rem]"
                        >
                          <rect width={48} height={48} fill="white" fillOpacity={0.01} />
                          <path
                            d="M37 18L25 30L13 18"
                            stroke="currentColor"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  :
                  <div >
                    <Link
                      href={`${item.linkTo}`}
                      passHref
                      className={`text-[#D9D9D9] hover:text-white underline-offset-2 no-underline ${pathname === item.linkTo ? "underline text-white " : "hover:underline"}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                }
              </div>)
            })
          }

        </div>

        {/* ------------------------ HAM BURGUR ICON -------------------------- */}
        <div className={`${shopDrawerMob && "hidden"}`}>

          <svg
            className="icon icon-hamburger xs:w-6.5 xs:h-6.5 max-xs:w-5 max-xs:h-5 md:hidden cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none"
            viewBox="0 0 18 16"
            onClick={() => {
              setShopDrawerMob(true);
              setCatagoryType("none")
            }}
          >
            <path
              d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* ------------------------ CROSS ICON -------------------------- */}
        <div className={`${!shopDrawerMob && "hidden"}`}>
          <svg
            className="icon icon-close xs:w-6.5 xs:h-6.5 max-xs:w-5 max-xs:h-5  md:hidden cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 17"
            onClick={() => {
              setShopDrawerMob(false);
              setCatagoryType("none")
            }}
          >
            <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
            </path>
          </svg>
        </div>

      </div>

      {/* ---------------------------LOGO IMG--------------------------- */}
      <Link
        className="img-sec order-2 md:order-1 flex relative h-full w-full justify-center md:justify-end items-center overflow-hidden"
        href="/"
        passHref
      >
        <Image
          src={Logo}
          alt="logo"
          className="logo-img max-sm:w-[50%] w-[35%] h-[60%]"
          style={{
            objectFit: "contain",
          }}
        />
      </Link>

      {/* ---------------------------OTHER ICON--------------------------- */}
      <div className="extra-sec order-3 w-full flex justify-start items-center max-xs:gap-5 xs:gap-8 overflow-hidden relative">
        <svg
          className="xs:h-5 max-xs:h-4.5 xs:w-5 max-xs:w-4.5 text-[#D9D9D9] hover:text-[#ffffff] cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="7" strokeWidth="1" />
          <line
            x1="21"
            y1="22"
            x2="14.6"
            y2="14.65"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        <Link href="/login" passHref>
          <svg
            className="xs:h-5 max-xs:h-4.5 xs:w-5 max-xs:w-4.5 text-[#D9D9D9] hover:text-[#ffffff] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>

        <svg
          className="xs:h-5 max-xs:h-4.5 xs:w-5 max-xs:w-4.5 text-[#D9D9D9] hover:text-[#ffffff] cursor-pointer"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 2 20 20"
          fill="none"
        >
          <path
            d="m5 4h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>

      {/* ========================== WEB DRAWER ========================== */}

      <section
        className={`shop-web-main w-full absolute top-[100%] max-lg:h-[250px] h-[300px] grid grid-cols-[2fr_2fr_2fr_1fr_6fr]  bg-[#835137] border-t border-[#c5c5c530] ${shopDrawer ? "block" : "hidden"} max-md:hidden`}
      >
        <div />

        {/* ------------------------------------------- */}
        <div className="max-lg:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.05rem] flex flex-col justify-start gap-1 pt-6">
          {DINING_DATA.map((item, i) => {
            return (
              <Link
                href={`/collections/${item.linkTo}`}
                passHref
                key={i}
                className={`text-[#D9D9D9] hover:text-white underline-offset-2 no-underline ${pathname === `/collections/${item.linkTo}` ? "underline text-white" : "hover:underline"} ${i === 0 ? "font-[600]" : "font-[300]"} `}
                onClick={() => setShopDrawer(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {/* ------------------------------------------- */}

        <div className="max-lg:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.05rem] flex flex-col justify-start gap-1 pt-6">
          {STORAGE_DATA.map((item, i) => {
            return (
              <Link
                href={`/collections/${item.linkTo}`}
                passHref
                key={i}
                className={`text-[#D9D9D9] hover:text-white underline-offset-2 no-underline ${pathname === `/collections/${item.linkTo}` ? "underline text-white " : "hover:underline"} ${i === 0 ? "font-[600]" : "font-[300]"}`}
                onClick={() => setShopDrawer(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {/* ------------------------------------------- */}

        <div className="max-lg:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.05rem] flex flex-col justify-start gap-1 pt-6">
          {HOMEDECOR_DATA.map((item, i) => {
            return (
              <Link
                href={`/collections/${item.linkTo}`}
                passHref
                key={i}
                className={`text-[#D9D9D9] hover:text-white underline-offset-2 no-underline ${pathname === `/collections/${item.linkTo}` ? "underline text-white " : "hover:underline"} ${i === 0 ? "font-[600]" : "font-[300]"}`}
                onClick={() => setShopDrawer(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div />
      </section>


      {/* ========================== MOB DRAWER ========================== */}
      <section
        className={`shop-web-main w-full absolute top-[100%] h-[100vh] flex bg-[#00000080] border-t border-[#c5c5c530] min-md:hidden 
                    transform transition-transform transition-opacity duration-0 ease-in-out
                    ${shopDrawerMob
            ? "opacity-100 translate-x-0 visible"
            : "opacity-0 -translate-x-full invisible"
          }`}

      >

        {/* ------------------------ CROSS ICON -------------------------- */}
        {/* <div>
          <svg
            className="icon icon-close w-6.5 h-6.5 md:hidden cursor-pointer absolute z-2 top-[2%] right-[4%]"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 17"
            onClick={() => {
              setShopDrawerMob(false);
              setCatagoryType("none")
            }}
          >
            <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
            </path>
          </svg>
        </div> */}

        <section
          className={`inner-section sm:w-[45%] max-sm:w-[55%] h-full bg-[#835137] flex text-[1.2rem] font-[500] tracking-wider overflow-hidden
                      transform transition-transform transition-opacity duration-300 ease-in-out
                     ${shopDrawerMob
              ? "opacity-100 translate-x-0 visible"
              : "opacity-0 -translate-x-full invisible"
            }`}
        >

          {/* ------------------------- Main Menu ----------------------------- */}

          <div className="relative w-full h-full z-0 flex flex-col gap-5 bg-[#835137] pl-10 pt-5">
            {
              NAVBAR_DATA.map((item, i) => {

                return <div
                  key={i}
                >
                  {item.name === "shop" ?
                    <div
                      className={`capitalize flex justify-between pr-10 cursor-pointer sm:text-[1.2rem] xs:text-[1.1rem] max-xs:text-[1rem]`}
                      onClick={() => { setCatagoryType("shop") }}
                    >
                      <span>{item.name}</span> <span>&#x2192;</span>
                    </div>
                    :
                    <Link
                      href={`${item.linkTo}`}
                      passHref
                      className={`capitalize sm:text-[1.2rem] xs:text-[1.1rem] max-xs:text-[1rem]`}
                    >
                      {item.name}
                    </Link>

                  }
                </div>
              })
            }
          </div>


          {/* ----------------------- SHOP CATAGORY DRAWER -------------------------- */}

          <div className={`absolute z-1 top-0 left-0 w-full h-full pt-5 pl-10 flex flex-col gap-5 bg-[#835137]
                                  transform transition-transform transition-opacity duration-300 ease-in-out
                                  ${catagoryType === "shop" || catagoryType === "dining" || catagoryType === "storage" || catagoryType === "home-decor"
              ? "opacity-100 translate-x-0 visible"
              : "opacity-0 -translate-x-[100%] invisible"
            }
            `}>
            {
              SHOP_CATAGORY_DATA.map((item, i) => {

                return <div
                  key={i}
                >
                  {item.name === "shop" ?
                    <div
                      className={`capitalize flex gap-2 cursor-pointer sm:text-[1rem] xs:text-[0.9rem] max-xs:text-[0.8rem]`}
                      onClick={() => { setCatagoryType("none") }}
                    >
                      <span>&#x2190;</span><span>{item.name}</span>
                    </div>
                    :
                    <div
                      className={`capitalize flex cursor-pointer justify-between pr-10 sm:text-[1.2rem] xs:text-[1.1rem] max-xs:text-[1rem]`}
                      onClick={() => { setCatagoryType(item.type) }}
                    >
                      {item.name} <span>&#x2192;</span>
                    </div>

                  }
                </div>
              })
            }
          </div>

          {/* ----------------------- CATAGORY DRAWER -------------------------- */}

          <div className={`absolute z-2 top-0 left-0 w-full h-full pt-5 pl-10 flex flex-col gap-5 bg-[#835137]
                                  transform transition-transform transition-opacity duration-300 ease-in-out
                                  ${catagoryType === "dining" || catagoryType === "storage" || catagoryType === "home-decor"
              ? "opacity-100 translate-x-0 visible"
              : "opacity-0 -translate-x-[100%] invisible"
            }
            `}

          >
            {/* ----------------------- DINING DRAWER -------------------------- */}

            {catagoryType === "dining" ?
              (
                DINING_DATA.map((item, i) => {

                  return <div
                    key={i}
                  >
                    {item.linkTo === "dining" ?
                      <div
                        className={`capitalize flex gap-2 cursor-pointer sm:text-[1rem] xs:text-[0.9rem] max-xs:text-[0.8rem]`}
                        onClick={() => { setCatagoryType("shop") }}
                      >
                        <span>&#x2190;</span><span>{item.name}</span>
                      </div>
                      :
                      <Link
                        href={`/collections/${item.linkTo}`}
                        passHref
                        className={`capitalize flex cursor-pointer justify-between pr-10 sm:text-[1.2rem] xs:text-[1.1rem] max-xs:text-[1rem]`}
                      >
                        {item.name}
                      </Link>

                    }
                  </div>
                })
              )
              :
              //  ----------------------- STORAGE DRAWER --------------------------

              catagoryType === "storage" ?
                (
                  STORAGE_DATA.map((item, i) => {

                    return <div
                      key={i}
                    >
                      {item.linkTo === "storage" ?
                        <div
                          className={`capitalize flex gap-2 cursor-pointer sm:text-[1rem] xs:text-[0.9rem] max-xs:text-[0.8rem]`}
                          onClick={() => { setCatagoryType("shop") }}
                        >
                          <span>&#x2190;</span><span>{item.name}</span>
                        </div>
                        :
                        <Link
                          href={`/collections/${item.linkTo}`}
                          passHref
                          className={`capitalize flex cursor-pointer justify-between pr-10 sm:text-[1.2rem] xs:text-[1.1rem] max-xs:text-[1rem]`}
                        >
                          {item.name}
                        </Link>

                      }
                    </div>
                  })
                )
                :
                //  ----------------------- HOME DECOR DRAWER --------------------------

                catagoryType === "home-decor" ?
                  (
                    HOMEDECOR_DATA.map((item, i) => {

                      return <div
                        key={i}
                      >
                        {item.linkTo === "home-decor" ?
                          <div
                            className={`capitalize flex gap-2 cursor-pointer sm:text-[1rem] xs:text-[0.9rem] max-xs:text-[0.8rem]`}
                            onClick={() => { setCatagoryType("shop") }}
                          >
                            <span>&#x2190;</span><span>{item.name}</span>
                          </div>
                          :
                          <Link
                            href={`/collections/${item.linkTo}`}
                            passHref
                            className={`capitalize flex cursor-pointer justify-between pr-10 sm:text-[1.2rem] xs:text-[1.1rem] max-xs:text-[1rem]`}
                          >
                            {item.name}
                          </Link>

                        }
                      </div>
                    })
                  ) : ""
            }
          </div>


        </section>
      </section>



    </main >
  );
}

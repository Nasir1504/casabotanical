"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//styles
import "./home.scss";

//imgs
import jewelryOrganizerImg from "../assets/imgs/home/jewelry-organizer.png";
import welcomeContentImg from "../assets/imgs/home/first_image.png";
import DiningImg from "../assets/imgs/home/dining.png";
import DecorImg from "../assets/imgs/home/decor.png";
import AccessoryImg from "../assets/imgs/home/accessory.png";
import StorageImg from "../assets/imgs/home/storage.png";

import DesertImg from "../assets/imgs/home/desert.png";
import CelestialImg from "../assets/imgs/home/celestial.png";
import EmeraldImg from "../assets/imgs/home/emerald.png";
import TangerineImg from "../assets/imgs/home/tangerine.png";

import JewBox from "../assets/imgs/home/jewellery-box.png";
import Tray from "../assets/imgs/home/faux-leather-organizer-tray-set-of-3.png";
import Frame from "../assets/imgs/home/photo-frame-stand.png";
import placemats from "../assets/imgs/home/placemats.png";
import Holder from "../assets/imgs/home/cutlery-holder.png";
import Napkin from "../assets/imgs/home/napkin-rings.png";
import Vase from "../assets/imgs/home/flower-rectangular-vase.png";
import Coaster from "../assets/imgs/home/coaster-set.png";
import Tissue from "../assets/imgs/home/tissue-box.png";

import Rutezin from "../assets/imgs/home/rutezin.png";

const circleMaskedImg = "https://i.ibb.co/27SZb51/mask-circle643.png";

export default function Home() {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrolling, setScrolling] = useState(0);
  const [slide, setSlide] = useState(0)


  const PHILOSOPHY_DATA = [
    {
      heading: "Desert Dream",
      details: "Beige offers peaceful simplicity and versatile style, making any setting feel warm, open, and timeless.",
      textColor: "FAD5A5"
    },
    {
      heading: "Celestial Charm",
      details: "Blue brings calm and focus to your space, creating an elegant, serene atmosphere perfect for mindful moments.",
      textColor: "161719"
    },
    {
      heading: "Emerald Essence",
      details: "Green invites balance and renewal, grounding your space with nature’s calming, harmonious energy.",
      textColor: "2B2B19"
    },
    {
      heading: "Tangerine Twiight",
      details: "Orange adds warmth and vibrance, encouraging lively conversation and a welcoming, joyful setting.",
      textColor: "DF5A16"
    }
  ];


  const PRODUCT_DATA = [
    {
      name: "Jewellery Box",
      imgURL: JewBox,
      linkTo: "###"
    },
    {
      name: "Organizer Tray",
      imgURL: Tray,
      linkTo: "###"
    },
    {
      name: "Photo Frame",
      imgURL: Frame,
      linkTo: "###"
    },
    {
      name: "Placements",
      imgURL: placemats,
      linkTo: "###"
    },
    {
      name: "Cutlery Holder",
      imgURL: Holder,
      linkTo: "###"
    },
    {
      name: "Napkin Rings",
      imgURL: Napkin,
      linkTo: "###"
    },
    {
      name: "Vase",
      imgURL: Vase,
      linkTo: "###"
    },
    {
      name: "Coaster Set",
      imgURL: Coaster,
      linkTo: "###"
    },
    {
      name: "Tissue Box",
      imgURL: Tissue,
      linkTo: "###"
    },

  ];

  const COLLECTION_DATA = [
    {
      name: "desert dream",
      imgURL: DesertImg,
      linkTo: "###"
    },
    {
      name: "celestial charm",
      imgURL: CelestialImg,
      linkTo: "###"
    },
    {
      name: "Emerald essence",
      imgURL: EmeraldImg,
      linkTo: "###"
    },
    {
      name: "tangerine twilight",
      imgURL: TangerineImg,
      linkTo: "###"
    },
  ]

  const CATEGORY_DATA = [
    {
      name: "dining",
      imgURL: DiningImg,
      linkTo: "###"
    },
    {
      name: "home decore",
      imgURL: DecorImg,
      linkTo: "###"
    },
    {
      name: "storage",
      imgURL: StorageImg,
      linkTo: "###"
    },
    {
      name: "dining accessory sets",
      imgURL: AccessoryImg,
      linkTo: "###"
    }

  ]

  const prevSlide = () => {
    setSlide((prev) => Math.max(prev - 1, 0));

  };

  const nextSlide = () => {
    setSlide((prev) => Math.min(prev + 1, PHILOSOPHY_DATA.length - 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % PHILOSOPHY_DATA.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [PHILOSOPHY_DATA.length]);

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <main className="home-main relative flex justify-center items-center flex-col">

      <div className="mask-container relative w-full max-xs:h-[750px] max-lg:h-[650px] lg:h-[750px] xl:h-[950px] flex justify-center items-center bg-[#000]" >

        <div className="mask flex justify-center items-center relative w-full h-full ">
          <Image
            src={jewelryOrganizerImg}
            alt=""
            className="w-full h-full mask-no-repeat max-lg:hidden"
            placeholder="blur"
            loading="lazy"
            style={{
              objectFit: 'cover',
              WebkitMaskPosition: `${coords.x - 165}px ${(coords.y - 155) + scrolling}px`,
              maskImage: `url(${circleMaskedImg})`,
              WebkitMaskImage: `url(${circleMaskedImg})`,

            }}
          />
          <Image
            src={jewelryOrganizerImg}
            alt=""
            placeholder="blur"
            loading="lazy"
            className="w-full h-full opacity-20 max-lg:opacity-100 absolute cursor-none"
            style={{ objectFit: 'cover' }} />
        </div>


        <div className="content absolute max-xxs:w-[20em] max-xxs:h-[14em] max-xs:w-[26em] max-xs:h-[14em] max-md:w-[32em] max-md:h-[15em] md:w-[40em] md:h-[16em] flex justify-center items-center flex-col gap-10 z-5">
          <p className=" md:text-[2rem] max-md:text-[2rem] max-sm:text-[1.6rem] max-xxs:text-[1.4rem] max-xxs:font-[600] text-[#c5c5c5]">Welcome to Casa Botanical</p>
          <Link
            href="/collections"
            passHref
            className="bg-[#835137] py-[0.6rem] px-[2.5rem] rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:shadow-lg text-center text-[#c5c5c5] max-sm:text-[1.2rem] max-md:text-[1.6rem] md:text-[1.4rem] max-xxs:font-[600] hover:text-[#fff]"
          >Shop Now</Link>
        </div>

      </div>


      {/* --------------------------------------------------------------------------- */}

      <div className={` relative
        welcome-content relative w-full text-[#c5c5c5] 
        max-xs:h-[900px] max-sm:h-[1100px] max-md:h-[600px] max-lg:h-[500px] lg:h-[655px] xl:h-[785px] 
        flex max-sm:flex-col justify-center items-center max-md:gap-10 md:gap-20 bg-[#5e5e5e]
        `}
      >

        <Image
          src={welcomeContentImg}
          alt=""
          placeholder="blur"
          loading="lazy"
          className="max-xs:w-[85%] max-sm:w-[75%] max-lg:w-[45%] lg:w-[35%] objectFit-contain rounded-md md:rounded-lg lg:rounded-xl"
        />

        <article className="max-sm:w-[90%] sm:w-[40%] max-lg:py-5 max-lg:px-6 lg:px-15 xl:px-20 bg-[#232321] py-12">
          <h3 className="max-xs:text-[1rem] max-md:text-[1.2rem] lg:text-[1.26rem] xl:text-[1.6rem]">WELCOME TO CASA BOTANICAL!</h3>
          <br />

          <p
            className="font-thin max-xs:text-[0.85rem] max-lg:text-[1rem] lg:text-[0.95rem] xl:text-[1.2rem]"
          >Casa Botanical was born from the belief that the objects we use every day should bring both beauty and purpose to our lives. We create elevated home and tableware—crafted in rich faux leather with meticulous stitching—that transforms everyday moments into something special.
          </p>
          <br />
          <p
            className="font-thin max-xs:text-[0.85rem] max-lg:text-[1rem] lg:text-[0.95rem] xl:text-[1.2rem]"
          >Our signature pieces—from refined cutlery holders and luxurious coasters to versatile trays and elegant vases—are designed to be both functional and striking. Each item carries our hallmark blend of understated luxury, warm earth tones, and botanical inspiration that seamlessly fits into any modern, inviting space.&nbsp;
            <Link href="/blogs" passHref className="text-[#835137] underline underline-offset-2" >Read more</Link>
          </p>

        </article>
      </div>

      {/* -----------------------------------Categorys---------------------------------------- */}

      <h3 className="w-full text-center font-[600] pt-10 max-lg:text-[1.26rem] lg:text-[1.26rem] xl:text-[1.6rem] bg-[#232321] text-[#c5c5c5]">SHOP BY CATEGORY</h3>

      {/* --------------------------- WEB -------------------------- */}
      <div className={`categorys-web relative w-full max-lg:h-[700px] lg:h-[900px] xl:h-[1050px] 
        grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-[#c5c5c5] bg-[#232321] gap-10 pt-10 pb-4 max-sm:hidden
        `}>

        <Link href="" passHref className="dining flex flex-col justify-start items-center gap-3 relative w-full h-full">
          <div className="card w-full">
            <Image
              src={DiningImg}
              alt=""
              placeholder="blur"
              loading="lazy"
              className="bg-img w-full h-full hover:"
            />
          </div>
          <p className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">DINING <span>&#x2192;</span></p>

        </Link>
        <Link href="" passHref className="decore flex flex-col justify-start items-center gap-3 relative">
          <div className="card w-full">
            <Image src={DecorImg} alt=""
              placeholder="blur"
              loading="lazy"
              className="bg-img w-full h-full hover:"
            />
          </div>
          <p className="flex max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">
            <span>HOME DECORE</span>
            <span>&#x2192;</span>
          </p>

        </Link>
        <Link href="" passHref className="storage flex flex-col justify-start items-center gap-3 relative">
          <div className="card w-full">
            <Image src={StorageImg} alt=""
              className="bg-img w-full h-full hover:"
            />
          </div>
          <p className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">STORAGE <span>&#x2192;</span></p>

        </Link>
        <Link href="" passHref className="accessory flex flex-col justify-start items-center gap-3 relative">
          <div className="card w-full">
            <Image src={AccessoryImg} alt=""
              placeholder="blur"
              loading="lazy"
              className="bg-img w-full h-full"
            />
          </div>
          <p className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">DINING ACCESSSORY SETS <span>&#x2192;</span></p>

        </Link>

      </div>

      {/* --------------------------- MOBILE -------------------------- */}
      <div className={`categorys-web relative w-full max-sm:h-auto
         text-[#c5c5c5] bg-[#232321] gap-10 pt-10 pb-4 sm:hidden flex justify-center flex-wrap items-start
        `}>
        {
          CATEGORY_DATA.map((item, i) => {
            return (
              <Link key={i} href={item.linkTo} passHref className="dining flex flex-col justify-start items-center relative max-xs:w-[90%] max-sm:w-[75%] max-xs:h-[400px] max-xxs:h-[320px] max-sm:h-[550px]">
                <div className="card w-full min-h-[85%]">
                  <Image
                    src={item.imgURL}
                    alt=""
                    placeholder="blur"
                    loading="lazy"
                    className="bg-img w-full h-full hover:"
                  />
                </div>
                <p
                  className="h-[15%] flex justify-center items-center max-sm:text-[1.2rem] max-xxs:text-[0.85rem] max-xs:text-[1rem] max-xs:font-[600] uppercase"
                >
                  <span>{item.name}</span>&nbsp;<span>&#x2192;</span>
                </p>

              </Link>
            )
          })
        }
      </div>

      {/* <div className={`categorys-mobile relative w-full max-xs:h-[450px] h-[700px] text-[#c5c5c5] bg-[#232321] gap-10 pt-10 pb-4 
        flex justify-center items-center sm:hidden`}>
        <div className="w-full h-[85%] bg-[#83513780] blur-lg absolute" />
        <div className={`relative w-[100%] h-[90%] flex justify-start items-center snap-x snap-mandatory snap-center overflow-x-scroll overflow-y-hidden`}>

          {
            CATEGORY_DATA.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.linkTo}
                  passHref
                  className="dining flex flex-col justify-start items-center max-xs:gap-2 gap-5 relative min-w-full h-full snap-x snap-mandatory snap-center"
                >
                  <div className="card w-[90%] h-[88%] overflow-hidden shadow-[1px_2px_4px_#00000060]">
                    <Image
                      src={item.imgURL}
                      alt=""
                      placeholder="blur"
                      loading="lazy"
                      className="bg-img w-full h-full"
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <p className="max-xs:text-[1rem] text-[1.4rem] uppercase font-[600] tracking-wider">{item.name} <span>&#x2192;</span></p>

                </Link>
              )
            })
          }
        </div>
      </div> */}
      {/* ------------------------------------Philosophy--------------------------------------- */}

      <div className="philosophy relative w-full max-sm:h-auto max-lg:h-[250px] lg:h-[250px] xl:h-[280px] bg-[#232321] flex flex-col justify-center items-center gap-10" >

        <h3 className="max-xs:text-[1.2rem] max-sm:text-[1.4rem] max-lg:text-[1rem] lg:text-[1.26rem] xl:text-[1.6rem] font-[600] text-[#c5c5c5] pt-10">THE COLOUR PHILOSOPHY</h3>

        {/* -------------------- Web ------------------------- */}

        <div className="card-container w-full h-4/6 bg-[#232321] flex justify-center items-center gap-7 max-sm:hidden">
          {
            PHILOSOPHY_DATA.map((item, i) => {
              return (
                <div key={i} className="card w-1/6 h-full flex flex-col justify-center items-center gap-2 bg-[#4e4841]">
                  <h4
                    className="text-center font-bold max-lg:text-[0.9rem] lg:text-[0.95rem] xl:text-[1.2rem]"
                    style={{
                      color: `#${item.textColor}`
                    }}
                  >{item.heading}</h4>
                  <p className="text-center text-[#c5c5c5] max-lg:px-4 lg:px-8 xl:px-10 max-lg:text-[0.7rem] lg:text-[0.85rem] xl:text-[1rem] max-lg:leading-4 lg:leading-5 xl:leading-7">{item.details}</p>

                </div>
              )
            })
          }
        </div>

        {/* -------------------- Mobile ------------------------- */}

        <div className={`card-container-mobile relative w-full  max-xs:h-[280px] h-[400px] text-[#c5c5c5] bg-[#232321] gap-10 pt-10 pb-4 
                          flex justify-center items-center sm:hidden
                          `}
        >
          <div className="w-full h-[100%] bg-[#83513780] blur-lg absolute" />
          <div className={`relative w-[80%] max-xs:h-[220px] h-[320px] flex justify-start items-center overflow-hidden`}>

            {
              PHILOSOPHY_DATA.map((item, i) => {
                return (
                  <div key={i}
                    className={`card min-w-[100%] h-full flex justify-center items-center bg-[#4e4841] duration-700 ease-in-out`}
                    style={{
                      transform: `translate(-${slide * 100}%)`,
                    }}
                  >
                    <div
                      className="flex flex-col justify-center items-center gap-2 max-sm:px-20 max-xs:px-5"
                    >
                      <h4
                        className="text-center font-bold text-[1.2rem]"
                        style={{
                          color: `#${item.textColor}`
                        }}
                      >{item.heading}</h4>
                      <p className="text-center text-[#c5c5c5] text-[1rem] leading-5">{item.details}</p>
                    </div>

                  </div>
                )
              })
            }

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-2">
              {PHILOSOPHY_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`w-3 h-3 rounded-full ${idx === slide ? "bg-white" : "bg-[#c5c5c5]"
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>


          </div>

          <button
            onClick={prevSlide}
            type="button" className="absolute top-0 start-[-0.6em] z-3 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#835137]">
              <svg className="w-4 h-4 text-[#c5c5c5] rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            onClick={nextSlide}
            type="button" className="absolute top-0 end-[-0.6em] z-3 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#835137]">
              <svg className="w-4 h-4 text-[#c5c5c5] rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

      </div>

      {/* ------------------------------------Collection--------------------------------------- */}

      <h3
        className="w-full text-center font-[600] pt-10 pb-10 max-lg:text-[1rem] lg:text-[1.26rem] xl:text-[1.6rem] bg-[#232321] text-[#c5c5c5]"
      >SHOP BY COLLECTION</h3>

      <div
        className="collection relative text-[#c5c5c5] w-full max:lg:h-auto lg:h-[900px] xl:h-[1050px] bg-[#232321] md:px-55">

        <div className="cc-container w-full h-full grid grid-cols-[1fr_1fr] max-md:grid-cols-[1fr] gap-10 py-5 max-lg:justify-items-center">

          {
            COLLECTION_DATA.map((item, i) => {
              return (
                <Link key={i} href="###" passHref className="product-card max-sm:w-[85%] max-md:w-[70%] w-[100%] h-[100%] flex flex-col justify-start items-center relative">
                  <div className="card w-full">
                    <Image src={item.imgURL} alt=""
                      placeholder="blur"
                      loading="lazy"
                      className="bg-img w-full h-full"
                    />
                  </div>
                  <p className="lg:text-[0.95rem] xl:text-[1.2rem] capitalize py-4">{item.name} <span>&#x2192;</span></p>

                </Link>
              )
            })
          }
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------- */}

      <div className="w-full h-45 max-xs:h-50 flex justify-center items-center gap-2 bg-[#232321]">

        <div
          className="max-xs:w-4/5 max-sm:w-3/5 w-2/5 h-4/5 bg-[#ffffff07] text-[#c5c5c5] flex flex-col justify-center items-center gap-2"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <h4
            className="text-center max-xs:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem]"
          >CASA BOTANICAL</h4>
          <p className="text-center font-[300] max-xs:px-5 px-10 max-xs:text-[0.9rem] lg:text-[0.95rem] xl:text-[1.2rem] lg:leading-6 xl:leading-7">
            Because every room deserves its own verse, every corner its own mood, and every moment the dignity of intentional design.
          </p>
        </div>

      </div>



      {/* ------------------------------------Product--------------------------------------- */}

      <h3 className="bg-[#232321] w-full text-center text-[#c5c5c5] max-xxs:text-[1.2rem]  max-xs:text-[1.4rem]  max-sm:text-[1.6rem] lg:text-[1.26rem] xl:text-[1.6rem] font-[500] py-5">SHOP BY PRODUCT</h3>


      {/* --------------------------- WEB ------------------------------- */}
      <div className="product w-full max-lg:h-auto lg:h-[920px] xl:h-[1150px] bg-[#232321] text-[#c5c5c5] max-md:px-20 md:px-30 max-sm:hidden" >

        <div className="pc-container w-full h-full grid grid-cols-[1fr_1fr_1fr] max-lg:grid-cols-[1fr_1fr] gap-10 py-5">

          {
            PRODUCT_DATA.map((item, i) => {
              return (
                <Link key={i} href={item.linkTo} passHref
                  className="product-card flex flex-col justify-start items-center relative h-4/4"
                >
                  <div className="card w-full">
                    <Image src={item.imgURL} alt=""
                      placeholder="blur"
                      loading="lazy"
                      className="bg-img w-full h-5/5"
                    />
                  </div>
                  <p className="lg:text-[0.95rem] xl:text-[1.2rem] py-4">{item.name} <span>&#x2192;</span></p>

                </Link>
              )
            })

          }





        </div>
      </div>

      {/* --------------------------- MOBILE ------------------------------- */}

      <div className="product w-full max-xxs:h-[380px] max-xs:h-[460px] h-[560px] bg-[#232321] text-[#c5c5c5] sm:hidden" >

        <div className="pc-container w-full h-full flex gap-5 py-5">

          {
            PRODUCT_DATA.map((item, i) => {
              return (
                <Link key={i} href={item.linkTo} passHref
                  className="product-card flex flex-col justify-start items-center min-w-[90%] relative h-full"
                >
                  <div className="card w-full h-[85%] overflow-hidden">
                    <Image src={item.imgURL} alt=""
                      placeholder="blur"
                      loading="lazy"
                      className="bg-img w-full h-full"
                    />
                  </div>
                  <p className="flex items-center h-[15%] max-xxs:text-[1rem]  max-xs:text-[1.2rem]  max-sm:text-[1.4rem] ">{item.name} <span>&#x2192;</span></p>

                </Link>
              )
            })

          }

        </div>
      </div>

      <div className="w-full h-15 bg-[#232321]" />



      {/* ------------------------------------Counterpart--------------------------------------- */}

      <div
        className="welcome-content relative w-full max-sm:h-auto max-sm:py-10 max-lg:h-[500px] lg:h-[645px] xl:h-[785px] max-sm:flex-col flex justify-center items-center max-sm:gap-10 gap-20 bg-[#5e5e5e]"
      >

        <Image src={Rutezin} alt=""
          placeholder="blur"
          loading="lazy"
          className="w-[45%] max-sm:w-[85%]  max-sm:h-[40%] objectFit-contain max-sm:rounded-xl rounded-md md:rounded-lg lg:rounded-xl"
        />

        <article className="w-[40%] max-sm:w-[85%] max-xs:px-6 max-lg:px-10 px-20 bg-[#232321] max-sm:rounded-xl py-12">
          <h3 className="max-xxs:text-[1.1rem] max-xs:text-[1.2rem] max-sm:text-[1.4rem] max-lg:text-[1rem] lg:text-[1.26rem] xl:text-[1.6rem] text-[#c5c5c5]">Our Botanical Counterpart- Rutezin</h3>
          <br />
          <p
            className="font-thin max-xxs:text-[0.8rem] max-xs:text-[1rem] max-sm:text-[1.1rem] max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem] text-[#c5c5c5]"
          >
            At Casa Botanical, we believe in celebrating thoughtful design and the natural world in every detail. That philosophy extends to our sister brand, Rutezin.
          </p>
          <br />
          <p
            className="font-thin font-thin max-xxs:text-[0.8rem] max-xs:text-[1rem] max-sm:text-[1.1rem] max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem] text-[#c5c5c5]"
          >
            Rutezin crafts artisanal resin jewellery and decor that preserves real botanicals in every piece, turning nature’s fleeting beauty into lasting art. Each design is unique, highlighting the organic shapes, textures, and colours of flowers and foliage in stunning, wearable form.
          </p>
          <br />
          <br />

          <Link href="/blogs" passHref className="font-thin max-xxs:text-[0.85rem] max-xs:text-[1rem] max-sm:text-[1.1rem] max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem] text-[#c5c5c5] bg-[#835137] px-8 py-3 round rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:text-[#fff]" >rutezin.com</Link>


        </article>
      </div>

    </main>
  );
}

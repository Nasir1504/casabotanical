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
    const handleScroll = (event: Event) => {
      setScrolling(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <main className="home-main relative flex justify-center items-center flex-col">

      <div className="mask-container relative w-full max-lg:h-[650px] lg:h-[750px] xl:h-[950px] flex justify-center items-center bg-[#000]" >

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


        <div className="content absolute w-[40vw] h-[15vw] flex justify-center items-center flex-col gap-10 z-5">
          <p className="max-lg:text-[1rem] lg:text-[1.2rem] xl:text-[1.6rem] text-[#c5c5c5]">Welcome to Casa Botanical</p>
          <Link
            href="/collections"
            passHref
            className="bg-[#835137] py-[0.6rem] px-[2.5rem] rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:shadow-lg text-center text-[#c5c5c5] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] hover:text-[#fff]"
          >Shop Now</Link>
        </div>

      </div>


      {/* --------------------------------------------------------------------------- */}

      <div className="welcome-content relative w-full text-[#c5c5c5] max-lg:h-[500px] lg:h-[655px] xl:h-[785px] flex justify-center items-center gap-20 bg-[#5e5e5e]" >

        <Image
          src={welcomeContentImg}
          alt=""
          placeholder="blur"
          loading="lazy"
          className="w-[35%] objectFit-contain rounded-md md:rounded-lg lg:rounded-xl"
        />

        <article className="w-[40%] max-lg:py-5 max-lg:px-6 lg:px-15 xl:px-20 bg-[#232321] py-12">
          <h3 className="max-md:text-[1rem]  lg:text-[1.26rem] xl:text-[1.6rem]">WELCOME TO CASA BOTANICAL!</h3>
          <br />

          <p
            className="font-thin max-lg:text-[0.8rem] lg:text-[0.95rem] xl:text-[1.2rem]"
          >Casa Botanical was born from the belief that the objects we use every day should bring both beauty and purpose to our lives. We create elevated home and tableware—crafted in rich faux leather with meticulous stitching—that transforms everyday moments into something special.
          </p>
          <br />
          <p
            className="font-thin max-lg:text-[0.8rem] lg:text-[0.95rem] xl:text-[1.2rem]"
          >Our signature pieces—from refined cutlery holders and luxurious coasters to versatile trays and elegant vases—are designed to be both functional and striking. Each item carries our hallmark blend of understated luxury, warm earth tones, and botanical inspiration that seamlessly fits into any modern, inviting space.&nbsp;
            <Link href="/blogs" passHref className="text-[#835137] underline underline-offset-2" >Read more</Link>
          </p>

        </article>
      </div>

      {/* -----------------------------------Categorys---------------------------------------- */}

      <h3 className="w-full text-center font-[600] pt-10 max-lg:text-[1rem] lg:text-[1.26rem] xl:text-[1.6rem] bg-[#232321] text-[#c5c5c5]">SHOP BY CATEGORY</h3>

      <div className="categorys relative w-full max-lg:h-[700px] lg:h-[900px] xl:h-[1050px] text-[#c5c5c5] bg-[#232321] gap-10 pt-10 pb-4" >

        <Link href="" passHref className="dining flex flex-col justify-start items-center gap-3 relative">
          <div className="card w-full">
            <Image
              src={DiningImg}
              alt=""
              placeholder="blur"
              loading="lazy"
              className="bg-img w-full h-full hover:"
            />
          </div>
          <p className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">DINING &#x2192;</p>

        </Link>
        <Link href="" passHref className="decore flex flex-col justify-start items-center gap-3 relative">
          <div className="card w-full">
            <Image src={DecorImg} alt=""
              placeholder="blur"
              loading="lazy"
              className="bg-img w-full h-full hover:"
            />
          </div>
          <p className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">HOME DECORE &#x2192;</p>

        </Link>
        <Link href="" passHref className="storage flex flex-col justify-start items-center gap-3 relative">
          <div className="card w-full">
            <Image src={StorageImg} alt=""
              className="bg-img w-full h-full hover:"
            />
          </div>
          <p className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">STORAGE &#x2192;</p>

        </Link>
        <Link href="" passHref className="accessory flex flex-col justify-start items-center gap-3 relative">
          <div className="card w-full">
            <Image src={AccessoryImg} alt=""
              placeholder="blur"
              loading="lazy"
              className="bg-img w-full h-full hover:"
            />
          </div>
          <p className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem]">DINING ACCESSSORY SETS &#x2192;</p>

        </Link>

      </div>
      {/* ------------------------------------Philosophy--------------------------------------- */}

      <div className="philosophy relative w-full max-lg:h-[250px] lg:h-[250px] xl:h-[280px] bg-[#232321] flex flex-col justify-center items-center gap-10" >

        <h3 className="max-lg:text-[1rem] lg:text-[1.26rem] xl:text-[1.6rem] font-[600] text-[#c5c5c5] pt-10">THE COLOUR PHILOSOPHY</h3>

        <div className="card-container w-full h-4/6 bg-[#232321] flex justify-center items-center gap-7">
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


      </div>

      {/* ------------------------------------Collection--------------------------------------- */}

      <h3 className="w-full text-center font-[600] pt-10 pb-10 max-lg:text-[1rem] lg:text-[1.26rem] xl:text-[1.6rem] bg-[#232321] text-[#c5c5c5]">SHOP BY COLLECTION</h3>

      <div
        className="collection relative text-[#c5c5c5] w-full max:lg:h-auto lg:h-[900px] xl:h-[1050px] bg-[#232321] px-55">

        <div className="cc-container w-full h-full grid grid-cols-[1fr_1fr] max-lg:grid-cols-[1fr] gap-10 py-5">

          {
            COLLECTION_DATA.map((item, i) => {
              return (
                <Link key={i} href="###" passHref className="product-card h-4/4 flex flex-col justify-start items-center relative">
                  <div className="card w-full">
                    <Image src={item.imgURL} alt=""
                      placeholder="blur"
                      loading="lazy"
                      className="bg-img w-full h-full"
                    />
                  </div>
                  <p className="lg:text-[0.95rem] xl:text-[1.2rem] capitalize py-4">{item.name} &#x2192;</p>

                </Link>
              )
            })
          }
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------- */}

      <div className="w-full h-45 flex justify-center items-center gap-2 bg-[#232321]">

        <div
          className="w-2/5 h-4/5 bg-[#ffffff07] text-[#c5c5c5] flex flex-col justify-center items-center gap-2"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <h4
            className="text-center lg:text-[1.2rem] xl:text-[1.4rem]"
          >CASA BOTANICAL</h4>
          <p className="text-center font-[300] px-10 lg:text-[0.95rem] xl:text-[1.2rem] lg:leading-6 xl:leading-7">
            Because every room deserves its own verse, every corner its own mood, and every moment the dignity of intentional design.
          </p>
        </div>

      </div>



      {/* ------------------------------------Product--------------------------------------- */}

      <h3 className="bg-[#232321] w-full text-center text-[#c5c5c5] lg:text-[1.26rem] xl:text-[1.6rem] font-[500] py-5">SHOP BY PRODUCT</h3>

      <div className="product w-full max-lg:h-auto lg:h-[920px] xl:h-[1150px] bg-[#232321] text-[#c5c5c5] px-55 md:px-40" >

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
                  <p className="lg:text-[0.95rem] xl:text-[1.2rem] py-4">{item.name} &#x2192;</p>

                </Link>
              )
            })

          }





        </div>



      </div>

      <div className="w-full h-15 bg-[#232321]" />



      {/* ------------------------------------Counterpart--------------------------------------- */}

      <div className="welcome-content relative w-full max-lg:h-[500px] lg:h-[645px] xl:h-[785px] flex justify-center items-center gap-20 bg-[#5e5e5e]" >

        <Image src={Rutezin} alt=""
          placeholder="blur"
          loading="lazy"
          className="w-[45%] objectFit-contain rounded-md md:rounded-lg lg:rounded-xl"
        />

        <article className="w-[40%] max-lg:px-10 px-20 bg-[#232321] py-12">
          <h3 className="max-lg:text-[1rem] lg:text-[1.26rem] xl:text-[1.6rem] text-[#c5c5c5]">Our Botanical Counterpart- Rutezin</h3>
          <br />
          <p
            className="font-thin max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem] text-[#c5c5c5]"
          >
            At Casa Botanical, we believe in celebrating thoughtful design and the natural world in every detail. That philosophy extends to our sister brand, Rutezin.
          </p>
          <br />
          <p
            className="font-thin max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem] text-[#c5c5c5]"
          >
            Rutezin crafts artisanal resin jewellery and decor that preserves real botanicals in every piece, turning nature’s fleeting beauty into lasting art. Each design is unique, highlighting the organic shapes, textures, and colours of flowers and foliage in stunning, wearable form.
          </p>
          <br />
          <br />

          <Link href="/blogs" passHref className="max-lg:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.2rem] text-[#c5c5c5] bg-[#835137] px-8 py-3 round rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:text-[#fff]" >rutezin.com</Link>


        </article>
      </div>

    </main>
  );
}

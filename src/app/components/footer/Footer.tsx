
import Image from "next/image";
import Link from "next/link";

//imgs
import LogoImg from "../../assets/imgs/navbar/casa_botanical_logo.png";


export default function Footer() {

    const SERVICES_DATA = [
        {
            name: "home decore",
            linkTo: "/collections/home-decor"
        },
        {
            name: "dining",
            linkTo: "/collections/dining"
        },
        {
            name: "storage",
            linkTo: "/collections/storage"
        },
        {
            name: "collections",
            linkTo: "/collections/collections"
        },
        {
            name: "contact us",
            linkTo: "/contact"
        },

    ]


    const QUICK_LINKS = [
        {
            name: "about case botanical",
            linkTo: "/about-us"
        },
        {
            name: "shipping policy",
            linkTo: "/shipping-policy"
        },
        {
            name: "terms & conditions",
            linkTo: "/terms-conditions"
        },
        {
            name: "privacy policy",
            linkTo: "/privacy-policy"
        },
        {
            name: "return & replacement policy",
            linkTo: "return-replacement-policy"
        },

    ]
    return (
        <div className="footer-main bg-[#835137] flex flex-col justify-center items-center w-full max-sm:h-auto sm:h-[350px]">

            <section className="max-sm:flex-col max-sm:items-start max-xxs:pl-[3em] max-sm:pl-[4em] max-xxs:pt-[1em] max-sm:pt-[2em] flex justify-center items-center w-full h-[80%] max-sm:gap-10">

                <div className="h-full flex-1" />

                {/* -------------------------------------------------- */}

                <div className="h-full flex-2 flex flex-col justify-center items-start gap-6 max-xxs:pr-20 max-xs:pr-25 xs:pr-40">
                    <Image src={LogoImg} alt="logo"
                        className="sm:w-2/4 max-sm:w-2/5 max-xs:w-4/5"
                    />
                    <p
                        className="max-xs:text-[0.9rem] max-sm:text-[1.2rem] max-lg:text-[0.8rem] text-[1.1rem] text-[#c5c5c5]"
                    >
                        First Floor D-66 , 60 Feet Rd, Chhatarpur Hills, Pocket D, Chattarpur Enclave, Chhatarpur, New Delhi-110074, India
                    </p>
                </div>



                {/* -------------------------------------------------- */}

                <div className="h-full flex-2 flex flex-col justify-center items-start max-xxs:gap-3 gap-5">
                    <h3 className="max-xs:text-[1rem] max-sm:text-[1.2rem] max-lg:text-[1rem] text-[1.2rem] text-[#fff]">Services</h3>

                    <div className="flex flex-col justify-center items-start max-xxs:gap-2 gap-3">
                        {
                            SERVICES_DATA.map((item, i) => {
                                return (
                                    <Link
                                        key={i}
                                        className="max-xs:text-[0.8rem] max-sm:text-[1rem] max-lg:text-[0.7rem] text-[0.9rem] font-[300] hover:text-[#fff] hover:underline cursor-pointer capitalize"
                                        href={`${item.linkTo}`}
                                        passHref
                                    >{item.name}</Link>
                                )
                            })
                        }
                    </div>

                </div>



                {/* -------------------------------------------------- */}

                <div className="h-full flex-2 flex flex-col justify-center items-start max-xxs:gap-3 gap-5">
                    <h3 className="max-xs:text-[1rem] max-sm:text-[1.2rem] max-lg:text-[1rem] text-[1.2rem] text-[#fff]">Quick links</h3>

                    <div className="flex flex-col justify-center items-start gap-3 max-xxs:gap-2">
                        {
                            QUICK_LINKS.map((item, i) => {
                                return (
                                    <Link
                                        key={i}
                                        className="max-xs:text-[0.8rem] max-sm:text-[1rem] max-lg:text-[0.7rem] text-[0.9rem] font-[300] hover:text-[#fff] hover:underline cursor-pointer capitalize"
                                        href={`${item.linkTo}`}
                                        passHref
                                    >{item.name}</Link>
                                )
                            })
                        }
                    </div>

                </div>


                <div className="h-full flex-1" />
            </section>

            <section className="w-full sm:h-[20%] max-sm:h-[50px] flex justify-center items-center max-xs:text-[0.7rem] max-sm:text-[0.8rem] max-lg:text-[0.6rem] text-[0.8rem]" style={{ borderTop: "1px solid #c5c5c550" }} >
                <p>© 2025, casabotanical. All rights reserved</p>
            </section>
        </div>
    )
}

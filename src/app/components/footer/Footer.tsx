
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
        <div className="footer-main bg-[#835137] flex flex-col justify-center items-center w-full h-[350px]">

            <section className="flex justify-center items-center w-full h-[80%]">

                <div className="h-full flex-1" />

                {/* -------------------------------------------------- */}

                <div className="h-full flex-2 flex flex-col justify-center items-start gap-6 pr-40">
                    <Image src={LogoImg} alt="logo"
                        className="w-2/4"
                    />
                    <p
                        className="max-lg:text-[0.8rem] text-[1.1rem] text-[#c5c5c5]"
                    >
                        First Floor D-66 , 60 Feet Rd, Chhatarpur Hills, Pocket D, Chattarpur Enclave, Chhatarpur, New Delhi-110074, India
                    </p>
                </div>



                {/* -------------------------------------------------- */}

                <div className="h-full flex-2 flex flex-col justify-center items-start gap-5">
                    <h3 className="max-lg:text-[1rem] text-[1.2rem] text-[#fff]">Services</h3>

                    <div className="flex flex-col justify-center items-start gap-3">
                        {
                            SERVICES_DATA.map((item, i) => {
                                return (
                                    <Link
                                        key={i}
                                        className="max-lg:text-[0.7rem] text-[0.9rem] font-[300] hover:text-[#fff] hover:underline cursor-pointer capitalize"
                                        href={`${item.linkTo}`}
                                        passHref
                                    >{item.name}</Link>
                                )
                            })
                        }
                    </div>

                </div>



                {/* -------------------------------------------------- */}

                <div className="h-full flex-2 flex flex-col justify-center items-start gap-5">
                    <h3 className="max-lg:text-[1rem] text-[1.2rem] text-[#fff]">Quick links</h3>

                    <div className="flex flex-col justify-center items-start gap-3">
                        {
                            QUICK_LINKS.map((item, i) => {
                                return (
                                    <Link
                                        key={i}
                                        className="max-lg:text-[0.7rem] text-[0.9rem] font-[300] hover:text-[#fff] hover:underline cursor-pointer capitalize"
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

            <section className="w-full h-[20%] flex justify-center items-center max-lg:text-[0.6rem] text-[0.8rem]" style={{ borderTop: "1px solid #c5c5c550" }} >
                <p>© 2025, casabotanical. All rights reserved</p>
            </section>
        </div>
    )
}

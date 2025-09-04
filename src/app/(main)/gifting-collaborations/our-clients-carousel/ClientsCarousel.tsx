
import Image from "next/image";

//imgs
import Logo1 from "../../../assets/imgs/gifting-collections/download.png";
import Logo2 from "../../../assets/imgs/gifting-collections/download_6.png";
import Logo3 from "../../../assets/imgs/gifting-collections/Untitled_design_1.png";
import Logo4 from "../../../assets/imgs/gifting-collections/Untitled_design_4.png";
import Logo5 from "../../../assets/imgs/gifting-collections/Mudra_logo.png";
import Logo6 from "../../../assets/imgs/gifting-collections/Untitled_design.png";
import Logo7 from "../../../assets/imgs/gifting-collections/the-westin.png";
import Logo8 from "../../../assets/imgs/gifting-collections/iifl-capital.png";

export default function ClientsCarousel() {

    const CLIENTS_LOGO_DATA = [
        {
            imgURL: Logo1
        },
        {
            imgURL: Logo2
        },
        {
            imgURL: Logo3
        },
        {
            imgURL: Logo4
        },
        {
            imgURL: Logo5
        },
        {
            imgURL: Logo6
        },
        {
            imgURL: Logo7
        },
        {
            imgURL: Logo8
        },

    ]
    return (
        <div className="w-full h-full carousel-wrapper overflow-hidden whitespace-nowrap relative group">
            <div className="w-full h-full flex animate-slide-left hover:animation-pause group-hover:animation-pause gap-[5%] items-center">

                {/* <!-- First set of 8 items --> */}
                {
                    CLIENTS_LOGO_DATA.map((item, i) => {
                        return (
                            <div key={i}
                                className="inline-block min-w-60 h-[55%] mx-2 flex items-center justify-center">
                                <Image
                                    src={item.imgURL}
                                    alt=""
                                    placeholder="blur"
                                    loading="lazy"
                                    className="w-full h-full"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        )
                    })
                }



                {/* <!-- Duplicate set of 8 items --> */}
                {
                    CLIENTS_LOGO_DATA.map((item, i) => {
                        return (
                            <div key={i}
                                className="inline-block min-w-60 h-[55%] mx-2 flex items-center justify-center">
                                <Image
                                    src={item.imgURL}
                                    alt=""
                                    placeholder="blur"
                                    loading="lazy"
                                    className="w-full h-full"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

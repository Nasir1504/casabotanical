
import Link from "next/link"
import Image from "next/image"
import { StaticImageData } from 'next/image';


type ColCardInterface = {
    Name: string;
    ImgURL: string | StaticImageData;
    LinkTo: string;
}

export default function CollectionsCard({ Name, ImgURL, LinkTo }: ColCardInterface) {
    return (
        <Link href={LinkTo} passHref
            className="collections-card-main flex flex-col justify-start items-center relative w-full xl:h-[450px] lg:h-[350px] max-lg:h-[400px]"  
        >
            <div className="card w-full h-[90%] overflow-hidden">
                <Image src={ImgURL}
                    alt=""
                    placeholder="blur"
                    loading="lazy"
                    className="bg-img w-full h-full"
                />
            </div>
            <p className="lg:text-[0.95rem] xl:text-[1.2rem] py-4 text-[#c5c5c5] capatilise">{Name} <span>&#x2192;</span></p>

        </Link>
    )
}

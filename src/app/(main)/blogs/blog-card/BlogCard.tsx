import Image from "next/image";
import { StaticImageData } from "next/image";


interface BlogCardProps {
    ImgURL: StaticImageData;
    Heading: string;
    Time: string;
    Details: string[];
}


export default function BlogCard({ ImgURL, Heading, Time, Details }: BlogCardProps) {
    const date = new Date(Time);
    const formatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="blog-card-main w-full h-full flex flex-col justify-start items-center gap-3 max-sm:gap-0">
            <div className="cover-img w-full h-[50%] overflow-hidden">
                <Image
                    src={ImgURL}
                    alt={Heading}
                    className="w-full h-full objectFit-cover"
                    placeholder="blur"
                    loading="lazy"
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <br />
            <h3 className="max-lg:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.6rem] font-[300] leading-8 w-full px-8 max-sm:px-2">{Heading.slice(0, 55)}...</h3>

            <p className="max-lg:text-[0.6rem] lg:text-[0.65rem] xl:text-[0.8rem] text-left w-full px-8 max-sm:px-2">{formatted}</p>
            <br className="sm:hidden" />

            <p className="max-lg:text-[0.8rem] lg:text-[0.8rem] xl:text-[1rem] px-8 max-sm:px-2 leading-6">{Details[0].slice(0, 200)}...</p>
        </div>
    )
}

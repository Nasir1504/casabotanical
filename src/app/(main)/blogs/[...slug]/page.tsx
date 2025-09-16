
import Image from "next/image";
import Link from "next/link";

//style
import "../blogs.scss";

import { BLOGS_DATA } from "../blogData";

export default async function page({ params }: {
    params: Promise<{ slug: string[] }>
}) {

    const { slug } = await params;
    const decodedSegments = slug.map(segment => decodeURIComponent(segment));
    const slugString = decodedSegments.join("/");
    const blogExists = BLOGS_DATA.some((blog) => {
        return blog.heading.toLowerCase().replace(/\s+/g, '-') === slugString
    });

    if (slug?.length > 1) {
        return <>Not found</>
    }



    if (!blogExists) {
        // console.log(blogExists)
        return <div className="p-50">Page Found Not Found</div>
    }

    const date = new Date(BLOGS_DATA[0].time);
    const formatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="individual-blog-main w-full h-auto bg-[#232321] flex flex-col justify-center items-start gap-20 max-xs:gap-10 px-[15%] max-xs:px-[5%] pt-[4%]">
            <section className="blog-cover-main w-full max-xs:h-[400px] lg:h-[550px] xl:h-[750px] flex">
                <Image
                    className="w-full h-full"
                    style={{
                        objectFit: "cover"
                    }}
                    src={BLOGS_DATA[0].imgURL}
                    alt=""
                    placeholder="blur"
                    loading="lazy"

                />

            </section>
            <h3 className="max-lg:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem] text-[#c5c5c5]">
                {BLOGS_DATA[0].heading} <br />
                <span className="text-[0.8rem]">
                    {formatted}
                </span>
            </h3>

            <section className="blog-cover-main w-full h-cuto flex flex-col gap-6 text-[#c5c5c5] pb-10">
                {
                    BLOGS_DATA[0].details.map((item, i) => {
                        return <p key={i} className="max-lg:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]">{item}</p>
                    })
                }
            </section>

            <section className="back-to-blog-btn w-full h-[6em] text-center">
                <Link
                    className="link-tag text-[#835137] max-lg:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem]"
                    href={'/blogs'} passHref replace>
                    <span className="arrow-back max-lg:text-[1.2rem] lg:text-[1.6rem] xl:text-[2rem]">&#x2190;</span> Back to blogs

                </Link>
            </section>

        </div>
    )
}

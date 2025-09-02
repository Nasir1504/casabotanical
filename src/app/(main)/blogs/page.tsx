
import Link from "next/link"

import BlogCard from "./blog-card/BlogCard"

//styles
import "./blogs.scss";

//data
import { BLOGS_DATA } from "./blogData"


export default function Blogs() {
    return (
        <div className="blogs-main bg-[#232321] flex flex-col justify-center items-center gap-20 pt-35">

            <h3 className="max-lg:text-[2.5rem] xl:text-[3.5rem] lg:text-[3rem] text-[#c5c5c5] uppercase">Blogs</h3>

            <section className="content-section w-[80%] grid grid-cols-[1fr_1fr_1fr] max-lg:grid-cols-[1fr_1fr] max-lg:gap-10 lg:gap-10 xl:gap-20">
                {
                    BLOGS_DATA.map((item, i) => {
                        const headingLowerCase = item.heading.replace(/ /g, "-").toLowerCase();
                        return <Link
                            href={`blogs/${headingLowerCase}`}
                            passHref
                            className="card h-[35rem] cursor-pointer"
                            key={i}
                        >
                            <BlogCard
                                ImgURL={item.imgURL}
                                Heading={item.heading}
                                Time={item.time}
                                Details={item.details}
                            />
                        </Link>
                    })
                }
            </section>

        </div>
    )
}

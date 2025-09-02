
import Image from "next/image";
import Link from "next/link";

//imgs
import AboutUsImg from "../../assets/imgs/about-us/about-us_image.png";

export const metadata = {
    title: "About-us",
}

export default function page() {
    return (
        <div className="about-us-main bg-[#232321] flex justify-center items-start py-45 px-45 max-lg:py-35 max-lg:px-25">

            <Image
                className="w-[50%] h-[85vh]"
                src={AboutUsImg}
                alt=""
                placeholder="blur"
                loading="lazy"
                style={{
                    objectFit: "cover"
                }}
            />

            <section className="right-content flex flex-col pl-20 text-[#c5c5c5] gap-5">
                <h3 className="xl:text-[2rem] lg:text-[1.6rem] max-lg:text-[1.4rem]">WELCOME TO CASA BOTANICAL!</h3>

                <p className="xl:text-[1.1rem] lg:text-[1rem] max-lg:text-[0.9rem]">
                    Welcome to <b>Casa Botanical</b>, where timeless design meets mindful craftsmanship.
                    <br />
                    <br />
                    Casa Botanical was born from the belief that the objects we use every day should bring both beauty and purpose to our lives. We create elevated home and tableware—crafted in rich faux leather with meticulous stitching—that transforms everyday moments into something special.
                    <br />
                    <br />
                    Our signature pieces—from refined cutlery holders and luxurious coasters to versatile trays and elegant vases—are designed to be both functional and striking. Each item carries our hallmark blend of understated luxury, warm earth tones, and botanical inspiration that seamlessly fits into any modern, inviting space.
                    <br />
                    <br />
                    As part of the Rutezin family, Casa Botanical shares a deep respect for nature’s artistry. Rutezin, our subsidiary brand, is renowned for creating one-of-a-kind resin jewelry and décor that preserves real botanicals in timeless designs. Inspired by Rutezin’s commitment to natural beauty and artisanal craftsmanship, Casa Botanical extends that philosophy to the home—offering carefully considered pieces that celebrate organic textures, rich colors, and the quiet luxury of well-made things.
                    <br />
                    <br />
                    We believe great design is in the details. That’s why each Casa Botanical product is crafted to be durable enough for daily use while elevating everything from formal dinners to morning coffee at your desk. With versatile, thoughtfully designed pieces, we aim to help you style your space with ease and intention.
                    <br />
                    <br />
                    <b>Elevate your everyday. Live beautifully with Casa Botanical.</b>
                </p>

                <Link
                    href="/collections"
                    passHref
                    className="bg-[#835137] w-[25%] py-[0.6rem] rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:shadow-lg text-center text-[#c5c5c5] max-lg:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem] hover:text-[#fff]"
                >Shop Now</Link>
            </section>


        </div>
    )
}


import Link from "next/link";
import Image from "next/image"

//components
import ClientsCarousel from "./our-clients-carousel/ClientsCarousel";
import CollaborateForm from "./collaborate-form/CollaborateForm";

//imgs
import Frame1 from "../../assets/imgs/gifting-collections/filler_image_2.png";
import Frame2 from "../../assets/imgs/gifting-collections/retailers.png";
import Frame3 from "../../assets/imgs/gifting-collections/reastaurants_and_hotels.png";
import Frame4 from "../../assets/imgs/gifting-collections/corporate_events.png";
import Frame5 from "../../assets/imgs/gifting-collections/weddings.png";


export default function GiftingCollaborations() {
    return (
        <div className="gifting-collaborations-main w-full h-auto flex flex-col justify-center items-center bg-[#232321]">
            <div className="w-full h-[150px]" />

            <section className="w-full xl:h-[1250px] lg:h-[995px] max-lg:h-[855px] flex justify-center items-start gap-[5%]">
                <div className="w-[40%] h-[95%]">
                    <Image
                        src={Frame1}
                        alt=""
                        className="w-full h-full"
                        style={{ objectFit: "cover" }}
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>

                <div className="w-[40%] h-[80%] flex flex-col justify-start items-start gap-6">
                    <h3
                        className="max-lg:text-[1.8rem] lg:text-[2.5rem] xl:text-[3.2rem] font-[500]"
                    >Collaborate with Casa Botanical</h3>
                    <p className="max-lg:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] font-[300] max-lg:leading-6 lg:leading-7 xl:leading-9 tracking-widest">
                        Elevate Your Experience. Impress Your Guests. Delight Your Clients.
                        <br />
                        <br />
                        At Casa Botanical, we believe in the art of thoughtful design—where every detail tells a story of refinement and care. We invite you to partner with us and bring this philosophy to your own business or event.
                        <br />
                        <br />
                        Our premium collections of luxury home décor, curated hampers, and handcrafted accessories are designed not only for personal spaces, but to enrich experiences wherever they’re shared. Whether you’re a retailer looking to offer discerning customers something unique, a hotel or restaurant seeking to create unforgettable settings, or an event planner in search of sophisticated gifting solutions—Casa Botanical is here to collaborate.
                        <br />
                        <br />
                        We understand that for businesses, true partnership lies in personalisation. That’s why everything at Casa Botanical can be tailored to your vision. From embossing your own brand name onto our premium products to developing fully curated, custom selections that align with your aesthetic and clientele, we offer a flexible, design-led approach to collaboration. Whether it’s creating signature pieces for your line, building bespoke hampers for VIP gifting, or crafting décor solutions that seamlessly fit your brand’s story, our team is dedicated to making it possible.
                        <br />
                        <br />
                        At Casa Botanical, customisation isn’t just an option—it’s our promise to help you deliver experiences as unique and memorable as your brand itself. Let’s create something truly special together.
                    </p>
                    <Link
                        href="/collections"
                        passHref
                        className="bg-[#835137] py-[0.6rem] px-[2.5rem] rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:shadow-lg text-center text-[#c5c5c5] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] hover:text-[#fff]"
                    >Shop Now</Link>
                </div>
            </section>


            {/* ----------------------------------------------------------------------- */}

            <section className="w-full xl:h-[750px] lg:h-[580px] max-lg:h-[455px] flex justify-center items-center gap-[5%]">

                <div className="w-[40%] h-[80%] flex flex-col justify-center items-start gap-6">
                    <h3
                        className="max-lg:text-[1.8rem] lg:text-[2.5rem] xl:text-[3.2rem] font-[500]"
                    >Retailers</h3>
                    <p className="max-lg:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] font-[300] max-lg:leading-6 lg:leading-7 xl:leading-9 tracking-widest">
                        Stock your shelves with timeless, coordinated design. Casa Botanical offers retailers a range of elegant, high-quality products that appeal to customers looking for luxury without compromise. From artisanal trays and coasters to complete dining hampers and décor sets, our collections blend seamlessly into modern, classic, and eclectic store environments. Give your customers something truly special to take home.
                    </p>
                </div>
                <div className="w-[40%] h-[80%]">
                    <Image
                        src={Frame2}
                        alt=""
                        className="w-full h-full"
                        style={{ objectFit: "cover" }}
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>

            </section>


            {/* ----------------------------------------------------------------------- */}

            <section className="w-full xl:h-[750px] lg:h-[580px] max-lg:h-[455px] flex justify-center items-center gap-[5%]">
                <div className="w-[40%] h-[80%]">
                    <Image
                        src={Frame3}
                        alt=""
                        className="w-full h-full"
                        style={{ objectFit: "cover" }}
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
                <div className="w-[40%] h-[80%] flex flex-col justify-center items-start gap-6">
                    <h3
                        className="max-lg:text-[1.8rem] lg:text-[2.5rem] xl:text-[3.2rem] font-[500]"
                    >Restaurants and Hotels</h3>
                    <p className="max-lg:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] font-[300] max-lg:leading-6 lg:leading-7 xl:leading-9 tracking-widest">
                        Your space is your brand. Every detail contributes to the story you tell your guests. Casa Botanical offers sophisticated solutions to elevate your dining tables, suites, and common areas. Our coordinated sets of coasters, placemats, napkin rings, and trays ensure a polished, harmonious look, while our premium materials promise durability for high-volume use. Impress your patrons with thoughtful, elegant touches that make every visit memorable.
                    </p>
                </div>

            </section>

            {/* ----------------------------------------------------------------------- */}

            <section className="w-full xl:h-[750px] lg:h-[580px] max-lg:h-[455px] flex justify-center items-center gap-[5%]">

                <div className="w-[40%] h-[80%] flex flex-col justify-center items-start gap-6">
                    <h3
                        className="max-lg:text-[1.8rem] lg:text-[2.5rem] xl:text-[3.2rem] font-[500]"
                    >Corporate Events</h3>
                    <p className="max-lg:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] font-[300] max-lg:leading-6 lg:leading-7 xl:leading-9 tracking-widest">
                        Show your clients, partners, and teams you value them with gifts that stand out. Casa Botanical’s curated hampers are perfect for corporate gifting—sophisticated, practical, and memorable. From festive end-of-year gifts to VIP client thank-yous, our premium sets signal professionalism and good taste, leaving a lasting impression that goes beyond the moment.
                    </p>
                </div>
                <div className="w-[40%] h-[80%]">
                    <Image
                        src={Frame4}
                        alt=""
                        className="w-full h-full"
                        style={{ objectFit: "cover" }}
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>

            </section>

            {/* ----------------------------------------------------------------------- */}

            <section className="w-full xl:h-[750px] lg:h-[580px] max-lg:h-[455px] flex justify-center items-center gap-[5%]">
                <div className="w-[40%] h-[80%]">
                    <Image
                        src={Frame5}
                        alt=""
                        className="w-full h-full"
                        style={{ objectFit: "cover" }}
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
                <div className="w-[40%] h-[80%] flex flex-col justify-center items-start gap-6">
                    <h3
                        className="max-lg:text-[1.8rem] lg:text-[2.5rem] xl:text-[3.2rem] font-[500]"
                    >Weddings and Celebrations</h3>
                    <p className="max-lg:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] font-[300] max-lg:leading-6 lg:leading-7 xl:leading-9 tracking-widest">
                        Celebrate life’s biggest moments with elegance. Casa Botanical offers bespoke hamper solutions and décor accents perfect for weddings and special occasions. Our coordinated designs make exceptional gifts for couples starting a new chapter, while our stylish trays, vases, and tableware elevate receptions and dinners with cohesive, luxurious charm. Create memories wrapped in beauty.
                    </p>
                </div>

            </section>

            {/* ----------------------------------------------------------------------- */}

            <h3 className="max-lg:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] tracking-widest font-[600] xl:w-[580px] lg:w-[520px] max-xl:w-[420px] text-center">{"Let's Create Something Beautiful Together"}</h3>
            <p className="max-lg:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] font-[300] tracking-widest] xl:w-[540px] lg:w-[440px] max-xl:w-[340px] text-center">Elevate Your Experience. Impress Your Guests. Delight Your Clients</p>
            <br />

            <section className="xl:w-[580px] w-[580px]">
                <CollaborateForm />
            </section>

            {/* ----------------------------------------------------------------------- */}

            <section className="w-full xl:h-[300px] lg:h-[220px] max-lg:h-[150px]">
                <ClientsCarousel />
            </section>

        </div>
    )
}

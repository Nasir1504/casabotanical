import FormComp from "./Form-Comp";
export const metadata = {
    title: "Contact",
}

export default function page() {

    return (
        <div className="contact-main py-40 flex justify-center items-center flex-col relative">
            <h3 className='text-[2rem] w-[60%] text-left'>Contact</h3>
            <br />
            <br />
            <br />
            <div className="w-[60%] h-full">
                <FormComp />
            </div>

        </div>
    )
}

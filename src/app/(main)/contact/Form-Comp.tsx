"use client"

export default function FormComp() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
            <form
                className="form-main flex flex-wrap gap-x-[2%] gap-y-[2vh] w-full"
                onSubmit={handleSubmit}
            >
                <input
                    className='border border-[#c5c5c550] w-[49%] min-w-[250px] p-3'
                    type='text'
                    placeholder='Name'
                    autoFocus
                />

                <input
                    className='border border-[#c5c5c550] w-[49%] min-w-[250px] p-3'
                    type='email'
                    placeholder='Email *'
                />

                <input
                    className='border border-[#c5c5c550]  w-[100%] min-w-[350px] p-3'
                    type='tel'
                    placeholder='Phone number'
                />

                <textarea
                    className='border border-[#c5c5c550] w-[100%] min-w-[350px] p-3'
                    name="comments"
                    placeholder="Comment"
                />
                <br />
                <br />

                <div className=" w-[100%]">
                    <button
                        type='submit'
                        className="bg-[#835137] w-[10%] min-w-[80px] py-[0.6rem] rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:shadow-lg text-center text-[#c5c5c5] max-lg:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem] hover:text-[#fff]"

                    >Send</button>
                </div>
            </form>
    )
}

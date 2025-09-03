"use client";


import React, { useState } from "react";
import PhoneInput, { type Value } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

//styles
import "./form-styles.scss";

export default function CollaborateForm() {
    const [phone, setPhone] = useState<Value>();

    console.log(phone);

    return (
        <div className="collaborate-form-main h-auto">
            <form className="flex flex-col gap-6">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Email Address"
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"

                />

                <PhoneInput
                    international
                    defaultCountry="IN"
                    value={phone}
                    onChange={setPhone}
                    className="phone-input flex text-[1rem] max-md:rounded-md lg:rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Business/Brand Name"
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"

                />
                <input
                    type="text"
                    placeholder="Designation/Role"
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"

                />
                <div>
                    <input type="checkbox" id="retailer" name="retailer"
                        className="text-[1rem]"
                    /> &nbsp;
                    <label htmlFor="scales"
                        className="text-[1rem]"
                    >Retailer</label>
                </div>
                <div>
                    <input type="checkbox" id="hotel" name="hotel"
                        className="text-[1rem]"
                    /> &nbsp;
                    <label htmlFor="scales"
                        className="text-[1.2rem]"
                    >Restaurant/Hote</label>
                </div>
                <div>
                    <input type="checkbox" id="gifting" name="gifting"
                        className="text-[1rem]"
                    /> &nbsp;
                    <label htmlFor="scales"
                        className="text-[1rem]"
                    >Gifting</label>
                </div>
                <div>
                    <input type="checkbox" id="celebration" name="celebration"
                        className="text-[1rem]"
                    /> &nbsp;
                    <label htmlFor="scales"
                        className="text-[1rem]"
                    >Celebration</label>
                </div>
                <input
                    type="text"
                    placeholder="City"
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"

                />
                <textarea id="w3review" name="w3review" rows={4}
                    placeholder="Designation/Role"
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"

                />
                <label htmlFor="cars">Order Volume</label>

                <select
                    className="bg-[#fff] p-[1em] text-[#000] text-[1rem] max-md:rounded-md lg:rounded-lg"
                    name="order" id="order"
                >
                    <option value="volvo">----</option>
                    <option value="volvo">100-150</option>
                    <option value="saab">150-300</option>
                    <option value="mercedes">300-500</option>
                    <option value="audi">500-1000</option>
                    <option value="audi">1000+</option>

                </select>

                <label
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"

                    htmlFor="avatar">Choose a profile picture:</label>

                <input
                    type="file" id="avatar" name="avatar" accept="  image/png, image/jpeg, .pdf, .doc, .docx"
                    className="text-[1rem] max-md:rounded-md lg:rounded-lg"
                />
                <button
                    className="bg-[#835137] py-[0.5em] rounded-md md:rounded-lg lg:rounded-xl cursor-pointer hover:shadow-lg text-center text-[#fff] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] hover:text-[#fff]"
                >Shop Now</button>
            </form>
        </div >
    );
}

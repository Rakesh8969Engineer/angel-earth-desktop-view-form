import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [subscriptionOptions, setSubscriptionOptions] = useState({
    newsletter: false,
    saveMeLetters: false,
  });

  const handleChanged = (e) => {
    const { name, checked } = e.target;
    setSubscriptionOptions({ ...subscriptionOptions, [name]: checked });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <div className="Form-container flex justify-center items-center w-full mobile:flex-wrap bg-black">
        <div className="w-[70%] h-[100vh] bg-[#100505f1]  pt-[10rem] justify-start ">
          <div className="flex flex-col items-center  gap-5 ">
            <div>
              <p className="font-bold text-[#454545]  text-3xl underline text-center">
                CONTACT US
              </p>
            </div>
            <div className="flex gap-4 text-white">
              <div className="font-semibold flex flex-col gap-3">
                <p>Email:</p>
                <p>Phone Number:</p>
                <p>Location:</p>
              </div>
              <div className="flex flex-col gap-3">
                <p> support@angel-earth.com </p>
                <p>780-345-2344</p>
                <p>
                  {" "}
                  2233st 32ave SW,Edmonton <br />
                  T6X 1L1
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="  w-full       bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/2965.jpeg')] bg-cover   pb-[3rem]  ">
          <div className="flex flex-col text-white text-center pt-[4rem]">
            <p className="font-bold text-3xl"> Get In Touch</p>
            <p>Our Friendly team would love to hear form you</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto  p-6  shadow-md"
          >
            <div className="grid grid-cols-2 py-[1rem] gap-x-[2rem] w-fulls">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  style={{ writingMode: "vertical-rl" }}
                  className="w-full border border-gray-300 p-2  bg-[#0d0d0d]  focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="LastName"
                  onChange={handleChange}
                  className="w-full border  bg-[#0d0d0d] border-gray-300 p-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full border  bg-[#0d0d0d] border-gray-300 p-2  focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone"
                  onChange={handleChange}
                  className="w-full border  bg-[#0d0d0d] border-gray-300 p-2  focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border  bg-[#0d0d0d] border-gray-300 p-2  focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="my-10 ">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="w-full border  bg-[#0d0d0d] border-gray-300 p-2  focus:outline-none focus:border-blue-500"
                rows="8"
                required
              />
            </div>

            <div className="flex justify-between gap-4 items-center space-x-4">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={subscriptionOptions.newsletter}
                  onChange={handleChanged}
                  className="form-checkbox h-5 w-5 text-white"
                />
                <label className="text-gray-600 text-sm">
                  Send me Your<span className="text-white p-2">NewsLetter</span>
                </label>
              </div>

              <div className="">
                <button
                  type="submit"
                  className=" bg-tansparent text-white py-3 font-semibold  border border-[#413434]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

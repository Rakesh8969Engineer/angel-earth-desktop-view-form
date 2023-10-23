import React from "react";

function Footer() {
  return (
    <div className="footer-container bg-[#000000]">
      <div className="text-[#9f9595] text-4xl font-bold">
        <p className="stretchtext">
          COME TO THE <span className="text-blue-500">FUTURE</span> OF PAYMENTS.
        </p>
      </div>

      <div className="flex justify-around mt-10 ">
        <div className="flex flex-col w-[30%] gap-4">
          <div>
            <p className="text-center text-white">Download App</p>
          </div>
          <div className="flex gap-4">
            <div className="w-[200px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" />
            </div>

            <div className="w-[200px] ">
              <img
                src=" https://rwsbank.com.ua/images/appstores/google_play_black_en.png
            
            "
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-white font-bold"> NAVIGATION</p>
            <ul className="text-[#9f9595] flex flex-col gap-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Why D-Transfer</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold">SERVICES</p>

            <ul className="text-[#9f9595]   flex flex-col gap-2 ">
              <li>1 Day Push Campaign</li>
              <li>Flyers</li>
              <li>Coupons</li>
              <li>Storage</li>
              <li>D-Transfer</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold">CAREERS</p>
            <ul className="text-[#9f9595]  flex flex-col gap-2  ">
              <li>Full-Time</li>
              <li> Part-Time</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mx-10 my-3" />
      <div className="mx-10  text-[#9f9595] flex justify-between p-5">
        <div className="social  flex gap-3 ">


          <span class="relative inline-block">
            Twitter
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
          </span>

          <span class="relative inline-block">
            Instagram
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
          </span>

          <span class="relative inline-block">
            Tiktok
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
          </span>

        </div>

        <div className="flex gap-3">
          <span>© 2023 Angle-Earth Corporation.All rights reserved</span>

          <span class="relative inline-block">
            Term And Conditions
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
          </span>

          <span class="relative inline-block">
            Privacy Policy
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

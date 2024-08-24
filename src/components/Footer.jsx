import React from "react";
import { assets } from "../assets/frontend_assets/assets";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row  grid-cols[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore
            quas quia ullam earum nulla voluptate dolorem pariatur sapiente at
            perspiciatis nam, cum atque. Odio nostrum fugiat quos dolor
            molestiae?
          </p>
        </div>
        <div>
          <p className="text-xl font-bold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 text-[16px]">
            <li>Home</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl  mb-5 uppercase  font-bold">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600 text-[16px]">
            <li>9843804228</li>
            <li>Contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5  text-sm text-center">
          Copyright 2024@ forever.com -All Right Reserved.
        </p>
      </div>
    </>
  );
};

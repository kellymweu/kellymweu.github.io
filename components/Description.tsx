import { socials } from "@/constants";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const Description = () => {
  return (
    <div>
      <div className="flex font-semibold text-3xl">
        <p>My name is &nbsp;</p>
        <span className="hover:text-red-500 cursor-pointer">Kelly Mweu</span>
      </div>
      <div>
        {socials.map((link, { icon: Icontype }) => (
          <Link
            href={link.href}
            key={link.title}
            target="_blank"
            className="hover:bg-white hover:text-red-500 rounded-xl p-2 hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Description;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMail, CiUser } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import peworld from "@/public/assets/peworld(3).png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4">
      <Link href={`/`}>
        <Image className="cursor-pointer" src={peworld} alt="peworld" width={100} height={100} />
      </Link>
      
      <div className="flex items-center space-x-4">
        <CiMail className="cursor-pointer" />
        <FaRegBell className="cursor-pointer" />
        <Link href={`/main/profile`}>
          <CiUser className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

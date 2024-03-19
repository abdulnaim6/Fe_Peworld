"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMail, CiUser } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import peworld from "@/public/assets/peworld(3).png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleProfileClick = () => {
    if (role === "worker") {
      window.location.href = "/main/profile";
    } else if (role === "recruiter") {
      window.location.href = "/main/profilePerekrut";
    } else {
      console.error("Token tidak valid atau tidak tersedia.");
      window.location.href = "/auth/login";
    }
  };

  const handleNotifClick = () => {
    if (role === "worker") {
      window.location.href = "/main/notif/workers";
    } else if (role === "recruiter") {
      window.location.href = "/main/notif/perekrut";
    } else {
      console.error("Token tidak valid atau tidak tersedia.");
      window.location.href = "/auth/login";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    window.location.href = "/auth/login";
  };

  return (
    <div className="flex justify-between items-center bg-gray-200 p-4">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src={peworld}
          alt="peworld"
          width={100}
          height={100}
        />
      </Link>

      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <button onClick={handleLogout} className="cursor-pointer">
            Logout
          </button>
          <CiMail className="cursor-pointer" />
          <FaRegBell className="cursor-pointer" onClick={handleNotifClick} />
          <CiUser className="cursor-pointer" onClick={handleProfileClick} />
        </div>
      ) : (
        <div className="d-flex">
          <Link href="/auth/login">
            <button className="cursor-pointer bg-white p-3 text-purple-800 rounded-r rounded-l mr-5">
              Masuk
            </button>
          </Link>
          <Link href="/auth/workers/register">
            <button className="cursor-pointer bg-purple-800 p-3 text-white rounded-r rounded-l">
              Masuk
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

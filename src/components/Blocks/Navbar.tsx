"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import asylum from "../../assets/logo-transparent.png";
import { FaFolder, FaHome, FaList, FaListUl, FaUsers } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg border-b-2 border-[#396C2F]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#A3C664] font-bold">AsyLum </div>
        <div className="flex space-x-10">
          <Link
            href="/"
            className="hover:text-[#A3C664] flex items-center   transition"
          >
            <FaHome /> Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#A3C664]  gap-1 flex items-center transition"
          >
            <FaUsers /> About
          </Link>

          <Link
            href="/listings"
            className="hover:text-[#A3C664] gap-1 flex items-center transition"
          >
            <HiOutlineClipboardDocumentList /> All Rentals
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/dashboard" className="hover:text-[#A3C664] transition">
            <button className="px-2 py-2 rounded-2xl hover:text-[#A3C664] transition border-2">
              Dashboard
            </button>
          </Link>

          {isLoggedIn ? (
            <>
              <Link href="/profile" className="hover:text-[#A3C664] transition">
                My Profile
              </Link>
            </>
          ) : (
            <Link href="/login" className="hover:text-[#A3C664] transition">
              <button className="px-2 py-2 rounded-2xl hover:text-[#A3C664] transition border-2">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

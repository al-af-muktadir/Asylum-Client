"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg border-b-2 border-[#396C2F]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#A3C664]">Futuristic Rent</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-[#A3C664] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#A3C664] transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/listings" className="hover:text-[#A3C664] transition">
              All Rentals
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-[#A3C664] transition">
              Dashboard
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-[#A3C664] transition"
                >
                  My Profile
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/auth" className="hover:text-[#A3C664] transition">
                Login / Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

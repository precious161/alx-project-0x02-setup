import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">StayFinder</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link href="/home" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-3 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          {/* ใช้ Link จาก react-router-dom และใส่ path แบบ absolute */}
          <Link to="/#hero" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/#aboutme" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/#projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link to="/#contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
        {/* เมนูสำหรับมือถือ (ถ้าต้องการ dropdown menu เพิ่มเติมสามารถใส่ได้ภายหลัง) */}
      </div>
    </nav>
  );
}

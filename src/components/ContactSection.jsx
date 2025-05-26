import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen pt-15 bg-gray-100 px-4 py-10">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">ติดต่อฉัน</h2>
    <div className="w-20 h-1 bg-indigo-600 mx-auto mt-2 mb-3 rounded" />
    <p className="text-gray-600">สนใจร่วมงานหรือมีคำถาม? ติดต่อฉันได้ที่นี่</p>
  </div>

  <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* ข้อมูลการติดต่อ */}
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-sm md:text-base">
      <h3 className="text-lg font-semibold mb-4">ข้อมูลการติดต่อ</h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center space-x-2">
          <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
            <Mail size={18} />
          </div>
          <span>chayanon.9102@gmail.com</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
            <Phone size={18} />
          </div>
          <span>+66(0)61-282-4292</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
            <MapPin size={18} />
          </div>
          <span>ตรัง, ประเทศไทย</span>
        </li>
      </ul>

      <h4 className="font-semibold mt-6 mb-3">ติดตามฉัน</h4>
<div className="flex space-x-3">
  <a href="https://web.facebook.com/chya.nnth.vththi.keux/" target="_blank" rel="noopener noreferrer">
    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition">
      <FontAwesomeIcon icon={faFacebook} size="lg" />
    </div>
  </a>
  <a href="https://www.instagram.com/bn.blk_45/" target="_blank" rel="noopener noreferrer">
    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition">
      <FontAwesomeIcon icon={faInstagram} size="lg" />
    </div>
  </a>
  <a href="https://github.com/BLK45" target="_blank" rel="noopener noreferrer">
    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition">
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </div>
  </a>
</div>

    </div>

    {/* ฟอร์ม */}
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-sm md:text-base">
      <h3 className="text-lg font-semibold mb-4">ส่งข้อความถึงฉัน</h3>
      <form className="space-y-3">
        <div>
          <label className="block mb-1 font-medium">ชื่อ</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">อีเมล</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">หัวข้อ</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">ข้อความ</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          disabled
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          ส่งข้อความ
        </button>
      </form>
    </div>
  </div>
</section>

  );
}

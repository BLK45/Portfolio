import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Programmer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    //  รูปภาพพื้นหลัง
    <section
      id="hero"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white font-kanit pt-20"
      style={{ backgroundImage: "url('/Img/bg-code.jpg')" }}
    >
    {/* //วิดีโอพื้นหลัง
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center text-white font-kanit pt-20 overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />  */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            สวัสดี, ผมชื่อ <span className="text-indigo-600">ชญานนท์ ฤทธิ์เกื้อ</span>
          </h1>
          <div className="relative inline-block mb-6 h-[1.5em]">
            <h2
              ref={el}
              className="absolute top-0 left-0 text-2xl md:text-3xl font-bold text-indigo-600 whitespace-nowrap"
            ></h2>
            <span
              aria-hidden="true"
              className="invisible text-2xl md:text-3xl font-bold whitespace-nowrap"
            >
              โปรแกรมเมอร์ Programmer Developer
            </span>
          </div>

          <p className="text-lg md:text-xl text-white mb-8 max-w-xl mx-auto md:mx-0">
            ในฐานะนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในงาน ผมเชี่ยวชาญในการสร้างเว็บแอปพลิเคชันที่สวยงามและใช้งานง่าย พร้อมมุ่งมั่นในการเรียนรู้อย่างต่อเนื่องและติดตามเทคโนโลยีใหม่ ๆ อยู่เสมอ
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              onClick={() => (window.location.href = "#contact")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
            >
              ติดต่อฉัน
            </button>

            <button
              onClick={() => (window.location.href = "#projects")}
              className="bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-3 px-8 rounded-lg border-2 border-indigo-600 shadow-md transition-all duration-200"
            >
              ดูผลงาน
            </button>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
          <div className="relative">
            <div className="rounded-full border-4 border-indigo-500 w-56 h-56 md:w-80 md:h-80 bg-gray-200 flex items-center justify-center shadow-xl">
              {/* Placeholder for profile image */}
              <img
                src="/Img/1.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-5 right-5 bg-white rounded-full shadow-lg p-4 border-2 border-indigo-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

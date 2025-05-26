import { Link } from "react-router-dom";
import React from "react";
import { FaTasks, FaShoppingCart, FaBlog } from "react-icons/fa";
import projectData from "../data/projectData"

export default function ProjectsSection() {
  // แปลง object เป็น array
  const projectsArray = Object.entries(projectData).map(([id, project]) => ({
    id,
    ...project,
  }));

  return (
    <section
      id="projects"
      className="pt-20 pb-30 bg-gray-100 px-6 md:px-20 py-10" 
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">ผลงานของฉัน</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-2 mb-3 rounded" />
        <p className="text-gray-600">โปรเจกต์ที่ฉันได้พัฒนาในช่วงที่ผ่านมา</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsArray.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col transition hover:shadow-lg"
          >
            <div className="bg-indigo-600 p-8 text-center">
              {/* สมมติยังไม่มี icon ให้ใส่แทน */}
              <div className="text-white mx-auto text-5xl">📁</div>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <Link
                  to={`/projects/${project.id}`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
                >
                  ดูรายละเอียด
                </Link>
                <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-full text-sm hover:bg-indigo-50 transition">
                  ดูโค้ด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
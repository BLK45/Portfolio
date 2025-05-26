import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/projectData";
import { ChevronLeft, ChevronRight, Landmark, Building, Users } from "lucide-react";

export default function ProjectDetail() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const thumbnailRef = useRef(null);

  const { id } = useParams();
  const project = projectData[id];

  useEffect(() => {
    const loadImages = async () => {
      const maxImages = project?.imageCount || 20;
      const loadedImages = [];

      for (let i = 1; i <= maxImages; i++) {
        const url = `/images/projects/${id}/${i}.png`;
        const thumb = `/images/projects/${id}/${i}.png`;

        try {
          await fetch(url, { method: "HEAD" });
          loadedImages.push({ id: i, url, thumb });
        } catch (error) {
          console.log(error);
        }
      }

      if (loadedImages.length > 0) {
        setImages(loadedImages);
        setSelectedImage(loadedImages[0]);
      }
    };

    loadImages();
  }, [id, project]);

  const showPreviousImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    scrollThumbnailTo(prevIndex);
  };

  const showNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    scrollThumbnailTo(nextIndex);
  };

  const scrollThumbnailTo = (index) => {
    if (thumbnailRef.current) {
      const thumbnailWidth = 160 + 12;
      thumbnailRef.current.scrollTo({
        left: index * thumbnailWidth,
        behavior: "smooth",
      });
    }
  };

  if (!project) {
    return (
      <div className="font-[Kanit] min-h-screen flex items-center justify-center text-xl text-red-500">
        ไม่พบโปรเจกต์ที่คุณเลือก
      </div>
    );
  }

  const userIcons = [
    // { icon: <Landmark size={16} />, label: "เทศบาลเมือง" },
    // { icon: <Building size={16} />, label: "หน่วยงานภาครัฐ" },
    { icon: <Users size={16} />, label: "สำนักงานตลาดกลางยางพาราสุราษฎร์ธานี" },
  ];

  return (
    <div className="font-[Kanit] min-h-screen pt-20 bg-gray-100 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gallery Section */}
        <div>
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={showPreviousImage}
                className="bg-white hover:bg-indigo-100 border rounded-full w-8 h-8 shadow flex items-center justify-center transition"
                aria-label="Previous Image"
              >
                <ChevronLeft size={16} />
              </button>
              <p className="text-sm text-gray-600 font-medium">เลือกภาพเพิ่มเติม</p>
              <button
                onClick={showNextImage}
                className="bg-white hover:bg-indigo-100 border rounded-full w-8 h-8 shadow flex items-center justify-center transition"
                aria-label="Next Image"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative">
              {selectedImage ? (
                <img
                  src={selectedImage.url}
                  alt="Selected"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
              ) : (
                <span className="text-gray-500 text-lg animate-pulse">กำลังโหลดภาพ...</span>
              )}
            </div>

            <div ref={thumbnailRef} className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img) => (
                <img
                  key={img.id}
                  src={img.thumb}
                  alt="gallery"
                  onClick={() => setSelectedImage(img)}
                  className={`w-40 h-24 object-cover rounded-md cursor-pointer shrink-0 transition duration-200 hover:scale-105 border-2 ${
                    selectedImage?.id === img.id
                      ? "border-indigo-500 shadow-md"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>

            <p className="font-semibold text-lg mt-4">{project.title}</p>
          </div>
        </div>

        {/* Project Info Section */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow p-6 space-y-2">
            <h2 className="text-2xl font-extrabold text-indigo-800 border-b pb-1">{project.title}</h2>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">เทคโนโลยีที่ใช้</h3>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">ผู้ใช้งาน</h3>
            <div className="space-y-2">
              {userIcons.map((user) => (
                <div key={user.label} className="flex items-center gap-3">
                  <div className="bg-indigo-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold">
                    {user.icon}
                  </div>
                  <span className="text-gray-800">{user.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import Image from "next/image"
import Features1 from "@/public/Feature-1.png";
import Features2 from "@/public/Feature-2.png";
import Features3 from "@/public/Feature-3.png";





const Features = () => {

  const features = [
    {
      img: Features1,
      title: "Accurate Prototyping ",
      desc: "Prototyping faster than ever before. We dominate the market with our precision and accuracy."
    },
    {
      img: Features2,
      title: "Custom Manufacturing ",
      desc: "Custom manufacturing solutions for your business. We provide the best quality and the best service."
    },
    {
      img: Features3,
      title: "Complex Geometries ",
      desc: "Complex geometries are no problem for us. We provide the best quality and the best service."
    }
  ]


  return (
    <div className="px-[8%] lg:px-[12%] pb-20" id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          features.map((feature, index) => (
            <div
              key={index}
              className="feature-card flex flex-col md:flex-row gap-5 p-6 cursor-pointer rounded-2xl border border-white hover:border-secondary hover:translate-y-1 transition-all duration-300"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                className="w-15 h-15 object-cover"
              />

              <div className="feature-content">
                <h3 className="text-white Syne mb-3 text-3xl font-bold">{feature.title}</h3>
                <p className="text-gray-300 inter">{feature.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features
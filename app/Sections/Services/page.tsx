"use client"

import Image from "next/image"
import service1 from "@/public/Services-1.png"
import service2 from "@/public/Services-2.png"
import service3 from "@/public/Services-3.png"
import service4 from "@/public/Services-4.png"
import service5 from "@/public/Services-5.png"
import service6 from "@/public/Services-6.png"
import Link from "next/link"


const servicesData = [
  {
    id: "1",
    title: "Rapid & Precise Prototyping",
    desc: "Exelecent for quick prototyping and testing. Our 3D printing services enable you to create physical models of your designs, allowing you to test and validate your ideas before moving to production.",
    image: service1
  },
  {
    id: "2",
    title: "Addictive Manufacturing System",
    desc: "Simple and efficient production process. Our 3D printing services enable you to create physical models of your designs, allowing you to test and validate your ideas before moving to production.",
    image: service2
  },
  {
    id: "3",
    title: "Customized Solutions",
    desc: "Tailored to your specific needs. Get the perfect fit for your business with our 3D printing services.",
    image: service3
  },
  {
    id: "4",
    title: "Design & Developmen",
    desc: "Our design and development services enable you to create physical models of your designs, allowing you to test and validate your ideas before moving to production.",
    image: service4
  },
  {
    id: "5",
    title: "Quality Assurance",
    desc: "Assurance for your products. Always ensure that your products meet the highest quality standards.",
    image: service5
  },
  {
    id: "6",
    title: "Production & Delivery",
    desc: "We ensure that your products are delivered on time and in perfect condition.",
    image: service6
  }
]

const Services = () => {
  return (
    <>
      <div className="px-[8%] section-bg service-bg lg:px-[12%] py-20" id="services">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-5">
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              servicesData.slice(0, 2).map((service, index) => (
                <div key={index} className="flex flex-col gap-5 cursor-pointer rounded-2xl boder border-white hover:border-primary hover:bg-body transition-all dureation-300">
                  <Image
                    src={service.image}
                    alt={service.title}

                    className="object-cover w-15 h-15"
                  />

                  <div>
                    <h3 className="text-white Syne mb-3 text-2xl font-bold">{service.title}</h3>

                    <p className="text-gray-300 Inter">{service.desc}</p>
                  </div>

                  <button className="text-xl mt-4 text-primary hover:text-white transition-all duration-300 cursor-pointer">
                    Read More <i className="ri-arrow-right-double-line"></i>
                  </button>
                </div>
              ))
            }
          </div>
        </div>

        <div></div>
      </div>
    </>
  )
}

export default Services
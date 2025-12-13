"use client"

import Image from "next/image"
import AboutImg from "@/public/About-Us-Image-1.jpg";
import { useState } from "react"
import CountUp from "react-countup";

const faqData = [
  {
    question: "Our Vision",
    answer: "To be the best in the industry with the best quality and the best service."
  },
  {
    question: "Why Choose Us? ",
    answer: "We provide the best quality and the best service."
  },
  {
    question: "What Makes Us Different? ",
    answer: "Unique and innovative solutions for your business. "
  }
]

const stats = [
  { value: 15, suffix: "Yrs", label: "Years of Excellence" },
  { value: 2500, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Materials Available" },
  { value: 1250, suffix: "+", label: "Happy Clients" }
]

const StatCounter = ({ value, suffix }: { value: number, suffix: string }) => {
  return (
    <CountUp
      start={0}
      end={value}
      duration={3}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => (
        <>
          <span ref={countUpRef} className="text-stroke text-white" />
          <span className="text-primary text-stroke font-bold ml-1">{suffix}</span>
        </>
      )}
    </CountUp>
  );
}

const About = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20" id="about">
        <div className="about-image">
          <Image
            src={AboutImg}
            alt="About Image"
            className="rounded-2xl"
          />

          <div className="flex flex-col lg:flex-row gap-5 items-center my-20">
            <div className="w-full lg:w-1/2">
              <div className="title">
                <h3 className="Inter font-semibold uppercase tracking-wide text-secondary">
                  Who We Are
                </h3>

                <h1 className="font-bold Syne my-4 text-4xl md:text-5xl text-white">
                  Shaping the future of Manufacturing
                </h1>

                <p className="text-gray-400 Inter text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, neque quasi nobis tempore quis tempora ullam, soluta obcaecati saepe consequuntur ea libero dicta itaque magni exercitationem nulla, iure vel officiis!
                </p>

                <button className="btn mt-8 px-8 py-2 border border-primary bg-primary rounded-full text-xl hover:bg-transparent cursor-pointer transition-all duration-300 hover:text-primary">
                  More About Us
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              {
                faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="overflow-hidden transition-all duration-300 py-2"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className={`
                        w-full flex justify-between items-center px-8 py-2 cursor-pointer border border-white text-center rounded-full transition-all duration-300
                        ${openIndex === index ? "bg-primary text-white border-none" : ""}  
                      `}
                    >
                      <span className="text-2xl pt-2 Syne text-white font-bold">{faq.question}</span>

                      {openIndex === index ? (
                        <i className="bi bi-chevron-double-down text-white text-xl"></i>
                      ) : (
                        <i className="bi bi-chevron-up text-white text-xl"></i>
                      )}
                    </button>

                    <div className={`
                      transition-all duration-500 overflow-hidden
                      ${openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}  
                    `}>
                      <p className="Inter text-gray-400 text-sm px-4 mt-4 mb-5">
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                ))
              }
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 counter mt-20">
            {
              stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <h2 className="text-6xl font-bold Syne tracking-wide mb-3">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </h2>

                  <p className="text-xl font-light Inter text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default About
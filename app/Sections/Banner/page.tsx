

const Banner = () => {
  return (
    <div className="px-[8%] lg:px-[12%] section-bg py-20" id="banner">
      <div className="w-full flex flex-col justify-center items-center text-center border border-primary rounded-2xl p-10">
        <div className="title">
          <h1 className="Syne font-bold my-4 text-4xl md:text-6xl w-full text-white lg:block hidden">
            Bring Your Design to Life with <br /> Expert 3D Printing
          </h1>

          <h1 className="syne font-bold my-4 text-3xl md:text-6xl w-full text-white lg:hidden flex items-center justify-center">
            Bring Your Design to Life with Expert 3D Printing
          </h1>

          <p className="Inter text-gray-400">
            We offer a range of 3D printing services to help you create physical models of your designs, allowing you to test and validate your ideas before moving to production.
          </p>

          <button className="btn mt-7 px-8 py-3 border border-primary bg-primary rounded-xl text-xl hover:bg-secondary hover:border-transparent transition-all duration-300 cursor-pointer">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
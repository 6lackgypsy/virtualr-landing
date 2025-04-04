const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl tracking-wide">
        VirtualR build tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="text-center mt-10 text-lg text-neutral-500 max-w-4xl leading-8">
        Empower your creativity and bring your VR app ideas to life with out
        intuitive development tools. Get started today and turn your imagination
        into immersive reality.
      </p>
      <div className="my-10 flex justify-center">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 border rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  w-3/4 md:w-1/2 border border-orange-600 shadow-orange-400 mx-2 my-4 "
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1111379565/preview/stock-footage-back-view-of-a-young-engineer-working-on-computer-in-a-technological-office-environment-male.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  w-3/4 md:w-1/2 border border-orange-600 shadow-orange-400 mx-2 my-4 "
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/3520151293/preview/stock-footage-exploring-virtual-world-with-vr-headset-in-an-industrial-space-immersive-innovation.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  )
}

export default Hero

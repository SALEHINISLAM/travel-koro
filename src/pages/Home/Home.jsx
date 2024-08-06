import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import CarouselHome from "../../components/Carosel/CarouselHome";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const places = useLoaderData();
  const [currentRealIndex, setCurrentRealIndex] = useState(0);
  const handleRealIndexChange = (index) => {
    setCurrentRealIndex(index);
    console.log(currentRealIndex, "from home");
  };
  return (
    <div className="min-h-screen" id="house">
      <div className="bg-black bg-opacity-50 w-full min-h-screen">
        <div className="container mx-auto">
          <Navbar from={1} />
          {/* carousel */}
          <div className="flex flex-col md:flex-row pt-32">
            <div className="lg:w-2/5 w-full flex gap-10 flex-col justify-center">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
                {places[currentRealIndex].name}
              </h1>
              <h3 className="text-2xl font-bold text-white">
                {places[currentRealIndex].engagementMessage}
              </h3>
              <Link to={`/place/${currentRealIndex}`}>
                <button className="text-black btn flex flex-row items-center justify-center bg-[#F9A51A] hover:bg-white lg:w-1/2">
                  Booking
                  <FaArrowRightLong />
                </button>
              </Link>
            </div>
            <div className="lg:w-3/5 w-full justify-center">
              <CarouselHome
                places={places}
                onRealIndexChange={handleRealIndexChange}
              />
            </div>
          </div>
          {/* <CustomSearch/> */}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;

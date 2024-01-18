import React from "react";
import img1 from "../../assets/images/slide1.png";

import AddBtn from "../component/AddBtn";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-main  w-full ">
        <div className="dashboard-img  w-full h-full  bg-gray-100 p-3">
          <img
            src={img1}
            alt="dashboard-img"
            className="w-full lg:h-[400px] h-full md:h-[300px] rounded-lg static "
          />
          <div className="relative bottom-[10px]  pl-3 right-0 mr-10 mb-4 mt-[-50px]">
           <AddBtn/>
          </div>
        </div>
        <div className="bg-gray-100 ">
          <div className="categories container px-2 pb-3 ">
            <h1 className="lg:text-[24px] font-bold text-gray-700">
              Categories
            </h1>
            <hr />
            <div className="catego-img flex gap-4">
              <div className="catego pt-3">
                <img
                  src={img1}
                  alt="electronic"
                  className="h-[80px] w-[80px] rounded-md"
                />
                <p>Electronic</p>
              </div>
              <div className="catego pt-3">
                <img
                  src={img1}
                  alt="electronic"
                  className="h-[80px] w-[80px] rounded-md"
                />
                <p>Automobile</p>
              </div>
            </div>
          </div>
        </div>
        <div className="electronics container pt-3">
          <div className="flex justify-between">
            <h1 className="lg:text-[22px] font-bold text-gray-700">
              Electronic
            </h1>
            <a className="lg:text-[20px]  text-gray-700 underline hover:text-sky-500 cursor-pointer">
              View All
            </a>
          </div>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

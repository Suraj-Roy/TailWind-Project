import React from "react";
//import Header from '../assets/Header.png'
import Header from '../assets/Header.png'
import Footer from '../assets/Footer.png'
function Home() {
  return (
    <div className="md:px-12 p-4 mx-auto">
      <div className="bg-gradient rounded-xl rounded-br-[80px] flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-4">
        <div className="md:w-3/5 ">
          <h2 className="md:text-7xl text-4xl text-white mb-6 font-blod">Develope your skills without diligence</h2>
          <p className="text-white text-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga
            iure dicta alias incidunt numquam qui quis ipsum voluptates
            blanditiis, ex, optio nulla a dolores nobis exercitationem id nisi
            facilis?
          </p>
          <div className ="flex justify-center gap-2 overflow-auto">
            <button className="bg-pink-500 p-3 rounded-xl font-semibold hover:text-white duration-75">Get Started</button>
            <button className="bg-yellow-400 p-3 rounded-xl font-semibold hover:text-white duration-75">Discount</button>
          </div>
        </div>
        <div>
            <img src={Footer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;

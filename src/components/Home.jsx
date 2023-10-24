import React from "react";
//import Header from '../assets/Header.png'
import Header from '../assets/Header.png'
import Footer from '../assets/Footer.png'
function Home() {
  return (
    <div className="md:px-12 p-4 mx-auto mt-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-3/5 p-4 mx-auto mt-28">
          <h2>Develope your skills without diligence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga
            iure dicta alias incidunt numquam qui quis ipsum voluptates
            blanditiis, ex, optio nulla a dolores nobis exercitationem id nisi
            facilis?
          </p>
          <div>
            <button>Get Started</button>
            <button>Discount</button>
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

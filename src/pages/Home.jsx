import { Link } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";

import bakso from "../assets/bakso.png";
import isi from "../assets/isi.png";
import cuka from "../assets/cuka.png";
import sambal from "../assets/sambal.png";
import text1 from "../assets/text1.png";
import text2 from "../assets/text2.png";
import text3 from "../assets/text3.png";

const Home = () => {
  return (
    <div className="h-screen sm:pt-16 pt-20 px-5 flex flex-col sm:flex-row sm:justify-evenly justify-between sm:gap-0 gap-10 bg-yellow-100">
      <div className="left  flex flex-col justify-center gap-5 flex-wrap font-poppins">
        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              strings: ["Selamat datang di Baksojos"],
            }}
          />
        </div>
        <h1 className="sm:text-3xl text-xl font-bold">
          Bakso adalah makanan tradisional <br />
          yang terbuat dari daging sapi Pilihan.
        </h1>
        <Link className="bg-yellow-300 w-28 text-center h-12 p-3 rounded-md z-10 hover:w-40 hover:h-44 transition-all group hover:text-center">
          Beli Bakso
          <img src={isi} alt="isi" className="scale-0 group-hover:scale-100" />
        </Link>
      </div>
      <div className="right relative w-80 bottom-0 pt-96 self-center sm:self-end">
        <img
          src={bakso}
          alt="bakso"
          className="absolute w-80 bottom-40 right-0"
          data-aos="zoom-in"
        />
        <img
          src={cuka}
          alt="cuka"
          className="absolute w-20 sm:bottom-32  bottom-36"
          data-aos="fade-up"
        />
        <img
          src={sambal}
          alt="sambal"
          className="absolute w-20 sm:bottom-32  bottom-36 left-40"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <img
          src={text1}
          alt="text1"
          className="absolute w-20 bottom-40 left-60"
          data-aos="fade-left"
          data-aos-delay="500"
        />
        <img
          src={text2}
          alt="text2"
          className="absolute w-20 bottom-80 left-60"
          data-aos="fade-left"
          data-aos-delay="550"
        />
        <img
          src={text3}
          alt="text3"
          className="absolute w-20 bottom-80"
          data-aos="fade-down"
          data-aos-delay="600"
        />
      </div>
    </div>
  );
};

export default Home;

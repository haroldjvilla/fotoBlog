import React, { useContext } from "react";
//import images
import Menimg from '../img/home/Sin título-1.png'
import WomanImg from "../img/home/woman.png";
//import Link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

function Home() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section "
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center ">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 lg:pt-0  lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              Fotografo
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Manizales, COL
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Contactame
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={Menimg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;

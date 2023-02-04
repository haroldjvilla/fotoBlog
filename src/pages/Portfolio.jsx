import React, { useContext } from "react";

// import Link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
// importar transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";
import Galery from "../components/Galery";

function Portfolio() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container mx-auto h-full realtive ">
        <div className="flex flex-col h-full items-center justify-center pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portafolio</h1>
            <p className="mb-12 max-w-sm">
              Capturando Momentos Únicos y Emocionantes, un Viaje a Través de
              Mis Trabajos Fotográficos
              <br />
              <br />
              Cada una de ellas cuenta una historia única y atrae a la vista con colores vívidos y composiciones impactantes
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Contactame
            </Link>
          </motion.div>
          {/* images */}
          {/* <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220] bg-accent overflow-hidden flex justify-center ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220] bg-accent overflow-hidden flex justify-center">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
      <Galery />
    </motion.section>
  );
}

export default Portfolio;

import React, { useContext } from "react";
//import images
import WomanImg from "../img/about/woman2.png";
//import Link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

function About() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none ">
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">Acerca de Mi</h1>
            <p className="mb-12 max-w-sm">
              Soy un apasionado fotógrafo aficionado que ha estado capturando
              imágenes por aproximadamente 4 años. Me encanta experimentar con
              diferentes estilos, <b> pero mis favoritos son los paisajes y los
              retratos.</b> A veces también me aventuro a hacer fotos de marcas.
              
              <br />
              <br />
              Para mí, la fotografía es algo más que un pasatiempo, es una
              verdadera pasión.
            </p>

            <Link to={"/portfolio"} className="btn">
              Ver mi trabajo
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;

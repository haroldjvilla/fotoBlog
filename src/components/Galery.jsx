import { logDOM } from "@testing-library/react";
import React, { useContext } from "react";

import img1 from "../img/portfolio/53343565_2525970100806582_7881335666141822976_n.jpg";
import img2 from "../img/portfolio/IMG_1144.jpg";
import img3 from "../img/portfolio/IMG_1352.jpg";
import img4 from "../img/portfolio/IMG_1536.jpg";
import img5 from "../img/portfolio/IMG_1600.jpg";
import img6 from "../img/portfolio/IMG_1656.jpg";
import img7 from "../img/portfolio/IMG_1688.jpg";
import img8 from "../img/portfolio/IMG_1770.jpg";
import img9 from "../img/portfolio/IMG_1917.jpg";
import img10 from "../img/portfolio/IMG_1921.jpg";
import img11 from "../img/portfolio/IMG_1935.jpg";
import img13 from "../img/portfolio/240449775_908726469721278_2156398360304689383_n.jpg";
import img14 from "../img/portfolio/240497676_548629819548737_408580377978636528_n (1).jpg";
import img15 from "../img/portfolio/240497679_950646739128432_1555249283498354741_n.jpg";
import img16 from "../img/portfolio/240544176_193606809387495_2693660217289599653_n.jpg";
import img17 from "../img/portfolio/240585043_412952120254087_6774019765841462622_n (1).jpg";
import img18 from "../img/portfolio/241359673_309214704292336_7579455097563370910_n.jpg";
import img19 from "../img/portfolio/242385849_155961440060635_7112814786316653897_n.jpg";
import img20 from "../img/portfolio/242400469_413987880091936_8606143144866554139_n.jpg";
import img21 from "../img/portfolio/242818489_1213844682435324_5669013734965432970_n.jpg";
import img22 from "../img/portfolio/243601747_578402623213727_1700294561409394957_n.jpg";
import img23 from "../img/portfolio/243941597_456695152289229_5522939432480779798_n.jpg";

import img25 from "../img/portfolio/IMG_9748.jpg";
import img26 from "../img/portfolio/IMG_8802.jpg";
import img27 from "../img/portfolio/IMG_8525.jpg";
import img28 from "../img/portfolio/IMG_2717.jpg";
import img29 from "../img/portfolio/IMG_3197.jpg";
import img30 from "../img/portfolio/IMG_3344.jpg";
import img31 from "../img/portfolio/IMG_3446.jpg";
import img32 from "../img/portfolio/IMG_3456.jpg";
import img33 from "../img/portfolio/IMG_3473.jpg";
import img34 from "../img/portfolio/IMG_5968.jpg";
import img35 from "../img/portfolio/IMG_5971.jpg";
import img36 from "../img/portfolio/IMG_8139.jpg";


// import motion
import { motion } from "framer-motion";

// import cursor context
import { CursorContext } from "../context/CursorContext";

//import transition
import { transition1 } from "../transitions";

function Galery() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
   
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc: img28,
    },
    {
      id: 29,
      imgSrc: img29,
    },
    {
      id: 30,
      imgSrc: img30,
    },
    {
      id: 31,
      imgSrc: img31,
    },
    {
      id: 32,
      imgSrc: img32,
    },
    {
      id: 33,
      imgSrc: img33,
    },
    {
      id: 34,
      imgSrc: img34,
    },
    {
      id: 35,
      imgSrc: img35,
    },
    {
      id: 36,
      imgSrc: img36,
    },
    
  ];
  return (
    <>
      <div className="w-full max-w-5xl p5 pb-10 mx-auto mb-10 gap-5 lg:columns-3 space-y-5 md:columns-2 columns-1">
        {data.map((item, index) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="pics"
              key={index}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={item.imgSrc}
                style={{ width: "100%" }}
                alt=""
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Galery;

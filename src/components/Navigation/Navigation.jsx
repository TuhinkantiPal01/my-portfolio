import { Stack } from "@mui/material";
import "./Style.css";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <Stack className="max-w-6xl mx-auto">
      <nav id="navigation" className="hidden md:flex justify-between items-center py-5">
        <h1 id="header-name" className="text-3xl font-bold">
          Tuhin Kanti Pal
        </h1>
        <ul id="list-items" className="hidden md:flex gap-x-5 items-center font-semibold">
          <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
            <a href="#">Home</a>
          </motion.li>
          <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
            <a href="#">About</a>
          </motion.li>
          <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
            <a href="#">Skills</a>
          </motion.li>
          <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
            <a href="#">Projects</a>
          </motion.li>
          <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
            <a href="#">Blog</a>
          </motion.li>
          <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
            <a href="#">Contact</a>
          </motion.li>
        </ul>
      </nav>
      <div className="md:hidden">
        <Stack className="">
          <Stack className="p-4 z-20">
            {active ? (
              <FaTimes onClick={handleMenu} size={25} />
            ) : (
              <FaBars onClick={handleMenu} size={25} />
            )}
          </Stack>
          <ul
            id="mobile-list-items"
            className={
              active
                ? `md:hidden h-screen absolute right-0 w-full z-10 bg-[#001C30] bg-opacity-90 gap-x-5 items-center font-semibold text-center space-y-10 py-20 text-white transition-all duration-500`
                : `md:hidden h-screen absolute right-96 w-full z-10 bg-[#001C30] bg-opacity-90 gap-x-5 items-center font-semibold text-center space-y-10 py-20 text-white transition-all duration-500`
            }
          >
            <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
              <a href="#">Home</a>
            </motion.li>
            <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
              <a href="#">About</a>
            </motion.li>
            <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
              <a href="#">Skills</a>
            </motion.li>
            <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
              <a href="#">Projects</a>
            </motion.li>
            <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
              <a href="#">Blog</a>
            </motion.li>
            <motion.li className="list-item" whileHover={{ fontSize: "20px" }}>
              <a href="#">Contact</a>
            </motion.li>
          </ul>
        </Stack>
      </div>
    </Stack>
  );
};

export default Navigation;

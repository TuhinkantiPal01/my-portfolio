import React from "react";
import "./Style.css";
import { Button, Stack } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import Image from "../../assets/myPicture.png";

const Banner = () => {
  return (
    <section id="banner" className="h-screen w-full -z-20 absolute top-0 flex justify-center items-center">
      <div>
        <div className="flex justify-center mb-5 bannerImage">
          <img src={Image} alt="" />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold tracking-wider">
            I Am
            <Typewriter words={["Tuhin Kanti Pal"]} loop={1} typeSpeed={100} />
          </h1>
          <h4 className="text-2xl font-semibold">
            <Typewriter
              words={["Junior Web Developer", "MERN Stack Developer", "Font-End Developer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h4>
        </div>
        <div className="mt-8">
          <Stack direction="row" justifyContent="center" spacing={4}>
            <Button variant="contained" color="primary">
              Download Resume
            </Button>
            <Button variant="contained" color="success" size="sm">
              Hire Now
            </Button>
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Banner;

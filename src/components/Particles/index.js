import React, { useState, useEffect } from "react";
import { Particles as ReactParticles } from "react-particles-js";
import params from "./params";

const Particles = () => {
  const [width, setWidth] = useState("0px");
  const [height, setHeight] = useState("0px");

  const updateWindowDimensions = () => {
    setWidth(`${window.innerWidth}px`);
    setHeight(`${window.innerHeight}px`);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div>
      <ReactParticles width={width} height={height} params={params} />
    </div>
  );
};

export default Particles;

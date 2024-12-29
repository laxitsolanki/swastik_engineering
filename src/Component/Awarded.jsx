import React, { useEffect } from "react";
import '../Component/Awarded.css';
import Renishaw from "../assets/Renishaw.png";
import SCHUNK from "../assets/SCHUNK.png";
import GUHRING from "../assets/GUHRING.webp";
import t_power from "../assets/t_power.png";
import Auto_cam from "../assets/Auto_cam.jpg";
import oemata from "../assets/oemata.png";
import leanworx_technologies_logo from "../assets/leanworx_technologies_logo.jpg";
function Awarded() {
  useEffect(() => {
    // Clone the logos-slide div dynamically in React
    const logoSlider = document.querySelector(".logo-slider");
    const logosSlide = document.querySelector(".logos-slide");

    if (logoSlider && logosSlide) {
      const copy = logosSlide.cloneNode(true);
      logoSlider.appendChild(copy);
    }
  }, []);
  return (
    <>
    <div className="award-container1 award-heading1">Authorized Channel Partner :-</div>
    <div className="logo-slider">
      <div className="logos-slide">
      <img src={Renishaw} alt="" srcset="" />
 <img src={SCHUNK} alt="" srcset="" />
 <img src={GUHRING} alt="" srcset="" />
 <img src={t_power} alt="" srcset="" />
 <img src={Auto_cam} alt="" srcset="" />
 <img src={oemata} alt="" srcset="" />
 <img src={leanworx_technologies_logo} alt="" srcset="" />
      </div>
    </div>
    </>
  );
}

export default Awarded;


"use client";

import ScrollToTop from "react-scroll-up";
import { BsFillRocketFill } from "react-icons/bs";

const ScrollTotopButton = () => {
  return (
    <div className="relative z-30">
      <ScrollToTop showUnder={160} style={{ bottom: 160, right: 85 }}>
        <p className="font-bold text-slate-800 text-3xl cursor-pointer hover:border-2 hover:border-slate-800 hover:rounded-full p-3">
          <BsFillRocketFill />
        </p>
      </ScrollToTop>
    </div>
  );
};

export default ScrollTotopButton;

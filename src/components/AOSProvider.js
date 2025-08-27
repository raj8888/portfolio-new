"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: false,      // animate every time scroll happens
      easing: "ease-in-out",
    });
  }, []);

  return <>{children}</>;
}

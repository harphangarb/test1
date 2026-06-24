import { useEffect } from "react";
import Tour from "@/components/Tour";
import { planeImages } from "@/data/planeImages"; // Verify this path matches where your planeImages file sits

export default function App() {
  // --- MASTER NUCLEAR PRELOADER ENGINE ---
  useEffect(() => {
    Object.values(planeImages).forEach((planeData) => {
      // Normalize data type: handle either array of objects or direct single asset values
      const imagesArray = Array.isArray(planeData)
        ? planeData
        : [{ src: planeData }];

      imagesArray.forEach((imgObj) => {
        if (imgObj && imgObj.src) {
          const img = new Image();
          img.src = imgObj.src;
        }
      });
    });
  }, []); // Fires exactly once at root initialization
  // ---------------------------------------

  return <Tour />;
}

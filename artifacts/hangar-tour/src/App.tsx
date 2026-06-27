import { useEffect } from "react";
import Tour from "@/components/Tour";
import { planeImages } from "@/data/planeImages";
import { Analytics } from "@vercel/analytics/react"; // <--- Notice it ends in /react, not /next

export default function App() {
  // --- MASTER NUCLEAR PRELOADER ENGINE ---
  useEffect(() => {
    Object.values(planeImages).forEach((planeData) => {
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
  }, []);
  // ---------------------------------------

  return (
    <>
      <Tour />
      <Analytics />{" "}
      {/* <--- This silently runs in the background tracking views */}
    </>
  );
}

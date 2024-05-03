import { useEffect, useState } from "react";
import ItemOne from "./parallax/ItemOne";
import ItemTwo from "./parallax/ItemTwo";
import ItemThree from "./parallax/ItemThree";
import ItemFour from "./parallax/ItemFour";
import ItemFive from "./parallax/ItemFive";
import ItemSix from "./parallax/ItemSix";
import ItemSeven from "./parallax/ItemSeven";

export default function Parallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateOffset = (factor) => `${scrollY * factor}px`;

  return (
    <div className="w-full h-[25vh] md:h-[57vh] relative bg-black overflow-hidden">
      
      <ItemOne offset={calculateOffset(0.2)} />
      <ItemTwo offset={calculateOffset(0.3)} />
      <ItemThree offset={calculateOffset(0.4)} />
      <ItemFour offset={calculateOffset(0.6)} />
      <ItemFive offset={calculateOffset(0.8)} />
      <ItemSix offset={calculateOffset(1.0)} />
      <ItemSeven offset={calculateOffset(0.6)} />
    </div>
  );
}

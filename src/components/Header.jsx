import { useState, useEffect } from "react";
import HamburgerMenu from "./UI/HamburgerMenu";
import Navlist from "./UI/Navlist";
import { BiHotel } from "react-icons/bi";

export default function Header() {
  const [show, setShow] = useState(false);
  const [media, setMedia] = useState(window.innerWidth > 992);

  function handleShow() {
    setShow((oldShow) => !oldShow);
  }

  const updateMedia = () => {
    setMedia(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <nav className="max-w-desktop mx-auto py-4 px-4 flex justify-between items-center breakpoint-lg:py-0 breakpoint-xl:px-8">
      <div
        aria-label="logo"
        className="flex items-center text-3xl cursor-pointer z-30"
      >
        <BiHotel className="text-Teal" />
        <span>
          <span className="text-Teal">H</span>otel
        </span>
      </div>

      {media ? "" : <HamburgerMenu handleShow={() => handleShow()} />}

      {media ? <Navlist /> : ""}
      {show && <Navlist />}
    </nav>
  );
}

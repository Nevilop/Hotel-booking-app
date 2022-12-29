import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Navlist() {
  return (
    <div className="flex flex-col w-9/12 translate-x-1/3 fixed inset-0 z-20 pt-[4.25rem] bg-white breakpoint-sm:w-2/4 breakpoint-sm:translate-x-full breakpoint-lg:flex-row breakpoint-lg:items-center breakpoint-lg:gap-12 breakpoint-lg:relative breakpoint-lg:w-auto  breakpoint-lg:pt-0 breakpoint-lg:translate-x-0">
      <ul className="flex flex-col mb-16 py-6 pl-4 gap-8 bg-dark/10 breakpoint-lg:flex-row breakpoint-lg:justify-center breakpoint-lg:gap-10 breakpoint-lg:bg-transparent breakpoint-lg:py-0 breakpoint-lg:pl-0 breakpoint-lg:mb-0">
        <li>
          <Link
            to="/"
            className="transition-all duration-200 ease-in-out hover:text-dark/50"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Rooms"
            className="transition-all duration-200 ease-in-out hover:text-dark/50"
          >
            Rooms
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-200 ease-in-out hover:text-dark/50"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-200 ease-in-out hover:text-dark/50"
          >
            Contact Us
          </a>
        </li>
      </ul>
      <Link to="/Login_Signup">
        <button className="w-44 flex items-center gap-4 ml-4 px-8 py-5 rounded-full bg-accent text-white breakpoint-lg:ml-0 breakpoint-lg:w-auto breakpoint-lg:rounded-none breakpoint-lg:py-7 breakpoint-lg:px-8 transition-all duration-200 ease-in-out hover:bg-dark">
          <AiOutlineUserAdd className="w-5 h-5" />
          Sing up / Login
        </button>
      </Link>
    </div>
  );
}

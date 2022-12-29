import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export default function Login_Signup() {
  return (
    <section>
      <div className="max-w-[568px] mx-auto my-16 px-6 pb-6 rounded-lg shadow-xl bg-white">
        <header>
          <div className="py-5 mb-12 border-b border-dark/50">
            <h2 className="text-center font-bold text-xl">Log in or sign up</h2>
          </div>
        </header>

        <form action="/">
          <input
            type="text"
            placeholder="Phone number"
            className="block w-full py-3 pl-4 mb-2 rounded-lg  border-2 border-dark"
          />
          <p className="text-xs mb-6">
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
            <a href="#" className="text-xs underline underline-offset-1">
              Privacy Policy
            </a>
          </p>
          <button className="w-full py-3 rounded-lg bg-accent text-white">
            Continue
          </button>
        </form>

        <div className="custom-divider my-4 flex items-center">or</div>

        <button className="w-full mb-6 py-3 border-2 border-dark rounded-lg">
          <div className="flex items-center">
            <FaFacebook className="w-5 h-5 ml-5 text-[#3b5998]" />
            <p className="mx-auto">Continue with Facebook</p>
          </div>
        </button>
        <button className="w-full mb-6 py-3 border-2 border-dark rounded-lg">
          <div className="flex items-center">
            <FcGoogle className="w-5 h-5 ml-5" />
            <p className="mx-auto">Continue with Google</p>
          </div>
        </button>
        <button className="w-full mb-6 py-3 border-2 border-dark rounded-lg">
          <div className="flex items-center">
            <FaApple className="w-5 h-5 ml-5" />
            <p className="mx-auto">Continue with Apple</p>
          </div>
        </button>
        <button className="w-full py-3 border-2 border-dark rounded-lg">
          <div className="flex items-center">
            <AiOutlineMail className="w-5 h-5 ml-5" />
            <p className="mx-auto">Continue with Email</p>
          </div>
        </button>
      </div>
    </section>
  );
}

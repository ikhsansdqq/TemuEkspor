export default function Topnav() {
    return (
        <div className="md:max-w-screen-xl md:flex md:justify-between md:mx-auto md:py-6 hidden">
          <div className="flex space-x-6 items-center">
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">
              Terms of Conditional
            </a>
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">
              Terms of Use
            </a>
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">
              Legal
            </a>
          </div>
          <div className="flex space-x-12 items-center">
            {/* <a href="/" className="text-[#1E1E1E] hover:text-gray-700">
              Bahasa Indonesia
            </a> */}
            <div className="flex space-x-8 items-center">
              <a
                href="/profile/login"
                className="text-[#1E1E1E] hover:text-gray-700 font-semibold">
                <u>Login</u></a>
              <a
                href="/profile/register"
                className="hover:text-gray-700 rounded-full text-[13px] font-bold bg-black px-6 py-2 text-white">
                Register</a>
            </div>
          </div>
        </div>
    )
}
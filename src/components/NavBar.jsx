import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a
          href="https://www.linkedin.com/in/fernandoriggi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
        <FaLinkedin/>
        </a>
        <a
          href="https://github.com/FernandoRiggi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
        <FaGithub/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
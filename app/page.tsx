import { FaPython, FaGithub, FaDocker, FaLinux, FaInstagram, FaSpotify, FaDiscord } from "react-icons/fa";
import { SiC, SiCplusplus, SiMysql, SiGit } from "react-icons/si";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-gray-900 text-white flex flex-col items-center min-h-screen overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col items-center mt-10">
        <Image
          src="https://cdn.discordapp.com/attachments/1268230743788752937/1314527019173675008/ee6d75ddd8c5925e05ffc863038183f5.png?ex=67541830&is=6752c6b0&hm=561434e8e132df84180790386c9655da0b611f49c84ef5cd0aa0d2eef6feabe8&"
          alt="Top Image"
          width={300}
          height={300}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4 animate-fadeIn">
          Hey!! I'm Ray
        </h1>
        <h3 className="text-xl mt-2 animate-fadeIn delay-300">
          I'm just an engineering student :0
        </h3>
      </div>

      {/* Tech Stack Section */}
      <div className="flex flex-col items-center my-10">
        <h4 className="text-5xl font-semibold mb-4">Tech Stack</h4>
        <div className="flex flex-wrap justify-center gap-8 text-6xl">
          <SiC title="C" className="text-blue-500 hover:text-blue-400 transition-colors" />
          <SiCplusplus title="C++" className="text-blue-700 hover:text-blue-600 transition-colors" />
          <FaPython title="Python" className="text-yellow-500 hover:text-yellow-400 transition-colors" />
          <SiMysql title="MySQL" className="text-blue-600 hover:text-blue-500 transition-colors" />
          <SiGit title="Git" className="text-red-500 hover:text-red-400 transition-colors" />
          <FaGithub title="GitHub" className="text-gray-400 hover:text-gray-300 transition-colors" />
          <FaDocker title="Docker" className="text-blue-400 hover:text-blue-300 transition-colors" />
          <FaLinux title="Linux" className="text-yellow-600 hover:text-yellow-500 transition-colors" />
        </div>
      </div>

      {/* Bottom Section with Social Media Icons */}
      <div className="absolute bottom-10 flex space-x-4">
        <a
          href="https://www.instagram.com/being.ray04/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition-transform transform hover:scale-110"
        >
          <FaInstagram className="text-3xl" />
        </a>
        <a
          href="https://open.spotify.com/user/31z5ocqbzhbwdgbqhpgsgz67h36u?si=94a1ce9a629e4c17"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition-transform transform hover:scale-110"
        >
          <FaSpotify className="text-3xl" />
        </a>
        <a
          href="https://discord.com/users/721249954504638500"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-600 text-white p-4 rounded-full transition-transform transform hover:scale-110"
        >
          <FaDiscord className="text-3xl" />
        </a>
        <a
          href="https://github.com/theabsoluterayS"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full transition-transform transform hover:scale-110"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </main>
  );
}

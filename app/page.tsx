'use client';
import Image from "next/image";
import React from 'react'; 
import { Spotlight } from '../components/Spotlight';
import {
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFlask
} from 'react-icons/si';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaDocker,
  FaLinux,
  FaDiscord,
  FaInstagram,
  FaSpotify
} from 'react-icons/fa';

const Hero = () => {
  return (
    <main >
      <div className="relative min-h-screen bg-black text-white pt-36 pb-20 overflow-hidden">

        {/* Spotlights */}
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="blue" />
          <Spotlight className="-top-28 -left-80 md:-left-32 h-[80vh] w-[50vw]" fill="purple" />
        </div>

        {/* Radial mask */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4">
          {/* Avatar + Intro */}
          <Image
            src="https://avatars.githubusercontent.com/u/120208761"
            alt="Ray Avatar"
            width={200}
            height={200}
            className="rounded-full mb-4 border-4 border-white"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-center animate-fadeIn">
            Hey!! I&apos;m Ray
          </h1>
          <h3 className="text-lg sm:text-xl mt-2 text-gray-300 animate-fadeIn delay-300">
            Just an engineering student who loves building things.
          </h3>

          {/* Tech Stack Card */}
          <div className="mt-12 w-full max-w-6xl bg-gradient-to-br from-gray-800/70 via-gray-900/70 to-black/80 border border-gray-700 rounded-3xl p-8 shadow-lg backdrop-blur-xl">
            <h4 className="text-3xl sm:text-4xl font-semibold text-center mb-10">Tech Stack</h4>

            {/* Currently Learning */}
            <div className="mb-10">
              <div className="flex justify-center">
                <h5 className="text-xl font-semibold text-black px-4 py-1 rounded bg-slate-500 w-fit text-center">
                  Currently learning
                </h5>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full w-full h-full scale-110 z-0" />
                <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-8 text-4xl sm:text-5xl">
                
                  <FaReact title="React" className="text-cyan-400 hover:text-cyan-300 transition-colors" />
              
                  <FaNodeJs title="Node.js" className="text-green-500 hover:text-green-400 transition-colors" />
                  <SiExpress title="Express.js" className="text-gray-200 hover:text-white transition-colors" />
                  <SiPostgresql title="PostgreSQL" className="text-blue-500 hover:text-blue-400 transition-colors" />
                  <SiSupabase title="Supabase" className="text-green-600 hover:text-green-500 transition-colors" />
                  <SiTypescript title="TypeScript" className="text-blue-400 hover:text-blue-300 transition-colors" />
                  
                </div>
              </div>
            </div>

            {/* Already Comfortable With */}
            <div>
              <div className="flex justify-center">
                <h5 className="text-xl font-semibold text-black px-4 py-1 rounded bg-slate-500 w-fit text-center">
                  Comfortable With
                </h5>
              </div>


              <div className="relative mt-6">
                <div className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-full w-full h-full scale-110 z-0" />
                <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-8 text-4xl sm:text-5xl">
                  <SiGit title="Git" className="text-red-500 hover:text-red-400 transition-colors" />
                  <FaGithub title="GitHub" className="text-gray-400 hover:text-gray-300 transition-colors" />
                  <FaDocker title="Docker" className="text-blue-400 hover:text-blue-300 transition-colors" />
                  <FaLinux title="Linux" className="text-yellow-600 hover:text-yellow-500 transition-colors" />
                  <SiFlask title="Flask" className="text-gray-300 hover:text-gray-200 transition-colors" />
                  <FaPython title="Python" className="text-yellow-500 hover:text-yellow-400 transition-colors" />
                  <SiJavascript title="JavaScript" className="text-yellow-400 hover:text-yellow-300 transition-colors" />
                  <SiHtml5 title="HTML5" className="text-orange-500 hover:text-orange-400 transition-colors" />
                  <SiTailwindcss title="TailwindCSS" className="text-sky-400 hover:text-sky-300 transition-colors" /><SiCss3 title="CSS3" className="text-blue-500 hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards with Glow Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14 px-4 max-w-6xl w-full">
            {/* About Me */}
            <div className="group bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-700 hover:border-sky-400 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br z-0" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">About Me</h2>
                <p className="text-gray-300">
                  I&apos;m Ray, a dev who loves Linux, music, and building full-stack apps with a touch of flair.
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="group bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-700 hover:border-pink-400 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-400 z-0" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Flux Music Player</li>
                  <li>Discord Bots</li>
                  <li>Eduhome</li>
                  <li>Api-wrapper</li>
                  <li>Crypto-api</li>
                </ul>
                <h1 className="mt-4 text-center font-sans text-white">Checkout my github for projects</h1>
              </div>
            </div>

            {/* Contact */}
            <div className="group bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-700 hover:border-pink-400 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br z-0 hover:drop-shadow-sm" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Contact</h2>
                <p className="text-gray-300 mb-2">Feel free to connect!</p>
                <p className="text-sm text-gray-400">socials, or DM me on Discord 💬</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex space-x-4">
            <a href="https://www.instagram.com/being.ray04/" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition-transform transform hover:scale-110">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://open.spotify.com/user/31z5ocqbzhbwdgbqhpgsgz67h36u?si=94a1ce9a629e4c17" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition-transform transform hover:scale-110">
              <FaSpotify className="text-3xl" />
            </a>
            <a href="https://discord.com/users/721249954504638500" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 hover:bg-indigo-600 text-white p-4 rounded-full transition-transform transform hover:scale-110">
              <FaDiscord className="text-3xl" />
            </a>
            <a href="https://github.com/theabsoluteray" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full transition-transform transform hover:scale-110">
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

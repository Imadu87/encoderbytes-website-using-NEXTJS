import Image from "next/image";

import logo from "@/public/Images/logo.webp";

import { FaFacebookSquare, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbWorldCode } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-16 bg-blue-500 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <Image
            src={logo}
            alt="Logo"
            width={160}
            height={160}
            className="object-contain"
          />

          <p className="text-white/90 leading-relaxed">
            Encoder Bytes is on a mission to provide the highest level of
            quality software products and services across the globe.
          </p>

          <div className="flex gap-3 mt-2 text-white text-2xl">
            <FaFacebookSquare className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
            <FaGithub className="hover:text-gray-300 cursor-pointer" />
            <FaTwitterSquare className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          <ul className=" text-white/90">
            <li>• Home</li>
            <li>• About</li>
            <li>• Services</li>
            <li>• How do we work</li>
            <li>• Blog</li>
            <li>• Career</li>
            <li>• Portfolio</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>

          <ul className=" text-white/90">
            <li className="flex items-center gap-3">
              <FaSquarePhone className="text-xl" />
              <span>+92 333 9921398</span>
            </li>

            <li className="flex items-center gap-3">
              <MdOutlineMailOutline className="text-xl" />
              <span>info@encoderbytes.com</span>
            </li>

            <li className="flex items-center gap-3">
              <TbWorldCode className="text-xl" />
              <span>www.encoderbytes.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Address</h2>

          <p className="text-white/90 leading-relaxed">
            EncoderBytes, IT Park, PTCL Training Center, Peshawar, KP, Pakistan
          </p>

          {/* Map */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.751624170356!2d71.49367877469027!3d34.01558482075945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deca1d5e4c17d9%3A0x6e69db6f5164e553!2sPTCL%20Training%20Center%2C%20Peshawar!5e0!3m2!1sen!2s!4v1707034400000!5m2!1sen!2s"
              width="100%"
              height="150"
              className="rounded-lg border border-white/20"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

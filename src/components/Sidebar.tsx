import React from "react";
import pic from "../../public/images/WhatsApp.jpg";
import leetcode from "../../public/images/leetcode.png";
import github from "../../public/images/github-logo.png";
import linkedin from "../../public/images/linkedin.png";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
export default function Sidebar() {
  return (
    <aside className="w-80 mt-10 shadow-md rounded-md flex flex-col items-center">
      <Image src={pic} alt="pic" className="rounded-md shadow-lg" />

      <div className="flex flex-col gap-2 w-full p-4">
        <h2 className="text-2xl text-black/70">Rajesh Choudhary</h2>
        <p className="text-gray-600 text-sm">
          Full Stack Engineer at BudgetICU
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            className="text-blue-600 hover:underline"
            href="https://leetcode.com/u/DevRajesh/"
          >
            <Image src={leetcode} alt="leetcode" width={28} height={28} />
          </Link>
          <Link
            href="https://github.com/AIWithRajesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            <Image src={github} alt="GitHub" width={28} height={28} />
          </Link>
          <Link
            href="https://linkedin.com/in/rajeshdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            <Image src={linkedin} alt="LinkedIn" width={28} height={28} />
          </Link>
        </div>
        <div className="h-[1px] my-4 bg-gray-300"></div>
        <div className="">
          <div className="flex gap-2 text-sm text-gray-600">
            <Mail width={16} />
            <p>rajesh.helloai@gmail.com</p>
          </div>
          <div className="flex gap-2 text-sm text-gray-600">
            <MapPin width={16} />
            <p>Noida, (UP) India</p>
          </div>
          <div className="flex gap-2 text-sm text-gray-600">
            <MapPin width={16} />
            <p>
              <Link
                className="hover:text-blue-400 hover:underline"
                href="https://drive.google.com/file/d/1kMTjlvSA3_pbvleVMPa3WJA5J3PFcWP9/view?usp=drive_link"
              >
                CV
              </Link>
              , (as of early 2023)
            </p>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            © 2025 Rajesh Choudhary. All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  );
}

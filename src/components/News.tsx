"use client";

import Image from "next/image";
import { news } from "../../public/data";
import github from "../../public/images/github-logo.png";
import React from "react";

export default function News() {
  const ref = React.useRef<HTMLDivElement>(null);
  console.log(ref.current);
  React.useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
    }
  }, []);

  return (
    <div className="mt-10 flex-1">
      <h2 className="font-semibold text-2xl">News</h2>
      <div className="mt-10 bg-white flex w-[53rem] space-x-4 overflow-x-auto noscrollbar">
        {news.map((item, index) => (
          <div
            ref={ref}
            key={index}
            className="mb-4 border border-color min-h-[465px] min-w-45 max-[212px] p-4 rounded-md "
          >
            <Image
              src={github}
              alt="logo"
              className="h-40 w-50 object-cover bg-white "
            />
            <h3 className="text-sm">{item.title}</h3>
            <p className="text-sm mt-10 text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

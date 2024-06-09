"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <h2 className="text-xl text-black">
          Yoga <span className="text-red-500">App</span>
        </h2>
        <p className="leading-relaxed mt-2 text-[15px]">
          This is a app showing various yoga poses using NextJS and a
          third-party{" "}
          <Link
            className="text-gray-700 hover:text-indigo-600"
            href="https://github.com/alexcumplido/yoga-api"
          >
            Yoga API
          </Link>
          .
        </p>
      </div>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {currentYear} Website made by{" "}
          <Link
            className="text-gray-700 hover:text-indigo-600"
            href="https://ricky-drohan.netlify.app/"
          >
            Ricky Drohan
          </Link>
        </div>
      </div>
    </footer>
  );
}

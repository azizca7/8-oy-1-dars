import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gray-100  flex flex-col items-center">
      <nav className="flex justify-center gap-7 p-5 bg-white shadow-md w-full">
        <Link
          href="/"
          className="text-lg font-semibold text-blue-600 underline"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-lg font-semibold text-blue-600 hover:underline"
        >
          Products
        </Link>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-24 px-6">
        <div>
          <Image
            src="/mee.jpg"
            alt="My Photo"
            width={250}
            height={160}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to My Store!
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We have all quality and affordable products.
          </p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition block mt-6"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

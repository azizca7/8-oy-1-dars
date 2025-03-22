import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsCard = ({ p }) => {
  return (
    <Link
      href={`/products/${p.id}`}
      className="max-w-[400px] flex flex-col items-center border border-gray-200 rounded-2xl shadow-xl p-4 space-y-3 text-center hover:shadow-3xl hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <Image
        className="aspect-square rounded-lg"
        src={p.image}
        alt="image"
        width={200}
        height={200}
      />
      <h3 className="text-xl font-semibold text-slate-900 truncate">
        {p.title.length > 30 ? p.title.slice(0, 30) + "..." : p.title}
      </h3>
      <h3 className="text-[16px] text-gray-600 uppercase tracking-wide">
        {p.category}
      </h3>
      <h3 className="text-lg font-bold text-green-600">{`${p.price}$`}</h3>
      <p className="text-sm text-gray-500 truncate w-full">{p.description}</p>
    </Link>
  );
};

export default ProductsCard;

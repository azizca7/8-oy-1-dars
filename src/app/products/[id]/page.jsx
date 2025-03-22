"use client";

import ProductsCard from "@/copmonents/ProductsCard";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        if (res.status === 200) {
          setMainData(res.data);
        }
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    if (id) getData(); // Faqat ID mavjud bo'lsa so‘rov jo‘natiladi
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-6 mt-16">
      <Link
        className="p-3 bg-amber-300 rounded-md hover:bg-amber-400 transition"
        href="/products"
      >
        Go Back
      </Link>
      {mainData ? <ProductsCard p={mainData} /> : <p>Yuklanmoqda...</p>}
    </div>
  );
};

export default Page;
